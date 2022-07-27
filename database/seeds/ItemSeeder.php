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
      Item::create(['title' => 'Spinach', 'image' => 'spinach.png', 'description' => '500 Gram', 'price' => 250]);
      Item::create(['title' => 'Fenugreek', 'image' => 'fenugreek.png', 'description' => '500 Gram', 'price' => 200]);
      Item::create(['title' => 'Green Amaranth', 'image' => 'green_amaranth.png', 'description' => '1 Bunch', 'price' => 150]);
      Item::create(['title' => 'Bitter Gourd', 'image' => 'bitter_gourd.png', 'description' => '1 KG', 'price' => 100]);
      Item::create(['title' => 'Tomato', 'image' => 'tomato.png', 'description' => '1 KG', 'price' => 50]);
    }
}
