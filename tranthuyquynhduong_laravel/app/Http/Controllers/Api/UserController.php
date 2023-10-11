<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class UserController extends Controller
{
    public function index()
    {

        $users = User::orderBy("created_at", "DESC")->get();

        return response()->json(

            ['success' => true, 'message' => "tai du lieu thanh cong", 'users_data' => $users],

            200

        );
    }

    public function show($id)
    {

        $User = User::find($id);

        return response()->json(

            ['success' => true, 'message' => 'tai du lieu thanh cong', 'user_data' => $User],

            200

        );
    }
    //Post- them store
    public function store(Request $request)
    {
        $User = new User();
        $files = $request->image;
        if ($files != null) {
            $extension = $files->getClientOriginalExtension();
            if (in_array($extension, ['jpg', 'png', 'gif', 'webp', 'jpeg'])) {
                $filename = $User->slug . '.' . $extension;
                $User->image = $filename;
                $files->move(public_path('images/user'), $filename);
            }
        }
        $User->name = $request->name;
        $User->email = $request->email;
        $User->phone = $request->phone;
        $User->username = $request->username;
        $User->password = $request->password;
        $User->address = $request->address;
        $User->roles = $request->roles;
        $User->created_at = date('Y-m-d H:i:s');
        $User->created_by = 1;
        $User->status = $request->status; //form
        $User->save(); //lưu vào Csdl
        return response()->json(
            ['success' => true, 'message' => 'Thanh cong', 'user_data' => $User],
            201
        );
    }
    //User-update
    public function update(Request $request, $id)
    {

        $User = User::find($id);
        $files = $request->image;
        if ($files != null) {
            $extension = $files->getClientOriginalExtension();
            if (in_array($extension, ['jpg', 'png', 'gif', 'webp', 'jpeg'])) {
                $filename = $User->slug . '.' . $extension;
                $User->image = $filename;
                $files->move(public_path('images/user'), $filename);
            }
        }
        $User->name = $request->name;
        $User->email = $request->email;
        $User->phone = $request->phone;
        $User->username = $request->username;
        $User->password = $request->password;
        $User->address = $request->address;
        $User->roles = $request->roles;
        $User->created_at = date('Y-m-d H:i:s');
        $User->created_by = 1;
        $User->status = $request->status; //form
        $User->save(); //lưu vào Csdl

        return response()->json(

            ['success' => true, 'message' => 'Thanh cong', 'user_data' => $User],

            200

        );
    }
    //xoa
    public function destroy($id)
    {
        $User = User::find($id);
        if ($User == null) {
            return response()->json(
                ['message' => 'Tai du lieu khong thanh cong', 'success' => false, 'user_data' => null],
                404
            );
        }
        $User->delete();
        return response()->json(['message' => 'Thanh cong', 'success' => true, 'user_data' => $User], 200);

    }

}