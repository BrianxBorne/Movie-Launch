<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class FilmResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'slug' => $this->slug,
            'genre' => $this->genre,
            'duration' => $this->duration,
            'rating' => $this->rating,
            'release_date' => $this->release_date->format('Y-m-d'),
            'logline' => $this->logline,
            'synopsis' => $this->synopsis,
            'director' => $this->director,
            'cast' => $this->cast,
            'poster' => $this->poster,
            'backdrop' => $this->backdrop,
            'trailer_url' => $this->trailer_url,
        ];
    }
}