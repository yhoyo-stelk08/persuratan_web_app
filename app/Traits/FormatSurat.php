<?php

namespace App\Traits;

trait FormatSurat
{
  public function formatSuratArray($model)
  {
    return [
      'id' => $model->id,
      'tanggal_naskah' => $model->tanggal_naskah,
      'nomor_naskah' => $model->nomor_naskah,
      'hal' => $model->hal,
      'asal_naskah' => $model->asal_naskah,
      'sifat_arsip' => $model->sifat_arsip,
      'kode_klasifikasi' => $model->kode_klasifikasi,
      'kode_unit' => $model->kode_unit,
      'uraian_info_berkas' => $model->uraian_info_berkas,
      'tingkat_perkembangan' => $model->tingkat_perkembangan,
      'jumlah_halaman_surat' => $model->jumlah_halaman_surat,
      'lokasi' => $model->lokasi,
      'masa_aktif' => $model->masa_aktif,
      'masa_inaktif' => $model->masa_inaktif,
      'keterangan' => $model->keterangan,
      'jumlah_folder' => $model->jumlah_folder,
      'created_at' => $this->formatDate($model->created_at),
      'updated_at' => $this->formatDate($model->updated_at),
    ];
  }

  private function formatDate($date)
  {
    return $date ? \Carbon\Carbon::parse($date)->format('Y-m-d') : null;
  }
}