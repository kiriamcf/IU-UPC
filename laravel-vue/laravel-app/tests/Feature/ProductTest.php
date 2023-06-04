<?php

namespace Tests\Feature;

use App\Models\Product;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Laravel\Sanctum\Sanctum;
use Tests\TestCase;

class ProductTest extends TestCase
{
    use RefreshDatabase;

    public function testItCanListProducts(): void
    {
        Product::factory()
            ->count(5)
            ->create();

        $this
            ->getJson(route('api.products.index'))
            ->assertOk()
            ->assertJsonCount(5, 'data')
            ->assertJsonStructure([
                'data' => [
                    '*' => [
                        'id',
                        'name_es',
                        'name_en',
                        'name_ca',
                        'description_es',
                        'description_en',
                        'description_ca',
                        'price',
                        'image_path',
                        'breakfast',
                        'drink',
                        'vegan',
                        'vegetarian',
                        'lactose',
                        'gluten',
                    ]
                ]
            ]);
    }

    public function testItCanListProductsAsUser(): void
    {
        Product::factory()
            ->count(5)
            ->create();

        Sanctum::actingAs(
            User::factory()->create()
        );

        $this
            ->getJson(route('api.products.index'))
            ->assertOk()
            ->assertJsonCount(5, 'data')
            ->assertJsonStructure([
                'data' => [
                    '*' => [
                        'id',
                        'name_es',
                        'name_en',
                        'name_ca',
                        'description_es',
                        'description_en',
                        'description_ca',
                        'price',
                        'image_path',
                        'breakfast',
                        'drink',
                        'vegan',
                        'vegetarian',
                        'lactose',
                        'gluten',
                    ]
                ]
            ]);
    }

    public function testItCanShowProduct(): void
    {
        $product = Product::factory()->create();

        $this
            ->getJson(route('api.products.show', $product))
            ->assertOk()
            ->assertJsonStructure([
                'data' => [
                    'id',
                    'name_es',
                    'name_en',
                    'name_ca',
                    'description_es',
                    'description_en',
                    'description_ca',
                    'price',
                    'image_path',
                    'breakfast',
                    'drink',
                    'vegan',
                    'vegetarian',
                    'lactose',
                    'gluten',
                ],
            ])
            ->assertJsonPath('data.id', $product->id)
            ->assertJsonPath('data.name_en', $product->name_en)
            ->assertJsonPath('data.name_es', $product->name_es)
            ->assertJsonPath('data.name_ca', $product->name_ca)
            ->assertJsonPath('data.desciption_en', $product->desciption_en)
            ->assertJsonPath('data.desciption_es', $product->desciption_es)
            ->assertJsonPath('data.desciption_ca', $product->desciption_ca)
            ->assertJsonPath('data.price', $product->price)
            ->assertJsonPath('data.image_path', Storage::disk('public')->url($product->image_path))
            ->assertJsonPath('data.breakfast', $product->breakfast)
            ->assertJsonPath('data.drink', $product->drink)
            ->assertJsonPath('data.vegan', $product->vegan)
            ->assertJsonPath('data.vegetarian', $product->vegetarian)
            ->assertJsonPath('data.lactose', $product->lactose)
            ->assertJsonPath('data.gluten', $product->gluten)
            ->assertJsonPath('data.created_at', $product->created_at->toJson())
            ->assertJsonPath('data.updated_at', $product->updated_at->toJson());
    }

    public function testItCanShowProductAsUser(): void
    {
        $product = Product::factory()->create();

        Sanctum::actingAs(
            User::factory()->create()
        );

        $this
            ->getJson(route('api.products.show', $product))
            ->assertOk()
            ->assertJsonStructure([
                'data' => [
                    'id',
                    'name_es',
                    'name_en',
                    'name_ca',
                    'description_es',
                    'description_en',
                    'description_ca',
                    'price',
                    'image_path',
                    'breakfast',
                    'drink',
                    'vegan',
                    'vegetarian',
                    'lactose',
                    'gluten',
                ],
            ])
            ->assertJsonPath('data.id', $product->id)
            ->assertJsonPath('data.name_en', $product->name_en)
            ->assertJsonPath('data.name_es', $product->name_es)
            ->assertJsonPath('data.name_ca', $product->name_ca)
            ->assertJsonPath('data.desciption_en', $product->desciption_en)
            ->assertJsonPath('data.desciption_es', $product->desciption_es)
            ->assertJsonPath('data.desciption_ca', $product->desciption_ca)
            ->assertJsonPath('data.price', $product->price)
            ->assertJsonPath('data.image_path', Storage::disk('public')->url($product->image_path))
            ->assertJsonPath('data.breakfast', $product->breakfast)
            ->assertJsonPath('data.drink', $product->drink)
            ->assertJsonPath('data.vegan', $product->vegan)
            ->assertJsonPath('data.vegetarian', $product->vegetarian)
            ->assertJsonPath('data.lactose', $product->lactose)
            ->assertJsonPath('data.gluten', $product->gluten)
            ->assertJsonPath('data.created_at', $product->created_at->toJson())
            ->assertJsonPath('data.updated_at', $product->updated_at->toJson());
    }

    public function testItCanAddProductToCart(): void
    {
        Sanctum::actingAs(
            User::factory()->create()
        );

        $product = Product::factory()->create();

        $this
            ->postJson(route('api.addProduct', $product))
            ->assertCreated();
    }

    public function testItFailsToAddProductToCartWhenUnathenticated(): void
    {
        // Sanctum::actingAs(
        //     User::factory()->create()
        // );

        $product = Product::factory()->create();

        $this
            ->postJson(route('api.addProduct', $product))
            ->assertUnauthorized();

        $this->assertDatabaseCount(DB::table('product_user'), 0);
    }

    public function testItCanRemoveProductOfCart(): void
    {
        Sanctum::actingAs(
            User::factory()->create()
        );

        $product = Product::factory()->create();

        $this
            ->postJson(route('api.addProduct', $product))
            ->assertCreated();

        $this
            ->deleteJson(route('api.removeProduct', $product))
            ->assertOk();
    }

    public function testItFailsToRemoveProductOfCartWhenUnathenticated(): void
    {
        // Sanctum::actingAs(
        //     User::factory()->create()
        // );

        $product = Product::factory()->create();

        $this
            ->postJson(route('api.addProduct', $product))
            ->assertUnauthorized();

        $this
            ->deleteJson(route('api.removeProduct', $product))
            ->assertUnauthorized();

        $this->assertDatabaseCount(DB::table('product_user'), 0);
    }
}
