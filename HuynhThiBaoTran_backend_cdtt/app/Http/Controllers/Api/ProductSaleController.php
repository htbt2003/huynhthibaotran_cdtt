<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ProductSaleController extends Controller
{
        public function index()
    {
        $prosales = Productsale::where(['status', '!=', 0],)
            ->orderBy('created_at', 'DESC')
            ->select('id', 'name', 'slug', 'category_id', 'brand_id', 'image')
            ->get();
        $total = Productsale::count();
        return response()->json(
            [
                'status' => true, 
                'message' => 'Tải dữ liệu thành công',
                'prosales' => $prosales,
                'total' => $total
            ],
            200
        );
    }
    public function show($id)
    {
        $prosale = Productsale::find($id);
        return response()->json(
            [   
                'status' => true, 
                'message' => 'Tải dữ liệu thành công', 
                'prosale' => $prosale
            ],
            200
        );
    }
    public function store(Request $request)
    {
        $prosale = new prosale();
        $prosale->category_id = $request->category_id; //form
        $prosale->prosale_id = $request->prosale_id; //form
        $prosale->name = $request->name; //form
        $prosale->slug = Str::of($request->name)->slug('-');
        $prosale->price = $request->price; //form
        $prosale->price_sale = $request->price_sale; //form
        //upload image
        $files = $request->image;
        if ($files != null) {
            $extension = $files->getClientOriginalExtension();
            if (in_array($extension, ['jpg', 'png', 'gif', 'webp', 'jpeg'])) {
                $filename = date('YmdHis') . '.' . $extension;
                $prosale->image = $filename;
                $files->move(public_path('images/prosale'), $filename);
            }
        }
        //
        $prosale->qty = $request->qty; //form
        $prosale->detail = $request->detail; //form
        $prosale->metakey = $request->metakey; //form
        $prosale->metadesc = $request->metadesc; //form
        $prosale->created_at = date('Y-m-d H:i:s');
        $prosale->created_by = 1;
        $prosale->status = $request->status; //form
        if($prosale->save())//Luuu vao CSDL
        {
            return response()->json(
                [
                    'status' => true, 
                    'message' => 'Thành công', 
                    'prosale' => $prosale
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
                    'prosale' => null
                ],
                422
            );
        }
    }
    public function update(Request $request, $id)
    {
        $prosale = Productsale::find($id);
        if($prosale == null)//Luuu vao CSDL
        {
            return response()->json(
                [
                    'status' => false, 
                    'message' => 'Không tìm thấy dữ liệu', 
                    'prosale' => null
                ],
                404
            );    
        }
        $prosale->category_id = $request->category_id; //form
        $prosale->prosale_id = $request->prosale_id; //form
        $prosale->name = $request->name; //form
        $prosale->slug = Str::of($request->name)->slug('-');
        $prosale->price = $request->price; //form
        $prosale->price_sale = $request->price_sale; //form
        //upload image
        $files = $request->image;
        if ($files != null) {
            $extension = $files->getClientOriginalExtension();
            if (in_array($extension, ['jpg', 'png', 'gif', 'webp', 'jpeg'])) {
                $filename = date('YmdHis') . '.' . $extension;
                $prosale->image = $filename;
                $files->move(public_path('images/prosale'), $filename);
            }
        }
        //
        $prosale->qty = $request->qty; //form
        $prosale->detail = $request->detail; //form
        $prosale->metakey = $request->metakey; //form
        $prosale->metadesc = $request->metadesc; //form
        $prosale->updated_at = date('Y-m-d H:i:s');
        $prosale->updated_by = 1;
        $prosale->status = $request->status; //form
        if($prosale->save())//Luuu vao CSDL
        {
            return response()->json(
                [
                    'status' => true, 
                    'message' => 'Cập nhật dữ liệu thành công', 
                    'prosale' => $prosale
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
                    'prosale' => null
                ],
                422
            );
        }
    }
    public function destroy($id)
    {
        $prosale = Productsale::findOrFail($id);
        if($prosale == null)//Luuu vao CSDL
        {
            return response()->json(
                [
                    'status' => false, 
                    'message' => 'Không tìm thấy dữ liệu', 
                    'prosale' => null
                ],
               404 
            );    
        }
        if($prosale->delete())
        {
            return response()->json(
                [
                    'status' => true,
                    'message' => 'Xóa thành công',
                    'prosale' => $prosale
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
                    'prosale' => null
                ],
                422
            );    
        }

}
