<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Film extends Model
{
    protected $fillable = [
        'title',
        'slug',
        'genre',
        'duration',
        'rating',
        'release_date',
        'logline',
        'synopsis',
        'director',
        'cast',
        'poster',
        'backdrop',
        'trailer_url'
    ];

    protected $casts = [
        'release_date' => 'date',
    ];
}