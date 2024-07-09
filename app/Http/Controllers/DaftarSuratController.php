<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class DaftarSuratController extends Controller
{
    public function index()
    {
        return inertia('DaftarSurat');
    }
}
