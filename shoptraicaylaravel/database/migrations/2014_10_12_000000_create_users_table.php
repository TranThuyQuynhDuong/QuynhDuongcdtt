<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

<<<<<<< HEAD
return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
=======
class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
>>>>>>> d06260a1aafa07b87d6d24a6a626c2d1ed759f28
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
<<<<<<< HEAD
            $table->string('email');
=======
            $table->string('email')->unique();
>>>>>>> d06260a1aafa07b87d6d24a6a626c2d1ed759f28
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
<<<<<<< HEAD
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
=======
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
>>>>>>> d06260a1aafa07b87d6d24a6a626c2d1ed759f28
