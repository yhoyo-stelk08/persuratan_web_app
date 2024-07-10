<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Carbon\Carbon;

class FormatDateInput
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $dateFields = ['tanggal_naskah']; // Add all the date fields that need formatting here

        foreach ($dateFields as $field) {
            if ($request->has($field)) {
                try {
                    $formattedDate = Carbon::createFromFormat('F j, Y', $request->input($field))->format('Y-m-d');
                    $request->merge([$field => $formattedDate]);
                } catch (\Exception $e) {
                    return response()->json(['error' => 'Invalid date format for field ' . $field], 422);
                }
            }
        }
        return $next($request);
    }
}
