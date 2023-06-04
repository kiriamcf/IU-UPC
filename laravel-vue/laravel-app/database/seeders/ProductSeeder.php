<?php

namespace Database\Seeders;

use App\Models\Product;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Product::create([
            'name_ca' => 'Coca Cola', 
            'name_es' => 'Coca Cola', 
            'name_en' => 'Coca Cola',
            'description_ca' => "La Coca Cola és una popular beguda de cola produïda per The Coca-Cola Company.",
            'description_es' => "Coca Cola es un popular refresco de cola producido por The Coca-Cola Company.",
            'description_en' => "Coca Cola is a popular glue cola produced by The Coca-Cola Company.",
            'price' => 1.75,
            'image_path' => "cocacola.jpg",
            'breakfast' => false,
            'drink' => true,
            'vegan' => true,
            'vegetarian' => true,
            'lactose' => false,
            'gluten' => false,
        ]);

        Product::create([
            'name_ca' => 'Fanta', 
            'name_es' => 'Fanta', 
            'name_en' => 'Fanta',
            'description_ca' => "Fanta és una marca comercial, de The Coca-Cola Company, d'unes begudes que, en general, incorporen sucs de fruita.",
            'description_es' => "Fanta es una marca comercial, de The Coca-Cola Company, de bebidas que generalmente incorporan zumos de frutas.",
            'description_en' => "Fanta is a trademark, of The Coca-Cola Company, of beverages that generally incorporate fruit juices.",
            'price' => 1.60,
            'image_path' => "fanta.jpg",
            'breakfast' => false,
            'drink' => true,
            'vegan' => true,
            'vegetarian' => true,
            'lactose' => false,
            'gluten' => false,
        ]);

        Product::create([
            'name_ca' => 'Nestea', 
            'name_es' => 'Nestea', 
            'name_en' => 'Nestea',
            'description_ca' => "Nestea és la marca pionera a Espanya en el segment dels refrescos de te.",
            'description_es' => "Nestea es la marca pionera en España en el segmento de té-frío.",
            'description_en' => "Nestea is the pioneering brand in Spain in the tea-cool segment.",
            'price' => 1.65,
            'image_path' => "nestea.jpg",
            'breakfast' => false,
            'drink' => true,
            'vegan' => true,
            'vegetarian' => true,
            'lactose' => false,
            'gluten' => false,
        ]);

        Product::create([
            'name_ca' => 'Croissant', 
            'name_es' => 'Croissant', 
            'name_en' => 'Croissant',
            'description_ca' => "El croissant és un pastís petit i de forma de mitja lluna. És fet a base de mantega i pasta de full.",
            'description_es' => "El croissant es un pequeño pastel en forma de media luna. Se elabora con mantequilla y pasta de hoja.",
            'description_en' => "The croissant is a small, crescent-shaped cake. It is made from butter and sheet paste.",
            'price' => 1.30,
            'image_path' => "croissant.jpg",
            'breakfast' => true,
            'drink' => false,
            'vegan' => false,
            'vegetarian' => true,
            'lactose' => true,
            'gluten' => false,
        ]);

        Product::create([
            'name_ca' => 'Dònut', 
            'name_es' => 'Donut', 
            'name_en' => 'Doughnut',
            'description_ca' => "Un dònut és el nom anglès d'un tipus de rosquilla.",
            'description_es' => "Un donut es el nombre inglés de un tipo de rosquilla.",
            'description_en' => "A doughnut is the English name for a type of robe.",
            'price' => 1.50,
            'image_path' => "donut.jpg",
            'breakfast' => true,
            'drink' => false,
            'vegan' => false,
            'vegetarian' => true,
            'lactose' => true,
            'gluten' => true,
        ]);

        Product::create([
            'name_ca' => 'Magdalena', 
            'name_es' => 'Magdalena', 
            'name_en' => 'Cupcake',
            'description_ca' => "Una magdalena és un pastís de bescuit.",
            'description_es' => "Una magdalena es una tarta de galletas",
            'description_en' => "A cupcake is a biscuit cake.",
            'price' => 0.80,
            'image_path' => "cupcake.jpg",
            'breakfast' => true,
            'drink' => false,
            'vegan' => false,
            'vegetarian' => true,
            'lactose' => true,
            'gluten' => true,
        ]);

        Product::create([
            'name_ca' => 'Entrepà de fuet petit', 
            'name_es' => 'Bocadillo de fuet pequeño', 
            'name_en' => 'Small whip sandwich',
            'description_ca' => "Entrepà de fuet petit, 1/2 de baguette.",
            'description_es' => "Bocadillo de fuet pequeño, 1/2 de baguette",
            'description_en' => "Small whip sandwich, 1/2 baguette.",
            'price' => 2.30,
            'image_path' => "bocata_fuet_petit.jpg",
            'breakfast' => true,
            'drink' => false,
            'vegan' => false,
            'vegetarian' => false,
            'lactose' => true,
            'gluten' => true,
        ]);

        Product::create([
            'name_ca' => 'Entrepà de fuet gran', 
            'name_es' => 'Bocadillo de fuet grande', 
            'name_en' => 'Big whip sandwich',
            'description_ca' => "Entrepà de fuet gran, 1 baguette sencera.",
            'description_es' => "Bocadillo de fuet grande, 1 baguette entera.",
            'description_en' => "Big whip sandwich, 1 entire baguette.",
            'price' => 3.20,
            'image_path' => "bocata_fuet_gran.jpg",
            'breakfast' => true,
            'drink' => false,
            'vegan' => false,
            'vegetarian' => false,
            'lactose' => true,
            'gluten' => true,
        ]);

        Product::create([
            'name_ca' => 'Entrepà de bacon petit', 
            'name_es' => 'Bocadillo de bacon pequeño', 
            'name_en' => 'Small bacon sandwich',
            'description_ca' => "Entrepà de bacon petit, 1/2 de baguette.",
            'description_es' => "Bocadillo de bacon pequeño, 1/2 de baguette",
            'description_en' => "Small bacon sandwich, 1/2 baguette.",
            'price' => 2.50,
            'image_path' => "bocata_bacon_petit.jpg",
            'breakfast' => true,
            'drink' => false,
            'vegan' => false,
            'vegetarian' => false,
            'lactose' => true,
            'gluten' => true,
        ]);

        Product::create([
            'name_ca' => 'Entrepà de bacon gran', 
            'name_es' => 'Bocadillo de bacon grande', 
            'name_en' => 'Big bacon sandwich',
            'description_ca' => "Entrepà de bacon gran, 1 baguette sencera.",
            'description_es' => "Bocadillo de bacon grande, 1 baguette entera.",
            'description_en' => "Big bacon sandwich, 1 entire baguette.",
            'price' => 3.40,
            'image_path' => "bocata_bacon_gran.jpg",
            'breakfast' => true,
            'drink' => false,
            'vegan' => false,
            'vegetarian' => false,
            'lactose' => true,
            'gluten' => true,
        ]);

        Product::create([
            'name_ca' => 'Entrepà de hamburguesa petit', 
            'name_es' => 'Bocadillo de hamburguesa pequeño', 
            'name_en' => 'Small hamburger sandwich',
            'description_ca' => "Entrepà de hamburguesa petit, 1/2 de baguette.",
            'description_es' => "Bocadillo de hamburguesa pequeño, 1/2 de baguette",
            'description_en' => "Small hamburger sandwich, 1/2 baguette.",
            'price' => 2.60,
            'image_path' => "/bocata_hamburguesa_petit.jpg",
            'breakfast' => true,
            'drink' => false,
            'vegan' => false,
            'vegetarian' => false,
            'lactose' => true,
            'gluten' => true,
        ]);

        Product::create([
            'name_ca' => 'Entrepà de hamburguesa gran', 
            'name_es' => 'Bocadillo de hamburguesa grande', 
            'name_en' => 'Big hamburger sandwich',
            'description_ca' => "Entrepà de hamburguesa gran, 1 baguette sencera.",
            'description_es' => "Bocadillo de hamburguesa grande, 1 baguette entera.",
            'description_en' => "Big hamburger sandwich, 1 entire baguette.",
            'price' => 3.80,
            'image_path' => "bocata_hamburguesa_gran.jpg",
            'breakfast' => true,
            'drink' => false,
            'vegan' => false,
            'vegetarian' => false,
            'lactose' => true,
            'gluten' => true,
        ]);

        Product::create([
            'name_ca' => 'Plat combinat', 
            'name_es' => 'Plato combinado', 
            'name_en' => 'Combined plate',
            'description_ca' => "Plat combinat de hamburguesa amb patates fregides.",
            'description_es' => "Plato combinado de hamburguesa con patatas fritas.",
            'description_en' => "Combined burger plate with fries.",
            'price' => 8.60,
            'image_path' => "plat_combinat.jpg",
            'breakfast' => false,
            'drink' => false,
            'vegan' => false,
            'vegetarian' => false,
            'lactose' => true,
            'gluten' => true,
        ]);

        Product::create([
            'name_ca' => 'Amanida', 
            'name_es' => 'Ensalada', 
            'name_en' => 'Salad',
            'description_ca' => "Amanida amb blat de moro i olives.",
            'description_es' => "Ensalada con maíz y aceitunas",
            'description_en' => "Salad with corn and olives.",
            'price' => 7.50,
            'image_path' => "amanida.jpg",
            'breakfast' => false,
            'drink' => false,
            'vegan' => false,
            'vegetarian' => false,
            'lactose' => true,
            'gluten' => true,
        ]);
    }
}