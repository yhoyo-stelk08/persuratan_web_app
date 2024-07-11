<?php

namespace App\Http\Controllers;

use App\Http\Resources\SuratMasukResource;
use App\Models\SuratMasuk;
use Illuminate\Http\Request;

class SuratMasukController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        \Log::debug('Entering surat masuk index method');
        $query = SuratMasuk::search($request);

        // Add sorting
        if ($request->has('sort_by') && $request->has('sort_direction')) {
            $query->orderBy($request->get('sort_by'), $request->get('sort_direction'));
        }

        $surat_masuk = $query->paginate(10);

        $data_surat = SuratMasukResource::collection(($surat_masuk));

        // Log the results
        \Log::info('Combined Surat', ['Data Surat' => $data_surat]);

        return inertia('SuratMasuk/Index', [
            'data_surat' => $data_surat,
            'search' => $request->search ?? "",
            'sort_by' => $request->sort_by ?? "",
            'sort_direction' => $request->sort_direction ?? "",
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('SuratMasuk/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(SuratMasuk $suratMasuk)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(SuratMasuk $suratMasuk)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, SuratMasuk $suratMasuk)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(SuratMasuk $suratMasuk)
    {
        \Log::debug('Entering surat masuk destroy method');
        try {
            $suratMasuk->delete();
            \Log::info('SuratMasuk deleted successfully', ['student' => $suratMasuk]);

            return redirect()->route('surat_masuk.index')
                ->with('message', ['type' => 'success', 'body' => 'Surat sukses di hapus']);
        } catch (\Exception $e) {
            \Log::error('Error occurred in surat masuk destroy method', ['error' => $e->getMessage()]);

            return redirect()->back()
                ->with('message', ['type' => 'error', 'body' => 'Gagal untuk menghapus surat']);
        }
    }
}
