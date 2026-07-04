<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('films', function (Blueprint $table) {
            $table->id();

            // Basic Information
            $table->string('title');
            $table->string('slug')->unique();
            $table->string('genre');

            // Film Details
            $table->integer('duration'); // Runtime in minutes
            $table->string('rating'); // PG, PG-13, R, etc.
            $table->date('release_date');

            // Descriptions
            $table->text('logline');
            $table->longText('synopsis');

            // Credits
            $table->string('director');
            $table->text('cast');

            // Media
            $table->string('poster');
            $table->string('backdrop');
            $table->string('trailer_url');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('films');
    }
};