<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\UserController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::name('api.')->group(function () {
    Route::group(['middleware' => ['web']], function () {
        // your routes here
        Route::apiResource('products', ProductController::class);
        // Route::apiResource('users', UserController::class);
        Route::get('/user', [UserController::class, 'show'])->name('showUser');
        Route::get('/register', [UserController::class, 'register'])->name('register');
        Route::post('/login', [UserController::class, 'login'])->name('login');
        Route::get('/logout', [UserController::class, 'logout'])->name('logout');
        Route::post('/addProduct/{product}', [ProductController::class, 'add_product_cart'])->name('addProduct');
        Route::delete('/removeProduct/{product}', [ProductController::class, 'remove_product_cart'])->name('removeProduct');
        Route::get('/userCart', [ProductController::class, 'get_cart_user'])->name('userCart');
    });
});
// Route::get('/test', [ProductController::class, 'index']);

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });
