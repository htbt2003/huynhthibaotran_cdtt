<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Order;
use App\Models\OrderDetail;
use App\Models\Product;


class OrderController extends Controller
{
    public function doCheckout(Request $request)
    {  
       foreach($request  as  $row){
            $orderDetail=new OrderDetail;
            $orderDetail->order_id=100;
            $orderDetail->product_id=$row->id;
            $orderDetail->price=$row->price;
            $orderDetail->qty=$row->quantity;
            $orderDetail->save();
       }
    }

    public function order_userId($user_id)
    {
        $args = [
            ['user_id', '=', $user_id],
            // ['status', '=', 1]
        ];
        $order = Order::where($args)->orderBy('created_at', 'DESC')->first();
        return response()->json(
            [
                'success' => true,
                'message' => 'Tải dữ liệu thành công',
                'order' => $order
            ],
            200
        );
    }
    public function index()
    {
        $orders = Order::orderBy('created_at', 'DESC')->get();
        return response()->json(
            [
                'success' => true, 
                'message' => 'Tải dữ liệu thành công',
                'orders' => $orders
            ],
            200
        );
    }
    public function show($id)
    {
        $products = array();
        $orderDetail=OrderDetail::where('order_id', $id)->get();
        foreach($orderDetail as $row)
        {
            $product = Product::find($row->product_id);
            if($product != null)
                $product["quantity"] = $row->qty;
                array_push($products, $product);
        }
        $order = Order::find($id);
        return response()->json(
            ['success' => true, 
             'message' => 'Tải dữ liệu thành công', 
             'order' => $order,
             'products' => $products
            ],
            200
        );
    }
    public function store(Request $request)
    {
        $order = new Order();
        $order->user_id = $request->user_id; //form
        $order->name = $request->name; //form
        $order->phone = $request->phone; //form
        $order->email = $request->email; //form
        $order->address = $request->address; //form
        $order->note = $request->note; //form
        $order->created_at = date('Y-m-d H:i:s');
        $order->created_by = 1;
        $order->status = $request->status; //form
        $order->save(); //Luuu vao CSDL
        return response()->json(
            [
                'success' => true, 
                'message' => 'Thành công', 
                'order' => $order
            ],
            201
        );
    }
    public function update(Request $request, $id)
    {
        $order = Order::find($id);
        $order->user_id = $request->user_id; //form
        $order->name = $request->name; //form
        $order->phone = $request->phone; //form
        $order->email = $request->email; //form
        $order->address = $request->address; //form
        $order->note = $request->note; //form
        $order->updated_at = date('Y-m-d H:i:s');
        $order->updated_by = 1;
        $order->status = $request->status; //form
        $order->save(); //Luuu vao CSDL
        return response()->json(
            [
                'success' => true, 
                'message' => 'Thành công', 
                'order' => $order
            ],
            200
        );
    }
    public function destroy($id)
    {
        $order = Order::findOrFail($id);
        $order->delete();
        return response()->json(
            [
                'success' => true,
                'message' => 'Xóa thành công',
                'order' => null
            ],
            200
        );
    }

}
