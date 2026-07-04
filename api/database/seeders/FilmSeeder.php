<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Film;

class FilmSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $films = [

            [
                'title' => 'Eclipse Protocol',
                'slug' => 'eclipse-protocol',
                'genre' => 'Sci-Fi Thriller',
                'duration' => 128,
                'rating' => 'PG-13',
                'release_date' => '2026-10-17',
                'logline' => 'Humanity receives a mysterious signal from beyond our solar system.',
                'synopsis' => 'When a deep-space transmission reaches Earth, a team of scientists discovers a secret that could redefine humanity forever.',
                'director' => 'Sophia Carter',
                'cast' => 'Emma Stone, John Boyega, Oscar Isaac',
                'poster' => 'posters/eclipse-protocol.jpg',
                'backdrop' => 'backdrops/eclipse-protocol.jpg',
                'trailer_url' => 'https://www.youtube.com/embed/abc123'
            ],

            [
                'title' => 'Crimson Verdict',
                'slug' => 'crimson-verdict',
                'genre' => 'Crime Thriller',
                'duration' => 118,
                'rating' => 'R',
                'release_date' => '2026-11-06',
                'logline' => 'Justice has a price.',
                'synopsis' => 'A prosecutor uncovers a conspiracy stretching from the courtroom to the highest levels of government.',
                'director' => 'Daniel Brooks',
                'cast' => 'Michael B. Jordan, Emily Blunt, Mahershala Ali',
                'poster' => 'posters/crimson-verdict.jpg',
                'backdrop' => 'backdrops/crimson-verdict.jpg',
                'trailer_url' => 'https://www.youtube.com/embed/abc124'
            ],

            [
                'title' => 'The Last Ember',
                'slug' => 'the-last-ember',
                'genre' => 'Fantasy Adventure',
                'duration' => 140,
                'rating' => 'PG-13',
                'release_date' => '2026-12-12',
                'logline' => 'One spark can save a kingdom.',
                'synopsis' => 'A reluctant hero embarks on a dangerous quest to restore the last magical flame.',
                'director' => 'Isabella Moore',
                'cast' => 'Anya Taylor-Joy, Richard Madden, Dev Patel',
                'poster' => 'posters/the-last-ember.jpg',
                'backdrop' => 'backdrops/the-last-ember.jpg',
                'trailer_url' => 'https://www.youtube.com/embed/abc125'
            ],

            [
                'title' => 'Neon Shadows',
                'slug' => 'neon-shadows',
                'genre' => 'Cyberpunk Action',
                'duration' => 122,
                'rating' => 'R',
                'release_date' => '2027-01-23',
                'logline' => 'The city never sleeps, and neither do its secrets.',
                'synopsis' => 'A rogue hacker fights a powerful corporation in a futuristic metropolis.',
                'director' => 'Alex Chen',
                'cast' => 'Simu Liu, Zendaya, Pedro Pascal',
                'poster' => 'posters/neon-shadows.jpg',
                'backdrop' => 'backdrops/neon-shadows.jpg',
                'trailer_url' => 'https://www.youtube.com/embed/abc126'
            ],

            [
                'title' => 'Silent Harbor',
                'slug' => 'silent-harbor',
                'genre' => 'Mystery Drama',
                'duration' => 114,
                'rating' => 'PG-13',
                'release_date' => '2027-02-20',
                'logline' => 'Every harbor hides a secret.',
                'synopsis' => 'A journalist returns to her hometown to investigate a decades-old disappearance.',
                'director' => 'Grace Holloway',
                'cast' => 'Florence Pugh, Andrew Garfield, Viola Davis',
                'poster' => 'posters/silent-harbor.jpg',
                'backdrop' => 'backdrops/silent-harbor.jpg',
                'trailer_url' => 'https://www.youtube.com/embed/abc127'
            ],

            [
                'title' => 'Beyond Orion',
                'slug' => 'beyond-orion',
                'genre' => 'Space Adventure',
                'duration' => 136,
                'rating' => 'PG',
                'release_date' => '2027-03-27',
                'logline' => 'Adventure begins beyond the stars.',
                'synopsis' => 'An international crew sets out on humanity’s first mission beyond the Orion Arm.',
                'director' => 'Nathan Reeves',
                'cast' => 'Chris Pine, Lupita Nyong\'o, John David Washington',
                'poster' => 'posters/beyond-orion.jpg',
                'backdrop' => 'backdrops/beyond-orion.jpg',
                'trailer_url' => 'https://www.youtube.com/embed/abc128'
            ],

        ];

        foreach ($films as $film) {
            Film::create($film);
        }
    }
}