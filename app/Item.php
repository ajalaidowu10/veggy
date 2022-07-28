<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Item extends Model
{
    protected $guarded = [];

    public function getImagePathAttribute()
    {
        return asset('images/items/'.$this->image);
    }
    public function getFormatedPriceAttribute()
    {
        return 'N'.$this->price;
    }
}
