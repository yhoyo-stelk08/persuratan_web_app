<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class DaftarSuratResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'tanggal_naskah' => $this->tanggal_naskah,
            'nomor_naskah' => $this->nomor_naskah,
            'hal' => $this->hal,
            'asal_naskah' => $this->asal_naskah,
            'sifat_arsip' => $this->sifat_arsip,
            'kode_klasifikasi' => $this->kode_klasifikasi,
            'kode_unit' => $this->kode_unit,
            'uraian_info_berkas' => $this->uraian_info_berkas,
            'tingkat_perkembangan' => $this->tingkat_perkembangan,
            'jumlah_halaman_surat' => $this->jumlah_halaman_surat,
            'lokasi' => $this->lokasi,
            'masa_aktif' => $this->masa_aktif,
            'masa_inaktif' => $this->masa_inaktif,
            'keterangan' => $this->keterangan,
            'jumlah_folder' => $this->jumlah_folder,
            'created_at' => $this->formatDate($this->created_at),
            'updated_at' => $this->formatDate($this->updated_at),
        ];
    }

    private function formatDate($date)
    {
        return $date ? Carbon::parse($date)->toFormattedDateString() : null;
    }
}
