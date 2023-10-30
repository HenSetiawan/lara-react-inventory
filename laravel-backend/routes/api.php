<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Inventory\ProductController;
use App\Http\Controllers\LoginContoller;
use App\Http\Controllers\User\UserController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/v1/user', function (Request $request) {
    return $request->user();
});

Route::middleware('auth:sanctum')->get('/v1/products', [ProductController::class, 'index']);
Route::middleware('auth:sanctum')->get('/v1/product/{id}', [ProductController::class, 'getProductById']);
Route::middleware('auth:sanctum')->post('/v1/product', [ProductController::class, 'store']);
Route::middleware('auth:sanctum')->delete('/v1/product/{id}', [ProductController::class, 'delete']);
Route::middleware('auth:sanctum')->put('/v1/product/{id}', [ProductController::class, 'update']);

Route::middleware('auth:sanctum')->get('/v1/users', [UserController::class, 'index']);
Route::middleware('auth:sanctum')->delete('/v1/user/{id}', [UserController::class, 'delete']);
Route::middleware('auth:sanctum')->post('/v1/user', [UserController::class, 'store']);
Route::middleware('auth:sanctum')->put('/v1/user/{id}', [UserController::class, 'update']);
Route::middleware('auth:sanctum')->get('/v1/user/{id}', [UserController::class, 'getUserById']);

Route::post('/v1/login', [LoginContoller::class, 'index']);
