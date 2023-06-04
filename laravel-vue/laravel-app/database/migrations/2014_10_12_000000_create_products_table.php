<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('description_ca');
            $table->string('description_es');
            $table->string('description_en');
            $table->string('name_ca');
            $table->string('name_es');
            $table->string('name_en');
            $table->decimal('price', 3, 2);
            $table->string('image_path');
            $table->boolean('breakfast');
            $table->boolean('drink');
            $table->boolean('vegan');
            $table->boolean('vegetarian');
            $table->boolean('lactose');
            $table->boolean('gluten');
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
