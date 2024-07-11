<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;

class SuratMasuk extends Model
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

    public function scopeSearch(Builder $query, Request $request)
    {
        $search = strtolower($request->search);

        return $query->whereRaw('nomor_naskah like ?', ["%{$search}%"])
            ->orWhereRaw('LOWER(hal) like ?', ["%{$search}%"])
            ->orWhere('tanggal_naskah', 'like', "%{$search}%")
            ->orWhereRaw('LOWER(asal_naskah) like ?', ["%{$search}%"])
            ->orWhereRaw('LOWER(uraian_info_berkas) like ?', ["%{$search}%"]);
        // Add more conditions if needed;
    }
}
