<?php

namespace App\Http\Controllers;

use App\Http\Resources\DaftarSuratResource;
use App\Models\SuratMasuk;
use App\Models\SuratKeluar;
use Illuminate\Support\Facades\DB;

class DaftarSuratController extends Controller
{
    public function index()
    {
        // Define the columns to be selected
        $columns = [
            'id',
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
            'created_at',
            'updated_at'
        ];
        // Select the columns you need from both tables
        $suratMasukQuery = SuratMasuk::select($columns)->toBase();

        $suratKeluarQuery = SuratKeluar::select($columns)->toBase();

        // Combine the queries using unionAll
        $combinedQuery = $suratMasukQuery->unionAll($suratKeluarQuery);

        // Paginate the combined results
        $combinedResults = DB::table(DB::raw("({$combinedQuery->toSql()}) as sub"))
            ->mergeBindings($combinedQuery)
            ->paginate(10);

        // Convert the paginated results to resources
        $combinedResources = DaftarSuratResource::collection($combinedResults);

        // Log the results
        \Log::info('Combined Surat', ['Data Surat' => $combinedResources]);

        return inertia('DaftarSurat', [
            'data_surat' => $combinedResources
        ]);
    }
}
