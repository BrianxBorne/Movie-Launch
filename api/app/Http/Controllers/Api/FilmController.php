<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\FilmResource;
use App\Models\Film;

class FilmController extends Controller
{
    /**
     * Return all films.
     */
    public function index()
    {
        $films = Film::orderBy('release_date')->get();

        return FilmResource::collection($films);
    }

    /**
     * Return a single film by slug.
     */
    public function show($slug)
    {
        $film = Film::where('slug', $slug)->firstOrFail();

        return new FilmResource($film);
    }
}