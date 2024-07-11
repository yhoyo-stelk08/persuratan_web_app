<?php

namespace App\Http\Resources;

use App\Traits\FormatSurat;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class DaftarSuratResource extends JsonResource
{
    use FormatSurat;
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return $this->formatSuratArray($this);
    }
}
