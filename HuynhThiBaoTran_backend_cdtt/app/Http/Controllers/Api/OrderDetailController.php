<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\OrderDetail;


class OrderDetailController extends Controller
{
    public function index()
    {
        $orderDetails = OrderDetail::orderBy('created_at', 'DESC')->get();
        return response()->json(
            [
                'success' => true, 
                'message' => 'Tải dữ liệu thành công',
                'orders' => $orderDetails
            ],
            200
        );
    }
    public function show($id)
    {
        $orderDetail = OrderDetail::find($id);
        return response()->json(
            ['success' => true, 'message' => 'Tải dữ liệu thành công', 'order' => $orderDetail],
            200
        );
    }
    public function store(Request $request)
    {
        $orderDetail = new OrderDetail();
        $orderDetail->order_id = $request->order_id; //form
        $orderDetail->product_id = $request->product_id; //form
        $orderDetail->price = $request->price; //form
        $orderDetail->qty = $request->qty; //form
        $orderDetail->created_at = date('Y-m-d H:i:s');
        $orderDetail->save(); //Luuu vao CSDL
        return response()->json(
            [
                'success' => true, 
                'message' => 'Thành công', 
                'orderDetail' => $orderDetail
            ],
            201
        );
    }
    public function update(Request $request, $id)
    {
        $orderDetail = OrderDetail::find($id);
        $orderDetail->order_id = $request->order_id; //form
        $orderDetail->product_id = $request->product_id; //form
        $orderDetail->price = $request->price; //form
        $orderDetail->qty = $request->qty; //form
        $orderDetail->updated_at = date('Y-m-d H:i:s');
        $orderDetail->save(); //Luuu vao CSDL
        return response()->json(
            [
                'success' => true, 
                'message' => 'Thành công', 
                'order' => $orderDetail
            ],
            200
        );
    }
    public function destroy($id)
    {
        $orderDetail = OrderDetail::findOrFail($id);
        $orderDetail->delete();
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
