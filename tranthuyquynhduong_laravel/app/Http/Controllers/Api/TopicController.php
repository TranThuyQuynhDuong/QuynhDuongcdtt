<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Topic;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class TopicController extends Controller
{
    public function index()
    {

        $topics = Topic::orderBy("created_at", "DESC")->get();

        return response()->json(

            ['success' => true, 'message' => "tai du lieu thanh cong", 'topics_data' => $topics],

            200

        );
    }
    public function show($id)
    {

        $Topic = Topic::find($id);

        return response()->json(

            ['success' => true, 'message' => 'tai du lieu thanh cong', 'topic_data' => $Topic],

            200

        );
    }
    //Post- them store
    public function store(Request $request)
    {
        $Topic = new Topic();
        $Topic->name = $request->name; //form
        $Topic->slug = Str::of($request->name)->slug('-');
        $files = $request->image;
        if ($files != null) {
            $extension = $files->getClientOriginalExtension();
            if (in_array($extension, ['jpg', 'png', 'gif', 'webp', 'jpeg'])) {
                $filename = $Topic->slug . '.' . $extension;
                $Topic->image = $filename;
                $files->move(public_path('images/topic'), $filename);
            }
        }
        $Topic->metakey = $request->metakey; //form
        $Topic->metadesc = $request->metadesc; //form
        $Topic->parent_id = $request->parent_id;
        $Topic->created_at = date('Y-m-d H:i:s');
        $Topic->created_by = 1;
        $Topic->status = $request->status; //form
        $Topic->save(); //lưu vào Csdl
        return response()->json(
            ['success' => true, 'message' => 'Thanh cong', 'topic_data' => $Topic],
            201
        );
    }
    //Topic-update
    public function update(Request $request, $id)
    {

        $Topic = Topic::find($id);

        $Topic->name = $request->name; //form
        $Topic->slug = Str::of($request->name)->slug('-');
        $files = $request->image;
        if ($files != null) {
            $extension = $files->getClientOriginalExtension();
            if (in_array($extension, ['jpg', 'png', 'gif', 'webp', 'jpeg'])) {
                $filename = $Topic->slug . '.' . $extension;
                $Topic->image = $filename;
                $files->move(public_path('images/topic'), $filename);
            }
        }
        $Topic->metakey = $request->metakey; //form
        $Topic->metadesc = $request->metadesc; //form
        $Topic->parent_id = $request->parent_id;
        $Topic->created_at = date('Y-m-d H:i:s');
        $Topic->created_by = 1;
        $Topic->status = $request->status; //form
        $Topic->save(); //lưu vào Csdl

        return response()->json(

            ['success' => true, 'message' => 'Thanh cong', 'topic_data' => $Topic],

            200

        );
    }
    //xoa
    public function destroy($id)
    {
        $Topic = Topic::find($id);
        if ($Topic == null) {
            return response()->json(
                ['message' => 'Tai du lieu khong thanh cong', 'success' => false, 'topic_data' => null],
                404
            );
        }
        $Topic->delete();
        return response()->json(['message' => 'Thanh cong', 'success' => true, 'topic_data' => $Topic], 200);

    }

}