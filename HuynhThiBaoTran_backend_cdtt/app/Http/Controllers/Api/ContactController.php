<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Contact;

class ContactController extends Controller
{
    public function index()
    {
        $contacts = Contact::where('status', '!=', 0)
            ->orderBy('created_at', 'DESC')
            ->select('id', 'name', 'phone', 'email', 'title')
            ->get();
        $total = Contact::count();
        return response()->json(
            [
                'status' => true, 
                'message' => 'Tải dữ liệu thành công',
                'contacts' => $contacts,
                'total' => $total
            ],
            200
        );
    }
    public function show($id)
    {
        $contact = Contact::find($id);
        return response()->json(
            ['status' => true, 'message' => 'Tải dữ liệu thành công', 'contact' => $contact],
            200
        );
    }
    public function store(Request $request)
    {
        $contact = new Contact();
        $contact->user_id = 1; //form
        $contact->name = $request->name; //form
        $contact->email = $request->email; //form
        $contact->phone = $request->phone; //form
        $contact->title = $request->title; //form
        $contact->content = $request->content; //form
        $contact->replay_id = $request->replay_id; //form
        $contact->created_at = date('Y-m-d H:i:s');
        $contact->status = $request->status; //form
        if($contact->save())//Luuu vao CSDL
        {
            return response()->json(
                [
                    'status' => true, 
                    'message' => 'Thành công', 
                    'contact' => $contact
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
                    'contact' => null
                ],
                422
            );
        }
    }
    public function update(Request $request, $id)
    {
        $contact = Contact::find($id);
        if($contact == null)
        {
            return response()->json(
                [
                    'status' => false, 
                    'message' => 'Không tìm thấy dữ liệu', 
                    'contact' => null
                ],
                404
            );    
        }
        $contact->user_id = $request->user_id; //form
        $contact->name = $request->name; //form
        $contact->email = $request->email; //form
        $contact->phone = $request->phone; //form
        $contact->title = $request->title; //form
        $contact->content = $request->content; //form
        $contact->replay_id = $request->replay_id; //form
        $contact->updated_at = date('Y-m-d H:i:s');
        $contact->updated_by = 1;
        $contact->status = $request->status; //form
        if($contact->save())//Luuu vao CSDL
        {
            return response()->json(
                [
                    'status' => true, 
                    'message' => 'Cập nhật dữ liệu thành công', 
                    'contact' => $contact
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
                    'contact' => null
                ],
                422
            );
        }
    }
    public function destroy($id)
    {
        $contact = contact::findOrFail($id);
        if($contact == null)
        {
            return response()->json(
                [
                    'status' => false, 
                    'message' => 'Không tìm thấy dữ liệu', 
                    'contact' => null
                ],
               404 
            );    
        }
        if($contact->delete())
        {
            return response()->json(
                [
                    'status' => true,
                    'message' => 'Xóa thành công',
                    'contact' => $contact
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
                    'contact' => null
                ],
                422
            );    
        }
    }

}
