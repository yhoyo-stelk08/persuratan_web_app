<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class SuratRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'tanggal_naskah' => ['required'],
            'nomor_naskah' => ['required', 'max:255'],
            'hal' => ['required'],
            'asal_naskah' => ['required'],
            'sifat_arsip' => ['required', 'in:BIASA,TERBATAS,RAHASIA'],
            'kode_klasifikasi' => ['required'],
            'kode_unit' => ['required'],
            'uraian_info_berkas' => ['required'],
            'tingkat_perkembangan' => ['required', 'in:Copy,Asli'],
            'jumlah_halaman_surat' => ['required', 'integer'],
            'lokasi' => ['required'],
            'masa_aktif' => ['required', 'integer'],
            'masa_inaktif' => ['required', 'integer'],
            'keterangan' => ['required', 'in:Musnah,Permanen'],
            'jumlah_folder' => ['required', 'integer'],
        ];
    }
}
