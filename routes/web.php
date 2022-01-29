<?php

// routes/web.php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::post('count', function (Request $request) {
    return response()->json([
        'message' => $request->message,
    ]);
});
