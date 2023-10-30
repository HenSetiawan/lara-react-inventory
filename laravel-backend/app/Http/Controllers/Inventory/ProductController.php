<?php

namespace App\Http\Controllers\Inventory;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ProductController extends Controller
{

    public function index(Request $request)
    {
        $keyword = $request->query('search');
        $perPage = $request->query('perpage');
        if($keyword){
            $result = Product::where('name', 'like', "%" . $keyword . "%")->get();
            return response([
            'success' => true,
            'message' => 'success',
            'data' => $result
        ], 200);
        }
        if($perPage){
            $product = Product::paginate($perPage);
            return response([
            'success' => true,
            'message' => 'success',
            'data' => $product
        ], 200);
        }

        $product = Product::paginate(10);
        return response([
            'success' => true,
            'message' => 'success',
            'data' => $product
        ], 200);
    }

    public function getProductById (string $id) {
        $product = Product::find($id);
        if($product) {
        return response([
            'success' => true,
            'message' => 'success',
            'data' => $product
        ], 200);
        } else {
            return response([
            'success' => false,
            'message' => 'data not found',
            'data' => $product
        ], 404);
        }
    }

    public function store (Request $request)
    {

        //validate data
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'price' => 'required',
            'stock' => 'required',
            'code' => 'required'
        ]);

        if($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => 'failed',
                'data'    => $validator->errors()
            ],401);
        } else {
            $isProductAdded =  Product::create([
                'name' => $request->name,
                'price' => $request->price,
                'code' => $request->code,
                'stock' => $request->stock
            ]);

            if($isProductAdded) {
                return response([
                    'success' => true,
                    'message' => 'success',
                    'data' => ['name' => $request->name,
                    'price' => $request->price,
                    'code' => $request->code,
                    'stock' => $request->stock]
                ], 200);
            }}
    }

    public function delete (string $id) {
        $product = Product::findOrFail($id);
        $product->delete();

        if ($product) {
            return response()->json([
                'success' => true,
                'message' => 'succcess delete data!',
            ], 200);
        } else {
            return response()->json([
                'success' => false,
                'message' => 'failed delete data!',
            ], 400);
        }
    }


    public function update (Request $request,string $id) {
        //validate data
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'price' => 'required',
            'stock' => 'required',
            'code' => 'required'
        ]);

        if($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => 'failed',
                'data'    => $validator->errors()
            ],401);
        } else {
            $productWithId = Product::find($id);
            $isUpdated = $productWithId->update([
                'name' => $request->name,
                'price' => $request->price,
                'code' => $request->code,
                'stock' => $request->stock
            ]);

            if($isUpdated) {
            return response([
                    'success' => true,
                    'message' => 'success',
                    'data' => ['name' => $request->name,
                    'price' => $request->price,
                    'code' => $request->code,
                    'stock' => $request->stock]
                ], 200);
            }
        }

    }
}
