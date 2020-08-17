<?php

namespace App\Http\Controllers;

use App\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function all_category(){
        $categories = Category::orderBy('created_at', 'desc')->get();

        return response()->json([
            'categories' => $categories
        ], 200);
    }

    public function add_category(Request $request){
        $this->validate($request,
            [
                'cat_name'  =>  'required'
            ]);

        $category = new Category();
        $category->cat_name = $request->cat_name;
        $category->save();

        return ['message' => 'OK'];
    }

    public function delete_category($id){
        $category = Category::find($id);
        $category->delete();
    }

    public function edit_category($id){
        $category = Category::find($id);

        return response()->json([
            'category' => $category
        ]);
    }

    public function update_category(Request $request, $id){
        $category = Category::find($id);

        $this->validate($request,
            [
                'cat_name'  =>  'required'
            ]);
        $category->cat_name = $request->cat_name;
        $category->save();

        return response()->json([
            'category' => $category
        ]);
    }

    public function selected_category($ids){
        $all_id = explode(',', $ids);

        foreach($all_id as $id){
            $category = Category::find($id);
            $category->delete();
        }
    }
}
