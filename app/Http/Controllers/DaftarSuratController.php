<?php

namespace App\Http\Controllers;

use App\Http\Resources\DaftarSuratResource;
use App\Models\SuratMasuk;
use App\Models\SuratKeluar;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class DaftarSuratController extends Controller
{
    public function index(Request $request)
    {
        // Get search parameters
        $search = $request->input('search');


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

        // Apply search filters
        if ($search) {
            $suratMasukQuery->where(function ($query) use ($search) {
                $query->whereRaw('LOWER(nomor_naskah) like ?', ["%{$search}%"])
                    ->orWhereRaw('LOWER(hal) like ?', ["%{$search}%"])
                    ->orWhere('tanggal_naskah', 'like', "%{$search}%")
                    ->orWhereRaw('LOWER(asal_naskah) like ?', ["%{$search}%"])
                    ->orWhereRaw('LOWER(uraian_info_berkas) like ?', ["%{$search}%"]);
                // Add more conditions if needed
            });

            $suratKeluarQuery->where(function ($query) use ($search) {
                $query->whereRaw('LOWER(nomor_naskah) like ?', ["%{$search}%"])
                    ->orWhereRaw('LOWER(hal) like ?', ["%{$search}%"])
                    ->orWhere('tanggal_naskah', 'like', "%{$search}%")
                    ->orWhereRaw('LOWER(asal_naskah) like ?', ["%{$search}%"])
                    ->orWhereRaw('LOWER(uraian_info_berkas) like ?', ["%{$search}%"]);
                // Add more conditions if needed
            });
        }

        // Combine the queries using unionAll
        $combinedQuery = $suratMasukQuery->unionAll($suratKeluarQuery);

        // Add Sorting 
        if ($request->has('sort_by') && $request->has('sort_direction')) {
            // Paginate the combined results
            $combinedResults = DB::table(DB::raw("({$combinedQuery->toSql()}) as sub"))
                ->mergeBindings($combinedQuery->orderBy($request->get('sort_by'), $request->get('sort_direction')))
                ->paginate(10);
        }
        // Paginate the combined results
        $combinedResults = DB::table(DB::raw("({$combinedQuery->toSql()}) as sub"))
            ->mergeBindings($combinedQuery)
            ->paginate(10);

        // Convert the paginated results to resources
        $combinedResources = DaftarSuratResource::collection($combinedResults);

        // Log the results
        \Log::info('Combined Surat', ['Data Surat' => $combinedResources]);

        return inertia('DaftarSurat', [
            'data_surat' => $combinedResources, // Pass data_surat parameter to the front end
            'search' => $search, // Pass search parameter to the front end
            'sort_by' => $request->sort_by ?? "",
            'sort_direction' => $request->sort_direction ?? "",
        ]);
    }

    public function destroy($id)
    {
        try {
            // search surat_masuk
            $suratMasukSearchResult = SuratMasuk::find($id);
            $suratKeluarSearchResult = SuratKeluar::find($id);

            // message to be sent to front end
            $message = "";

            // if find delete it
            if ($suratMasukSearchResult) {
                \Log::info('Surat Masuk Search Result', ['search result', $suratMasukSearchResult]);
                $suratMasukSearchResult->delete();
                \Log::info('Surat Masuk Deleted Result', ['search result', $suratMasukSearchResult->uraian_info_berkas]);
                $message = "Surat masuk sukses dihapus!";
            } else if ($suratKeluarSearchResult) {
                \Log::info('Surat Keluar Search Result', ['search result', $suratKeluarSearchResult]);
                $suratKeluarSearchResult->delete();
                \Log::info('Surat Keluar Deleted Result', ['search result', $suratKeluarSearchResult->uraian_info_berkas]);
                $message = "Surat keluar sukses dihapus!";
            }
            return redirect()->route('daftar-surat.index')
                ->with('message', ['type' => 'success', 'body' => $message]);
            ;
        } catch (\Exception $e) {
            \Log::error("Error occured in DaftarSuratController destroy method", ['error' => $e->getMessage()]);
            return redirect()->back()
                ->with('message', ['type' => 'error', 'body' => 'Gagal menghapus surat']);
        }

    }
}
