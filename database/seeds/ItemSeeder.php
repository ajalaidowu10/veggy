<?php

use Illuminate\Database\Seeder;
use App\Item;

class ItemSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      Item::truncate();
      Item::create([
        'title' => 'Spinach', 
        'image' => 'spinach.png', 
        'description' => '500 Gram', 
        'price' => 250, 
        'qty'=> 5
      ]);
      Item::create([
        'title' => 'Fenugreek', 
        'image' => 'fenugreek.png', 
        'description' => '500 Gram', 
        'price' => 200, 
        'qty'=> 5
      ]);
      Item::create(['title' => 'Green Amaranth', 
        'image' => 'green_amaranth.png', 
        'description' => '1 Bunch', 
        'price' => 150, 
        'qty'=> 5
      ]);
      Item::create(['title' => 'Bitter Gourd', 
        'image' => 'bitter_gourd.png', 
        'description' => '1 KG', 
        'price' => 100, 
        'qty'=> 5
      ]);
      Item::create(['title' => 'Musk Melon', 
        'image' => 'musk_melon.png', 
        'description' => '1 KG', 
        'price' => 200, 
        'qty'=> 5
      ]);
      Item::create(['title' => 'Redish', 
        'image' => 'redish.png', 
        'description' => '1 KG', 
        'price' => 300, 
        'qty'=> 0
      ]);
    }
}
