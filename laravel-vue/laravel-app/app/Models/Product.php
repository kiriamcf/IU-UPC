<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Product extends Model
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
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
        'gluten'
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'name_en' => "string",
        'name_es' => "string",
        'name_ca' => "string",
        'description_en' => "string",
        'description_es' => "string",
        'description_ca' => "string",
        'price' => "float",
        'image_path' => "string",
        'breakfast' => "boolean",
        'drink' => "boolean",
        'vegan' => "boolean",
        'vegetarian' => "boolean",
        'lactose' => "boolean",
        'gluten' => "boolean"
    ];

    /**
     * The users that belong to the product.
     */
    public function users(): BelongsToMany
    {
        return $this->belongsToMany(User::class);
    }
}
