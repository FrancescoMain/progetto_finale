<?php

namespace Database\Seeders;

use App\Models\Apartment;
use App\Models\Message;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MessageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Message::factory() -> count(40) -> make() -> each(function($a){
            $apartment = Apartment::inRandomOrder() -> first();
            $a -> apartment() -> associate($apartment);
            $a -> save();
        });
    }
}
