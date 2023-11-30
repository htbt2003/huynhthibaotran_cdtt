<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\Category;
use Illuminate\Support\Str;


class ProductController extends Controller
{
    public function product_home($limit, $category_id = 0)
    {
        $listid = array();
        array_push($listid, $category_id + 0);
        $args_cat1 = [
            ['parent_id', '=', $category_id + 0],
            ['status', '=', 1]
        ];
        $list_category1 = Category::where($args_cat1)->get();
        if (count($list_category1) > 0) {
            foreach ($list_category1 as $row1) {
                array_push($listid, $row1->id);
                $args_cat2 = [
                    ['parent_id', '=', $row1->id],
                    ['status', '=', 1]
                ];
                $list_category2 = Category::where($args_cat2)->get();
                if (count($list_category2) > 0) {
                    foreach ($list_category2 as $row2) {
                        array_push($listid, $row2->id);
                    }
                }
            }
        }
        $products = Product::where('status', '=', 1)
            ->whereIn('category_id', $listid)
            ->orderBy('created_at', 'DESC')->limit($limit)->get();
        if(count($products)>0){
            return response()->json(
                [
                    'success' => true,
                    'message' => 'Tải dữ liệu thành công',
                    'products' => $products
                ],
                200
            );
        }
        else{
            return response()->json(
                [
                    'success' => false,
                    'message' => 'Không có dữ liệu',
                    'products' => null
                ],
                200
            );
        }
    }

    public function product_all($limit, $page = 1)
    {
        $offset = ($page - 1) * $limit;
        $products = Product::where('status', 1)
            ->orderBy('created_at', 'DESC')
            ->offset($offset)
            ->limit($limit)
            ->get();
        return response()->json(
            [
                'success' => true,
                'message' => 'Tải dữ liệu thành công',
                'products' => $products
            ],
            200
        );
    }
    public function product_category($limit, $category_id)
    {
        $listid = array();
        array_push($listid, $category_id + 0);
        $args_cat1 = [
            ['parent_id', '=', $category_id + 0],
            ['status', '=', 1]
        ];
        $list_category1 = Category::where($args_cat1)->get();
        if (count($list_category1) > 0) {
            foreach ($list_category1 as $row1) {
                array_push($listid, $row1->id);
                $args_cat2 = [
                    ['parent_id', '=', $row1->id],
                    ['status', '=', 1]
                ];
                $list_category2 = Category::where($args_cat2)->get();
                if (count($list_category2) > 0) {
                    foreach ($list_category2 as $row2) {
                        array_push($listid, $row2->id);
                    }
                }
            }
        }
        $products = Product::where('status', 1)
            ->whereIn('category_id', $listid)
            ->orderBy('created_at', 'DESC')
            ->limit($limit)
            ->get();
        return response()->json(
            [
                'success' => true,
                'message' => 'Tải dữ liệu thành công',
                'products' => $products
            ],
            200
        );
    }

    public function product_brand($limit, $brand_id)
    {
        $products = Product::where([['brand_id', '=', $brand_id], ['status', '=', 1]])
            ->orderBy('created_at', 'DESC')
            ->limit($limit)
            ->get();
        return response()->json(
            [
                'success' => true,
                'message' => 'Tải dữ liệu thành công',
                'products' => $products
            ],
            200
        );
    }
    function product_order($id, $limit)
    {
        $args = [
            ['id', '=', $id],
            ['status', '=', 1]
        ];
        $products = Product::where($args)
            ->orderBy('created_at', 'DESC')
            -> limit($limit)
            ->get();
        return response()->json(
            [
                'success' => true,
                'message' => 'Tải dữ liệu thành công',
                'products' => $products
            ],
            200
        );
    }
    public function product_detail($slug)
    {
        $args = [
            ['slug', '=', $slug],
            ['status', '=', 1]
        ];
        $product = Product::where($args)->first();
        if($product == null){
            return response()->json(
                ['success' => false, 
                 'message' => 'Không timg thấy dữ liệu', 
                 'product' =>null
                ],
                400
            );
        }
        $listid = array();
        array_push($listid, $product->category_id);
        $args_cat1 = [
            ['parent_id', '=', $product->category_id],
            ['status', '=', 1]
        ];
        $list_category1 = Category::where($args_cat1)->get();
        if (count($list_category1) > 0) {
            foreach ($list_category1 as $row1) {
                array_push($listid, $row1->id);
                $args_cat2 = [
                    ['parent_id', '=', $row1->id],
                    ['status', '=', 1]
                ];
                $list_category2 = Category::where($args_cat2)->get();
                if (count($list_category2) > 0) {
                    foreach ($list_category2 as $row2) {
                        array_push($listid, $row2->id);
                    }
                }
            }
        }
        $product_other = Product::where([['id', '!=', $product->id],['status', '=', 1]])
        ->whereIn('category_id', $listid)
        ->orderBy("created_at", 'DESC')
        ->limit(8)
        ->get();
            return response()->json(
                ['success' => true, 
                 'message' => 'Tải dữ liệu thành công', 
                 'product' => $product,
                 'product_other'=>$product_other
                ],
                200
            );
        
    }
    public function product_search($key)
    {
        $args = [
            ['name',"Like" , "%$key%"],
            ['status', '=', 1]
        ];
        $products = Product::where($args)
            ->get();
        if(count($products) > 0){
            return response()->json(
                [
                    'success' => true,
                    'message' => 'Tải dữ liệu thành công',
                    'products' => $products
                ],
                200
            );    
        }
        else{
            return response()->json(
                [
                    'success' => false,
                    'message' => 'Không có dữ liệu',
                    'products' => null
                ],
                200
            );    
        }
    }

    public function index()
    {
        $products = Product::orderBy('created_at', 'DESC')->get();
        return response()->json(
            [
                'success' => true, 
                'message' => 'Tải dữ liệu thành công',
                'products' => $products
            ],
            200
        );
    }
    public function show($id)
    {
        $product = Product::find($id);
        return response()->json(
            ['success' => true, 'message' => 'Tải dữ liệu thành công', 'product' => $product],
            200
        );
    }
    public function store(Request $request)
    {
        $product = new Product();
        $product->category_id = $request->category_id; //form
        $product->brand_id = $request->brand_id; //form
        $product->name = $request->name; //form
        $product->slug = Str::of($request->name)->slug('-');
        $product->price = $request->price; //form
        $product->price_sale = $request->price_sale; //form
        //upload image
        $files = $request->image;
        if ($files != null) {
            $extension = $files->getClientOriginalExtension();
            if (in_array($extension, ['jpg', 'png', 'gif', 'webp', 'jpeg'])) {
                $filename = $product->slug . '.' . $extension;
                $product->image = $filename;
                $files->move(public_path('images/product'), $filename);
            }
        }
        //
        $product->qty = $request->qty; //form
        $product->detail = $request->detail; //form
        $product->metakey = $request->metakey; //form
        $product->metadesc = $request->metadesc; //form
        $product->created_at = date('Y-m-d H:i:s');
        $product->created_by = 1;
        $product->status = $request->status; //form
        $product->save(); //Luuu vao CSDL
        return response()->json(
            [
                'success' => true, 
                'message' => 'Thành công', 
                'product' => $product
            ],
            201
        );
    }
    public function update(Request $request, $id)
    {
        $product = Product::find($id);
        $product->category_id = $request->category_id; //form
        $product->brand_id = $request->brand_id; //form
        $product->name = $request->name; //form
        $product->slug = Str::of($request->name)->slug('-');
        $product->price = $request->price; //form
        $product->price_sale = $request->price_sale; //form
        //upload image
        $files = $request->image;
        if ($files != null) {
            $extension = $files->getClientOriginalExtension();
            if (in_array($extension, ['jpg', 'png', 'gif', 'webp', 'jpeg'])) {
                $filename = $product->slug . '.' . $extension;
                $product->image = $filename;
                $files->move(public_path('images/product'), $filename);
            }
        }
        //
        $product->qty = $request->qty; //form
        $product->detail = $request->detail; //form
        $product->metakey = $request->metakey; //form
        $product->metadesc = $request->metadesc; //form
        $product->updated_at = date('Y-m-d H:i:s');
        $product->updated_by = 1;
        $product->status = $request->status; //form
        $product->save(); //Luuu vao CSDL
        return response()->json(
            [
                'success' => true, 
                'message' => 'Thành công', 
                'product' => $product
            ],
            200
        );
    }
    public function destroy($id)
    {
        $product = Product::findOrFail($id);
        $product->delete();
        return response()->json(
            [
                'success' => true,
                'message' => 'Xóa thành công',
                'product' => null
            ],
            200
        );
    }


}
