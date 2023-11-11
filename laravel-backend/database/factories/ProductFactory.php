<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
            return [
            'name' => $this->faker->name(),
            'price'=>$this->faker->numberBetween(100000,1000000),
            'stock'=>$this->faker->numberBetween(87593,88957),
            'code'=>$this->faker->numberBetween(573895783,59583953485)
        ];
    }
}
