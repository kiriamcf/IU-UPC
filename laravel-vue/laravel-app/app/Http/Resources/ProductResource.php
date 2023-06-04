<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;

class ProductResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'name_es' => $this->name_es,
            'name_en' => $this->name_en,
            'name_ca' => $this->name_ca,
            'description_es' => $this->description_es,
            'description_en' => $this->description_en,
            'description_ca' => $this->description_ca,
            'price' => $this->price,
            'image_path' => Storage::disk('public')->url($this->image_path),
            'breakfast' => $this->breakfast,
            'drink' => $this->drink,
            'vegan' => $this->vegan,
            'vegetarian' => $this->vegetarian,
            'lactose' => $this->lactose,
            'gluten' => $this->gluten,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
