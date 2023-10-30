<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function index()
    {
        $user = User::all();
        return response([
            'success' => true,
            'message' => 'success',
            'data' => $user
        ], 200);
    }

    public function getUserById (string $id) {
        $user = User::find($id);
        if($user) {
        return response([
            'success' => true,
            'message' => 'success',
            'data' => $user
        ], 200);
        } else {
            return response([
            'success' => false,
            'message' => 'data not found',
            'data' => $user
        ], 404);
        }
    }

    public function delete (string $id) {
        $user = User::findOrFail($id);
        $user->delete();

        if ($user) {
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

    public function store (Request $request)
        {
        //validate data
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'email' => 'required',
            'password' => 'required',
        ]);

        if($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => 'failed',
                'data'    => $validator->errors()
            ],401);
        } else {
            $isUserAdded =  User::create([
                'name' => $request->name,
                'email' => $request->email,
                'password' => Hash::make($request->password),
            ]);

            if($isUserAdded) {
                return response([
                    'success' => true,
                    'message' => 'success',
                    'data' => ['name' => $request->name,
                    'name' => $request->name,
                    'email' => $request->email]
                ], 200);
            }}
        }

    public function update (Request $request, $id)
        {
        //validate data
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'email' => 'required',
        ]);

        if($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => 'failed',
                'data'    => $validator->errors()
            ],401);
        } else {
            $userWithId = User::find($id);
           $isUpdated = $userWithId->update([
                'name' => $request->name,
                'email' => $request->email,
                'password' => Hash::make($request->password),
            ]);
            if($isUpdated) {
                return response([
                    'success' => true,
                    'message' => 'success',
                    'data' => ['name' => $request->name,
                    'name' => $request->name,
                    'email' => $request->email]
                ], 200);
            }}
         }
}
