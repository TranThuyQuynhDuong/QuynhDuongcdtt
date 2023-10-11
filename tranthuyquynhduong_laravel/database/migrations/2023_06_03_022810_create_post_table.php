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
        Schema::create('db_post', function (Blueprint $table) {
            $table->id();
            $table->unsignedInteger('topic_id')->nullable();
            $table->string("title");
            $table->string("slug");
            $table->text("detail");
            $table->string("description");
            $table->string("image");
            $table->string("type")->default('post');

            $table->unsignedInteger('created_by');
            $table->unsignedInteger('update_by')->nullable();
            $table->timestamps();
            $table->unsignedTinyInteger('status')->default(2);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('db_post');
    }
};
