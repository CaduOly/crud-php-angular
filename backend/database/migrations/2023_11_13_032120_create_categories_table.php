<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('categories', function (Blueprint $table) {
            $table->id();
            $table->string('descricao');
            $table->timestamps();
        });

        DB::table('categories')->insert([
            [
                'descricao' => 'Eletrônicos',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'descricao' => 'Roupas',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'descricao' => 'Alimentos',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'descricao' => 'Livros',
                'created_at' => now(),
                'updated_at' => now()
            ],

        ]);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('categories');
    }
};
