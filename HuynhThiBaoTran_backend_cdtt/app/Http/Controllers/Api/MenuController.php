<?php

namespace App\Http\Controllers\Api;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Menu;
use App\Models\Brand;
use App\Models\Category;
use App\Models\Post;
use App\Models\Topic;

class MenuController extends Controller
{
    public function menu_list($position, $parent_id = 0)
    {
        $args = [
            ['position', '=', $position],
            ['parent_id', '=', $parent_id],
            ['status', '=', 1]
        ];
        $menus = Menu::where($args)
            ->orderBy('created_at', 'ASC')
            ->get();
        if(count($menus)){
            return response()->json(
                [
                    'status' => true,
                    'message' => 'Tải dữ liệu thành công',
                    'menus' => $menus
                ],
                200
            );
        }
        else{
            return response()->json(
                [
                    'status' => false,
                    'message' => 'Không có dữ liệu',
                    'menus' => null
                ],
                200
            );
        }
    }
    public function index()
    {
        $menus = Menu::where('status', '!=', 0)
        ->orderBy('created_at', 'DESC')
        ->select('id', 'name', 'link', 'position' )
        ->get();
        $category = Menu::where('status', '!=', 0)
        ->orderBy('created_at', 'DESC')
        ->select('id', 'name', 'link', 'position' )
        ->get();
        $brand = Menu::where('status', '!=', 0)
        ->orderBy('created_at', 'DESC')
        ->select('id', 'name', 'link', 'position' )
        ->get();
        $page = Menu::where('status', '!=', 0)
        ->orderBy('created_at', 'DESC')
        ->select('id', 'name', 'link', 'position' )
        ->get();
        $topic = Menu::where('status', '!=', 0)
        ->orderBy('created_at', 'DESC')
        ->select('id', 'name', 'link', 'position' )
        ->get();
        $total = Menu::count();
        return response()->json(
            [
                'status' => true, 
                'message' => 'Tải dữ liệu thành công',
                'menus' => $menus,
                'category' => $category,
                'brand' => $brand,
                'page' => $page,
                'topic' => $topic,
                'total' => $total
            ],
            200
        );
    }
    public function show($id)
    {
        $menu = Menu::find($id);
        return response()->json(
            ['status' => true, 'message' => 'Tải dữ liệu thành công', 'menu' => $menu],
            200
        );
    }
    public function store(Request $request)
    {
        $listid = $request->listid;
        $type = $request->type;
        $category = Category::find($listid[0]);
                    $menu = new Menu();
                    $menu->name = $category->name;
                    $menu->link = '/danh-muc-san-pham/'.$category->slug; 
                    $menu->parent_id = 0;
                    $menu->type = $request->type;
                    $menu->created_at = date('Y-m-d H:i:s');
                    $menu->created_by = 1;
                    $menu->status = 2;
                    $menu->position = $request->position;    
                    $menu->save();  
        // switch ($type) {
        //     case "danh-muc-san-pham":
        //         foreach($listid as $id)
        //         {
        //             $category = Category::find($id);
        //             $menu = new Menu();
        //             $menu->name = $category->name;
        //             $menu->link = '/danh-muc-san-pham/'.$category->slug; 
        //             $menu->parent_id = 0;
        //             $menu->type = $request->type;
        //             $menu->created_at = date('Y-m-d H:i:s');
        //             $menu->created_by = 1;
        //             $menu->status = 2;
        //             $menu->position = $request->position;    
        //             $menu->save();      
        //         }
        //         break;
        //     case "thuong-hieu":
        //         foreach($listid as $id)
        //         {
        //             $brand = Brand::find($id);
        //             $menu = new Menu();
        //             $menu->name = $brand->name;
        //             $menu->link = '/thuong-hieu/'.$brand->slug; 
        //             $menu->parent_id = 0;
        //             $menu->type = $request->type;
        //             $menu->created_at = date('Y-m-d H:i:s');
        //             $menu->created_by = 1;
        //             $menu->status = 2;
        //             $menu->position = $request->position;    
        //             $menu->save();      
        //         }
        //         break;
        //         case "chu-de-bai-viet":
        //             foreach($listid as $id)
        //             {
        //                 $topic = Topic::find($id);
        //                 $menu = new Menu();
        //                 $menu->name = $brand->name;
        //                 $menu->link = '/chu-de-bai-viet/'.$topic->slug; 
        //                 $menu->parent_id = 0;
        //                 $menu->type = $request->type;
        //                 $menu->created_at = date('Y-m-d H:i:s');
        //                 $menu->created_by = 1;
        //                 $menu->status = 2;
        //                 $menu->position = $request->position;    
        //                 $menu->save();      
        //             }
        //             break;
        //         case "trang-don":
        //             foreach($listid as $id)
        //             {
        //                 $page = Post::find($id);
        //                 $menu = new Menu();
        //                 $menu->name = $brand->name;
        //                 $menu->link = '/trang-don/'.$page->slug; 
        //                 $menu->parent_id = 0;
        //                 $menu->type = $request->type;
        //                 $menu->created_at = date('Y-m-d H:i:s');
        //                 $menu->created_by = 1;
        //                 $menu->status = 2;
        //                 $menu->position = $request->position;    
        //                 $menu->save();      
        //             }
        //             break;
        // }
        return response()->json(
            [
                'status' => true, 
                'message' => 'Thành công', 
            ],
            201
        );    
}
    public function update(Request $request, $id)
    {
        $menu = Menu::find($id);
        if($menu == null)
        {
            return response()->json(
                [
                    'status' => false, 
                    'message' => 'Không tìm thấy dữ liệu', 
                    'menu' => null
                ],
                404
            );  
        }
        $menu->name = $request->name; //form
        $menu->link = $request->link; //form
        $menu->parent_id = $request->parent_id; //form
        $menu->type = $request->type; //form
        $menu->updated_at = date('Y-m-d H:i:s');
        $menu->updated_by = 1;
        $menu->status = $request->status; //form
        $menu->position = $request->position; //form
        if($menu->save())//Luuu vao CSDL
        {
            return response()->json(
                [
                    'status' => true, 
                    'message' => 'Cập nhật dữ liệu thành công', 
                    'menu' => $menu
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
                    'menu' => null
                ],
                422
            );
        }
    }
    public function destroy($id)
    {
        $menu = Menu::findOrFail($id);
        if($menu == null)
        {
            return response()->json(
                [
                    'status' => false, 
                    'message' => 'Không tìm thấy dữ liệu', 
                    'menu' => null
                ],
               404 
            );    
        }
        if($menu->delete())
        {
            return response()->json(
                [
                    'status' => true,
                    'message' => 'Xóa thành công',
                    'menu' => $menu
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
                    'menu' => null
                ],
                422
            );    
        }
    }

}
