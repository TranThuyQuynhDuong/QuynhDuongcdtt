<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class PostController extends Controller
{
    public function index()
    {

        $posts = Post::orderBy("created_at", "DESC")->get();

        return response()->json(

            ['success' => true, 'message' => "tai du lieu thanh cong", 'posts_data' => $posts],

            200

        );
    }

    public function show($id)
    {

        $Post = Post::find($id);

        return response()->json(

            ['success' => true, 'message' => 'tai du lieu thanh cong', 'post_data' => $Post],

            200

        );
    }
    //Post- them store
    public function store(Request $request)
    {
        $Post = new Post();
        $Post->topic_id = $request->topic_id; //form
        $Post->title = $request->title; //form
        $Post->slug = Str::of($request->title)->slug('-');
        $files = $request->image;
        if ($files != null) {
            $extension = $files->getClientOriginalExtension();
            if (in_array($extension, ['jpg', 'png', 'gif', 'webp', 'jpeg'])) {
                $filename = $Post->slug . '.' . $extension;
                $Post->image = $filename;
                $files->move(public_path('images/post'), $filename);
            }
        }
        $Post->detail = $request->detail; //form
        $Post->type = $request->type; //form
        $Post->metakey = $request->metakey; //form
        $Post->metadesc = $request->metadesc; //form
        $Post->created_at = date('Y-m-d H:i:s');
        $Post->created_by = 1;
        $Post->status = $request->status; //form
        $Post->save(); //lưu vào Csdl
        return response()->json(
            ['success' => true, 'message' => 'Thanh cong', 'post_data' => $Post],
            201
        );
    }
    //Post-update
    public function update(Request $request, $id)
    {

        $Post = Post::find($id);
        $Post->topic_id = $request->topic_id; //form
        $Post->title = $request->title; //form
        $Post->slug = Str::of($request->title)->slug('-');
        $files = $request->image;
        if ($files != null) {
            $extension = $files->getClientOriginalExtension();
            if (in_array($extension, ['jpg', 'png', 'gif', 'webp', 'jpeg'])) {
                $filename = $Post->slug . '.' . $extension;
                $Post->image = $filename;
                $files->move(public_path('images/post'), $filename);
            }
        }
        $Post->detail = $request->detail; //form
        $Post->type = $request->type; //form
        $Post->metakey = $request->metakey; //form
        $Post->metadesc = $request->metadesc; //form

        $Post->created_at = date('Y-m-d H:i:s');
        $Post->created_by = 1;
        $Post->status = $request->status; //form
        $Post->save(); //lưu vào Csdl

        return response()->json(

            ['success' => true, 'message' => 'Thanh cong', 'post_data' => $Post],

            200

        );
    }
    //xoa
    public function destroy($id)
    {
        $Post = Post::find($id);
        if ($Post == null) {
            return response()->json(
                ['message' => 'Tai du lieu khong thanh cong', 'success' => false, 'post_data' => null],
                404
            );
        }
        $Post->delete();
        return response()->json(['message' => 'Thanh cong', 'success' => true, 'post_data' => $Post], 200);

    }

    function post_list($type, $limit)
    {
        $args = [
            ['type', '=', $type],
            ['status', '=', 1]
        ];
        $posts = Post::where($args)
            ->orderBy('created_at', 'DESC')
            -> limit($limit)
                ->get();
        return response()->json(
            [
                'success' => true,
                'message' => 'Tải dữ liệu thành công',
                'posts' => $posts
            ],
            200
        );
    }

}