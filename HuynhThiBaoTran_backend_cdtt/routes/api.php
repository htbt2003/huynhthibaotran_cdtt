<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\BrandController;
use App\Http\Controllers\Api\CategoryController;
use App\Http\Controllers\Api\ContactController;
use App\Http\Controllers\Api\MenuController;
use App\Http\Controllers\Api\OrderController;
use App\Http\Controllers\Api\PostController;
use App\Http\Controllers\Api\PageController;
use App\Http\Controllers\Api\ProductController;
use App\Http\Controllers\Api\ProductStoreController;
use App\Http\Controllers\Api\ProductSaleController;
use App\Http\Controllers\Api\BannerController;
use App\Http\Controllers\Api\TopicController;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\CustomerController;
use App\Http\Controllers\Api\OrderDetailController;
use App\Http\Controllers\Api\ReviewController;

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

Route::get('brand_home/{limit}', [BrandController::class, 'brand_home']);

Route::get('menu_list/{position}/{parent_id?}', [MenuController::class, 'menu_list']);
Route::get('banner_list/{position}', [BannerController::class, 'banner_list']);
Route::get('category_list/{parent_id?}', [CategoryController::class, 'category_list']);
Route::get('topic_list/{parent_id?}', [TopicController::class, 'topic_list']);

Route::post('updateAccount/{id}', [UserController::class, 'update_account']);
Route::post('register', [UserController::class, 'register']);
Route::post('login', [UserController::class, 'login']);
Route::post('logout', [UserController::class, 'logout']);

Route::get('product_new/{limit}', [ProductController::class, 'product_new']);
Route::get('product_sale/{limit}', [ProductController::class, 'product_sale']);
Route::get('product_bestSeller/{limit}', [ProductController::class, 'product_bestSeller']);
Route::get('product_home/{limit}/{category_id?}', [ProductController::class, 'product_home']);
Route::get('products', [ProductController::class, 'products']);
Route::get('product_allAction', [ProductController::class, 'product_allAction']);
Route::get('product_category/{category_id}', [ProductController::class, 'product_category']);
Route::get('product_brand/{brand_id}', [ProductController::class, 'product_brand']);
Route::get('product_detail/{id}', [ProductController::class, 'product_detail']);
Route::get('product_other/{id}/{limit}', [ProductController::class, 'product_other']);
Route::get('search', [ProductController::class, 'search']);

Route::get('post_list/{limit}/{type}', [PostController::class, 'post_list']);
Route::get('post_all', [PostController::class, 'post_all']);
Route::get('post_topic/{topic_id}', [PostController::class, 'post_topic']);
Route::get('post_detail/{slug}', [PostController::class, 'post_detail']);
Route::get('post_other/{id}/{limit}', [PostController::class, 'post_other']);
Route::get('post_new', [PostController::class, 'post_new']);

Route::get('page_detail/{slug}', [PageController::class, 'page_detail']);

Route::get('order/index', [OrderController::class, 'index']);
Route::get('order/{id}', [OrderController::class, 'order_userId']);
Route::post('doCheckout', [OrderController::class, 'doCheckout']);



Route::get('reviewProduct/{product_id}', [ReviewController::class, 'review_product']);
Route::get('reviewProductUser/{product_id}/{user_id}', [ReviewController::class, 'review_product_user']);
Route::post('review/store', [ReviewController::class, 'store']);
Route::delete('review/destroy/{id}', [ReviewController::class, 'destroy']);






Route::prefix('brand')->group(function () {
    Route::get('index', [BrandController::class, 'index']);
    Route::get('show/{id}', [BrandController::class, 'show']);
    Route::post('store', [BrandController::class, 'store']);
    Route::post('update/{id}', [BrandController::class, 'update']);
    Route::delete('destroy/{id}', [BrandController::class, 'destroy']);
    Route::get('change_status/{key}', [BrandController::class, 'changeStatus']);
    Route::get('delete/{key}', [BrandController::class, 'delete']);
    Route::get('restore/{key}', [BrandController::class, 'restore']);
    Route::get('trash', [BrandController::class, 'trash']);
});
Route::prefix('category')->group(function () {
    Route::get('index', [CategoryController::class, 'index']);
    Route::get('show/{id}', [CategoryController::class, 'show']);
    Route::post('store', [CategoryController::class, 'store']);
    Route::post('update/{id}', [CategoryController::class, 'update']);
    Route::delete('destroy/{id}', [CategoryController::class, 'destroy']);
    Route::get('change_status/{key}', [CategoryController::class, 'changeStatus']);
    Route::get('delete/{key}', [CategoryController::class, 'delete']);
    Route::get('restore/{key}', [CategoryController::class, 'restore']);
    Route::get('trash', [CategoryController::class, 'trash']);

});
Route::prefix('contact')->group(function () {
    Route::get('index', [ContactController::class, 'index']);
    Route::get('show/{id}', [ContactController::class, 'show']);
    Route::post('store', [ContactController::class, 'store']);
    Route::post('update/{id}', [ContactController::class, 'update']);
    Route::delete('destroy/{id}', [ContactController::class, 'destroy']);
    Route::get('change_status/{key}', [ContactController::class, 'changeStatus']);
    Route::get('delete/{key}', [ContactController::class, 'delete']);
    Route::get('restore/{key}', [ContactController::class, 'restore']);
    Route::get('trash', [ContactController::class, 'trash']);
});
Route::prefix('menu')->group(function () {
    Route::get('index', [MenuController::class, 'index']);
    Route::get('show/{id}', [MenuController::class, 'show']);
    Route::post('store', [MenuController::class, 'store']);
    Route::get('tao/{position}/{type}/{listid}', [MenuController::class, 'tao']);
    Route::post('update/{id}', [MenuController::class, 'update']);
    Route::delete('destroy/{id}', [MenuController::class, 'destroy']);
    Route::get('change_status/{key}', [MenuController::class, 'changeStatus']);
    Route::get('search/{key}', [MenuController::class, 'search']);
    Route::get('delete/{key}', [MenuController::class, 'delete']);
    Route::get('restore/{key}', [MenuController::class, 'restore']);
    Route::get('trash', [MenuController::class, 'trash']);
});
Route::prefix('order')->group(function () {
    Route::get('index', [OrderController::class, 'index']);
    Route::get('show/{id}', [OrderController::class, 'show']);
    Route::post('store', [OrderController::class, 'store']);
    Route::post('update/{id}', [OrderController::class, 'update']);
    Route::delete('destroy/{id}', [OrderController::class, 'destroy']);
    Route::get('change_status/{key}', [OrderController::class, 'changeStatus']);
    Route::get('delete/{key}', [OrderController::class, 'delete']);
    Route::get('restore/{key}', [OrderController::class, 'restore']);
    Route::get('trash', [OrderController::class, 'trash']);
});
Route::prefix('post')->group(function () {
    Route::get('index', [PostController::class, 'index']);
    Route::get('show/{id}', [PostController::class, 'show']);
    Route::post('store', [PostController::class, 'store']);
    Route::post('update/{id}', [PostController::class, 'update']);
    Route::delete('destroy/{id}', [PostController::class, 'destroy']);
    Route::get('change_status/{key}', [PostController::class, 'changeStatus']);
    Route::get('delete/{key}', [PostController::class, 'delete']);
    Route::get('restore/{key}', [PostController::class, 'restore']);
    Route::get('trash', [PostController::class, 'trash']);
});
Route::prefix('page')->group(function () {
    Route::get('index', [PageController::class, 'index']);
    Route::get('show/{id}', [PageController::class, 'show']);
    Route::post('store', [PageController::class, 'store']);
    Route::post('update/{id}', [PageController::class, 'update']);
    Route::delete('destroy/{id}', [PageController::class, 'destroy']);
    Route::get('change_status/{key}', [PageController::class, 'changeStatus']);
    Route::get('delete/{key}', [PageController::class, 'delete']);
    Route::get('restore/{key}', [PageController::class, 'restore']);
    Route::get('trash', [PageController::class, 'trash']);
});
Route::prefix('product')->group(function () {
    Route::get('index', [ProductController::class, 'index']);
    Route::get('show/{id}', [ProductController::class, 'show']);
    Route::post('store', [ProductController::class, 'store']);
    Route::post('update/{id}', [ProductController::class, 'update']);
    Route::delete('destroy/{id}', [ProductController::class, 'destroy']);
    Route::get('change_status/{key}', [ProductController::class, 'changeStatus']);
    Route::get('filter/{category_id}/{brand_id}', [ProductController::class, 'filter']);
    Route::get('delete/{key}', [ProductController::class, 'delete']);
    Route::get('restore/{key}', [ProductController::class, 'restore']);
    Route::get('trash', [ProductController::class, 'trash']);
});
Route::prefix('productstore')->group(function () {
    Route::get('index', [ProductStoreController::class, 'index']);
    Route::get('show/{id}', [ProductStoreController::class, 'show']);
    Route::post('store', [ProductStoreController::class, 'store']);
    Route::post('update/{id}', [ProductStoreController::class, 'update']);
    Route::delete('destroy/{id}', [ProductStoreController::class, 'destroy']);
    Route::get('change_status/{key}', [ProductStoreController::class, 'changeStatus']);
});
Route::prefix('productsale')->group(function () {
    Route::get('index', [ProductSaleController::class, 'index']);
    Route::get('show/{id}', [ProductSaleController::class, 'show']);
    Route::post('store', [ProductSaleController::class, 'store']);
    Route::post('update/{id}', [ProductSaleController::class, 'update']);
    Route::delete('destroy/{id}', [ProductSaleController::class, 'destroy']);
    Route::get('change_status/{key}', [ProductSaleController::class, 'changeStatus']);
});

Route::post('config/update', [ConfigController::class, 'update']);
Route::get('config/show', [BannerController::class, 'show']);

Route::prefix('banner')->group(function () {
    Route::get('index', [BannerController::class, 'index']);
    Route::get('show/{id}', [BannerController::class, 'show']);
    Route::post('store', [BannerController::class, 'store']);
    Route::post('update/{id}', [BannerController::class, 'update']);
    Route::delete('destroy/{id}', [BannerController::class, 'destroy']);
    Route::get('change_status/{key}', [BannerController::class, 'changeStatus']);
    Route::get('delete/{key}', [BannerController::class, 'delete']);
    Route::get('restore/{key}', [BannerController::class, 'restore']);
    Route::get('trash', [BannerController::class, 'trash']);
});
Route::prefix('topic')->group(function () {
    Route::get('index', [TopicController::class, 'index']);
    Route::get('show/{id}', [TopicController::class, 'show']);
    Route::post('store', [TopicController::class, 'store']);
    Route::post('update/{id}', [TopicController::class, 'update']);
    Route::delete('destroy/{id}', [TopicController::class, 'destroy']);
    Route::get('change_status/{key}', [TopicController::class, 'changeStatus']);
    Route::get('delete/{key}', [TopicController::class, 'delete']);
    Route::get('restore/{key}', [TopicController::class, 'restore']);
    Route::get('trash', [TopicController::class, 'trash']);
});

Route::prefix('user')->group(function () {
    Route::get('index', [UserController::class, 'index']);
    Route::get('show/{id}', [UserController::class, 'show']);
    Route::post('store', [UserController::class, 'store']);
    Route::post('update/{id}', [UserController::class, 'update']);
    Route::delete('destroy/{id}', [UserController::class, 'destroy']);
    Route::get('change_status/{key}', [UserController::class, 'changeStatus']);
    Route::get('delete/{key}', [UserController::class, 'delete']);
    Route::get('restore/{key}', [UserController::class, 'restore']);
    Route::get('trash', [UserController::class, 'trash']);
});
Route::prefix('customer')->group(function () {
    Route::get('index', [CustomerController::class, 'index']);
    Route::get('show/{id}', [CustomerController::class, 'show']);
    Route::post('store', [CustomerController::class, 'store']);
    Route::post('update/{id}', [CustomerController::class, 'update']);
    Route::delete('destroy/{id}', [CustomerController::class, 'destroy']);
    Route::get('change_status/{key}', [CustomerController::class, 'changeStatus']);
    Route::get('delete/{key}', [CustomerController::class, 'delete']);
    Route::get('restore/{key}', [CustomerController::class, 'restore']);
    Route::get('trash', [CustomerController::class, 'trash']);
});

    // Route::middleware(['auth:sanctum', 'isAPIAdmin'])->group(function() {
    //     Route::get('checkingAuthenticated', function(){
    //         return response()->json(['message'=>'You are in', 'status'=>200], 200);
    //     });
    // });
    
    // Route::middleware(['auth:sanctum'])->group(function() {
    //     Route::post('logout', [UserController::class, 'logout']);
    // });

    // Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    //     return $request->user();
    // });