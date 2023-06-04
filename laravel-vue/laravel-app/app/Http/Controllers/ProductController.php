<?php

namespace App\Http\Controllers;

use App\Http\Resources\CartResource;
use App\Models\Product;
use Illuminate\Http\Request;
use App\Http\Resources\ProductResource;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class ProductController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:sanctum')->only(['add_product_cart', 'remove_product_cart']);
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return ProductResource::collection(
            Product::all(),
        );
    }


    /**
     * Display the specified resource.
     */
    public function show(Product $product)
    {
        return new ProductResource(
            $product
        );
    }

    /**
     * Add product to cart.
     */
    public function add_product_cart(Product $product)
    {
        $user = Auth::user();

        // If product is not in user cart
        if ($user->products()->wherePivot('product_id', $product->id)->first() == null) {
            $user->products()->attach($product, ['product_quantity' => 1]);
            return response()->noContent(201);
        }

        // If product exists
        $existingProduct = $user->products()->wherePivot('product_id', $product->id)->first();
        $user->products()->updateExistingPivot($product, [
            'product_quantity' => $existingProduct->pivot->product_quantity + 1,
        ]);
        return response()->noContent(200);
    }

    /**
     * Add product to cart.
     */
    public function remove_product_cart(Product $product)
    {
        $user = Auth::user();

        // If product has one quantity
        if ($user->products()->wherePivot('product_id', $product->id)->first()->pivot->product_quantity == 1) {
            $user->products()->detach($product);
            return response()->noContent(200);
        }

        // If product has many quantities
        $existingProduct = $user->products()->wherePivot('product_id', $product->id)->first();
        $user->products()->updateExistingPivot($product, [
            'product_quantity' => $existingProduct->pivot->product_quantity - 1,
        ]);
        return response()->noContent(200);
    }
}
