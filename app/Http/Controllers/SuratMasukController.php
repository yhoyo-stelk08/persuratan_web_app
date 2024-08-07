<?php

namespace App\Http\Controllers;

use App\Http\Requests\SuratRequest;
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
        } else {
            // Default sorting
            $query->orderByDesc('updated_at');
        }

        $surat_masuk = $query->paginate(10);

        $data_surat = SuratMasukResource::collection($surat_masuk);

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
    public function store(SuratRequest $request)
    {
        \Log::debug('Entering surat masuk store method');
        try {
            $validated_data = $request->validated();
            \Log::info('Request validated', ['validated' => $validated_data]);

            SuratMasuk::create($validated_data);
            \Log::info('SuratMasuk created successfully', ['surat_masuk' => $validated_data]);
            return redirect()->route('surat-masuk.index')
                ->with('message', ['type' => 'success', 'body' => 'Surat sukses di input !']);
        } catch (\Exception $e) {
            \Log::error('Error occurred in surat masuk store method', ['error' => $e->getMessage()]);

            return redirect()->back()
                ->with('message', ['type' => 'error', 'body' => 'Gagal untuk menyimpan surat masuk.']);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(SuratMasuk $suratMasuk)
    {
        $surat_masuk = new SuratMasukResource($suratMasuk);
        return inertia('SuratMasuk/Show', [
            'data_surat' => $surat_masuk,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(SuratMasuk $suratMasuk)
    {
        $surat_masuk = new SuratMasukResource($suratMasuk);
        return inertia('SuratMasuk/Edit', [
            'data_surat' => $surat_masuk,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(SuratRequest $request, SuratMasuk $suratMasuk)
    {
        \Log::debug('Entering surat masuk update method');
        try {
            $validated_data = $request->validated();
            \Log::info('Request validated', ['validated' => $validated_data]);
            $suratMasuk->update($validated_data);
            \Log::info('SuratMasuk updated successfully', ['surat masuk' => $validated_data]);

            return redirect()->route('surat-masuk.index')
                ->with('message', ['type' => 'success', 'body' => 'Surat berhasil di update!']);
        } catch (\Exception $e) {
            \Log::error('Error occurred in surat masuk update method', ['error' => $e->getMessage()]);

            return redirect()->back()
                ->with('message', ['type' => 'error', 'body' => 'Gagal update surat.']);
        }
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

            return redirect()->route('surat-masuk.index')
                ->with('message', ['type' => 'success', 'body' => 'Surat sukses di hapus']);
        } catch (\Exception $e) {
            \Log::error('Error occurred in surat masuk destroy method', ['error' => $e->getMessage()]);

            return redirect()->back()
                ->with('message', ['type' => 'error', 'body' => 'Gagal menghapus surat']);
        }
    }
}
