<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('surat_keluars', function (Blueprint $table) {
            $table->uuid('id')->primary()->default(DB::raw('gen_random_uuid()'));
            $table->date('tanggal_naskah');
            $table->string('nomor_naskah', 255);
            $table->text('hal');
            $table->text('asal_naskah');
            $table->enum('sifat_arsip', ['BIASA', 'TERBATAS', 'RAHASIA']);
            $table->string('kode_klasifikasi', 255);
            $table->string('kode_unit', 255)->nullable();
            $table->text('uraian_info_berkas')->nullable();
            $table->enum('tingkat_perkembangan', ['Copy', 'Asli']);
            $table->integer('jumlah_halaman_surat')->nullable()->default(0);
            $table->string('lokasi', 255)->nullable();
            $table->integer('masa_aktif')->default(1);
            $table->integer('masa_inaktif')->default(1);
            $table->enum('keterangan', ['Musnah', 'Permanen']);
            $table->integer('jumlah_folder')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('surat_keluars');
    }
};
