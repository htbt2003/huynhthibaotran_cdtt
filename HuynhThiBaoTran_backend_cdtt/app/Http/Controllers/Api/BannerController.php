<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Banner;


class BannerController extends Controller
{
    public function banner_list($position)
    {
        $args = [
            ['position', '=', $position],
            ['status', '=', 1]
        ];
        $banners = Banner::where($args)
            ->orderBy('sort_order', 'ASC')
            ->get();
        return response()->json(
            [
                'status' => true,
                'message' => 'Tải dữ liệu thành công',
                'banners' => $banners
            ],
            200
        );
    }
    public function index()
    {
        $banners = Banner::where('status', '!=', 0)
        ->orderBy('created_at', 'DESC')
        ->select('id', 'name', 'slug', 'image', 'link', 'position' )
        ->get();
        $total = Banner::count();
        return response()->json(
            [
                'status' => true, 
                'message' => 'Tải dữ liệu thành công',
                'banners' => $banners,
                'total' => $total
            ],
            200
        );
    }
    public function show($id)
    {
        $banner = Banner::find($id);
        return response()->json(
            ['status' => true, 'message' => 'Tải dữ liệu thành công', 'banner' => $banner],
            200
        );
    }
    public function store(Request $request)
    {
        $banner = new banner();
        $banner->name = $request->name; //form
        $banner->link = $request->link; //form
        $banner->sort_order = $request->sort_order; //form
        $banner->position = $request->position; //form
        $slug = Str::of($request->name)->slug('-');
        //upload image
        $files = $request->image;
        if ($files != null) {
            $extension = $files->getClientOriginalExtension();
            if (in_array($extension, ['jpg', 'png', 'gif', 'webp', 'jpeg'])) {
                $filename = date('YmdHis') . '.' . $extension;
                $banner->image = $filename;
                $files->move(public_path('images/banner'), $filename);
            }
        }
        $banner->created_at = date('Y-m-d H:i:s');
        $banner->created_by = 1;
        $banner->status = $request->status; //form
        if($banner->save())//Luuu vao CSDL
        {
            return response()->json(
                [
                    'status' => true, 
                    'message' => 'Thành công', 
                    'banner' => $banner
                ],
                201
            );    
        }
        else
        {
            return response()->json(
                [
                    'status' => false, 
                    'message' => 'Thêm không thành công', 
                    'banner' => null
                ],
                422
            );
        }
    }
    public function update(Request $request, $id)
    {
        $banner = Banner::find($id);
        if($banner == null)
        {
            return response()->json(
                [
                    'status' => false, 
                    'message' => 'Không tìm thấy dữ liệu', 
                    'banner' => null
                ],
                404
            );    
        }
        $banner->name = $request->name; //form
        $banner->link = $request->link; //form
        $banner->sort_order = $request->sort_order; //form
        $banner->position = $request->position; //form
        $slug = Str::of($request->name)->slug('-');
        //upload image
        $files = $request->image;
        if ($files != null) {
            $extension = $files->getClientOriginalExtension();
            if (in_array($extension, ['jpg', 'png', 'gif', 'webp', 'jpeg'])) {
                $filename = date('YmdHis') . '.' . $extension;
                $banner->image = $filename;
                $files->move(public_path('images/banner'), $filename);
            }
        }
        $banner->updated_at = date('Y-m-d H:i:s');
        $banner->updated_by = 1;
        $banner->status = $request->status; //form
        if($banner->save())//Luuu vao CSDL
        {
            return response()->json(
                [
                    'status' => true, 
                    'message' => 'Cập nhật dữ liệu thành công', 
                    'banner' => $banner
                ],
                201
            );    
        }
        else
        {
            return response()->json(
                [
                    'status' => false, 
                    'message' => 'Cập nhật dữ liệu không thành công', 
                    'banner' => null
                ],
                422
            );
        }
    }
    public function destroy($id)
    {
        $banner = Banner::findOrFail($id);
        if($banner == null)
        {
            return response()->json(
                [
                    'status' => false, 
                    'message' => 'Không tìm thấy dữ liệu', 
                    'banner' => null
                ],
               404 
            );    
        }
        if($banner->delete())
        {
            return response()->json(
                [
                    'status' => true,
                    'message' => 'Xóa thành công',
                    'banner' => $banner
                ],
                200
            );    
        }
        else
        {
            return response()->json(
                [
                    'status' => false,
                    'message' => 'Xóa không thành công',
                    'banner' => null
                ],
                422
            );    
        }
    }
}
