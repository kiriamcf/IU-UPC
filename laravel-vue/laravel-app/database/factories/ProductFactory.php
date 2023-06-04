<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\User>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name_es' => fake()->name(),
            'name_en' => fake()->name(),
            'name_ca' => fake()->name(),
            'description_es' => fake()->text(),
            'description_en' => fake()->text(),
            'description_ca' => fake()->text(),
            'price' => fake()->numberBetween(0, 10),
            'image_path' => fake()->text(),
            'breakfast' => fake()->boolean(),
            'drink' => fake()->boolean(),
            'vegan' => fake()->boolean(),
            'vegetarian' => fake()->boolean(),
            'lactose' => fake()->boolean(),
            'gluten' => fake()->boolean(),
            'remember_token' => Str::random(10),
        ];
    }
}
