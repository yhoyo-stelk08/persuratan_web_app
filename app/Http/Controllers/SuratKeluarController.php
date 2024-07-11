<?php

namespace App\Http\Controllers;

use App\Http\Requests\SuratRequest;
use App\Http\Resources\SuratKeluarResource;
use App\Models\SuratKeluar;
use Illuminate\Http\Request;

class SuratKeluarController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        \Log::debug('Entering surat keluar index method');
        $query = SuratKeluar::search($request);

        // Add sorting
        if ($request->has('sort_by') && $request->has('sort_direction')) {
            $query->orderBy($request->get('sort_by'), $request->get('sort_direction'));
        } else {
            // Default sorting
            $query->orderByDesc('updated_at');
        }

        $surat_keluar = $query->paginate(10);

        $data_surat = SuratKeluarResource::collection($surat_keluar);

        // Log the results
        \Log::info('Combined Surat', ['Data Surat' => $data_surat]);

        return inertia('SuratKeluar/Index', [
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
        return inertia('SuratKeluar/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(SuratRequest $request)
    {
        \Log::debug('Entering surat keluar store method');
        try {
            $validated_data = $request->validated();
            \Log::info('Request validated', ['validated' => $validated_data]);

            SuratKeluar::create($validated_data);
            \Log::info('SuratKeluar created successfully', ['surat_keluar' => $validated_data]);
            return redirect()->route('surat-keluar.index')
                ->with('message', ['type' => 'success', 'body' => 'Surat sukses di input !']);
        } catch (\Exception $e) {
            \Log::error('Error occurred in surat keluar store method', ['error' => $e->getMessage()]);

            return redirect()->back()
                ->with('message', ['type' => 'error', 'body' => 'Gagal untuk menyimpan surat keluar.']);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(SuratKeluar $suratKeluar)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(SuratKeluar $suratKeluar)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, SuratKeluar $suratKeluar)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(SuratKeluar $suratKeluar)
    {
        //
    }
}
