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
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('nome');
            $table->foreignId('categoria_id')->constrained('categories');
            $table->decimal('valor', 8, 2);
            $table->date('vencimento')->nullable();
            $table->integer('quantidade_estoque');
            $table->boolean('perecivel');
            $table->timestamps();
        });
    
        DB::table('products')->insert([
            [
                'nome' => 'Smartphone',
                'categoria_id' => 1,
                'valor' => 799.99,
                'vencimento' => '2023-12-31',
                'quantidade_estoque' => 50,
                'perecivel' => false,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'nome' => 'Shorts',
                'categoria_id' => 3,
                'valor' => 56.99,
                'vencimento' => null,
                'quantidade_estoque' => 100,
                'perecivel' => false,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'nome' => 'Tomate',
                'categoria_id' => 3,
                'valor' => 5.99,
                'vencimento' => '2023-11-30',
                'quantidade_estoque' => 200,
                'perecivel' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'nome' => 'Harry Potter e a Pedra Filosofal',
                'categoria_id' => 4,
                'valor' => 39.99,
                'vencimento' => null,
                'quantidade_estoque' => 30,
                'perecivel' => false,
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
    


    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
