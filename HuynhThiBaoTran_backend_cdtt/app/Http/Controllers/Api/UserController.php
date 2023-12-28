<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use App\Models\User;

class UserController extends Controller
{
    public function index()
    {
        $users = User::where([['status', '!=', 0], ['roles', '=', 'user']])
        ->orderBy('created_at', 'DESC')
        ->select('id', 'name', 'phone', 'email', 'image')
        ->get();
        return response()->json(
            [
                'status' => true, 
                'message' => 'Tải dữ liệu thành công',
                'users' => $users
            ],
            200
        );
    }
    public function show($id)
    {
        $user = User::find($id);
        return response()->json(
            ['status' => true, 
             'message' => 'Tải dữ liệu thành công', 
             'user' => $user],
            200
        );
    }
    public function store(Request $request)
    {
        $user = new User();
        $user->name = $request->name; //form
        $user->gender = $request->gender; //form
        $user->email = $request->email; //form
        $user->phone = $request->phone; //form
        $user->username = $request->username; //form
        $user->password = $request->password; //form
        $user->address = $request->address; //form
        $slug = Str::of($request->name)->slug('-');
        //upload image
        $files = $request->image;
        if ($files != null) {
            $extension = $files->getClientOriginalExtension();
            if (in_array($extension, ['jpg', 'png', 'gif', 'webp', 'jpeg'])) {
                $filename = date('YmdHis') . '.' . $extension;
                $user->image = $filename;
                $files->move(public_path('images/user'), $filename);
            }
        }
        //
        $user->roles = $request->roles; //form
        $user->created_at = date('Y-m-d H:i:s');
        $user->created_by = 1;
        $user->status = $request->status; //form
        if($user->save())//Luuu vao CSDL
        {
            return response()->json(
                [
                    'status' => true, 
                    'message' => 'Thành công', 
                    'user' => $user
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
                    'user' => null
                ],
                422
            );
        }
    }
    public function update(Request $request, $id)
    {
        $user = User::find($id);
        if($user == null)
        {
            return response()->json(
                [
                    'status' => false, 
                    'message' => 'Không tìm thấy dữ liệu', 
                    'user' => null
                ],
                404
            );    
        }
        $user->name = $request->name; //form
        $user->gender = $request->gender; //form
        $user->email = $request->email; //form
        $user->phone = $request->phone; //form
        $user->username = $request->username; //form
        $user->password = $request->password; //form
        $user->address = $request->address; //form
        $slug = Str::of($request->name)->slug('-');
        //upload image
        $files = $request->image;
        if ($files != null) {
            $extension = $files->getClientOriginalExtension();
            if (in_array($extension, ['jpg', 'png', 'gif', 'webp', 'jpeg'])) {
                $filename = date('YmdHis') . '.' . $extension;
                $user->image = $filename;
                $files->move(public_path('images/user'), $filename);
            }
        }
        //
        $user->roles = $request->roles; //form
        $user->updated_at = date('Y-m-d H:i:s');
        $user->updated_by = 1;
        $user->status = $request->status; //form
        if($user->save())//Luuu vao CSDL
        {
            return response()->json(
                [
                    'status' => true, 
                    'message' => 'Cập nhật dữ liệu thành công', 
                    'user' => $user
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
                    'user' => null
                ],
                422
            );
        }
    }
    public function destroy($id)
    {
        $user = User::findOrFail($id);
        if($user == null)
        {
            return response()->json(
                [
                    'status' => false, 
                    'message' => 'Không tìm thấy dữ liệu', 
                    'user' => null
                ],
               404 
            );    
        }
        if($user->delete())
        {
            return response()->json(
                [
                    'status' => true,
                    'message' => 'Xóa thành công',
                    'user' => $user
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
                    'user' => null
                ],
                422
            );    
        }
    }
    public function login($email, $password){
        $user = User::where([['email', '=', $email], ['password', '=', $password]])->first();
        if($user != null){
            return response()->json(['message' => 'Đăng nhập thành công', 'status' => true, 'user' => $user]);
        }else{
            return response()->json(['message' => 'Sai email hoặc mật khẩu', 'status' => false, 'user' => null]);
        }
    }

}
