<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SuratKeluar extends Model
{
    use HasFactory;

    protected $fillable = [
        'tanggal_naskah',
        'nomor_naskah',
        'hal',
        'asal_naskah',
        'sifat_arsip',
        'kode_klasifikasi',
        'kode_unit',
        'uraian_info_berkas',
        'tingkat_perkembangan',
        'jumlah_halaman_surat',
        'lokasi',
        'masa_aktif',
        'masa_inaktif',
        'keterangan',
        'jumlah_folder',
    ];
}
