<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\PaymentController;
use App\Http\Controllers\MakingUserController;
use App\Http\Controllers\ProductController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::get('/product', [ProductController::class, 'index']);
    Route::get('/product/create', [ProductController::class, 'create']);
    Route::post('/product/create', [ProductController::class, 'store']);
    Route::delete('/product/{id}', [ProductController::class, 'destroy']);
    Route::get('/product/edit/{id}', [ProductController::class, 'edit']);
    Route::put('/product/edit/{id}', [ProductController::class, 'update']);
    Route::get('/product/restock/{id}', [ProductController::class, 'getStock']);
    Route::put('/product/restock/{id}', [ProductController::class, 'reStock']);
    Route::post('/product/payment', [ProductController::class, 'processPayment'])->name('product.payment');

    Route::get('/user', [MakingUserController::class, 'index']);
    Route::get('/user/create', [MakingUserController::class, 'create']);
    Route::get('/user/edit/{id}', [MakingUserController::class, 'edit']);
    Route::post('/user/create', [MakingUserController::class, 'store']);
    Route::delete('/user/{id}', [MakingUserController::class, 'destroy']);

    Route::get('/payment/create', [PaymentController::class, 'create'])->name('payment.create');
    Route::post('/payment/store', [PaymentController::class, 'store'])->name('payment.store');
    Route::get('/payment/success', [PaymentController::class, 'success'])->name('payment.success');
    Route::get('/payment/cancel', [PaymentController::class, 'cancel'])->name('payment.cancel');
    Route::get('/product/payment/{id}', [ProductController::class, 'processPayment']);
    Route::put('/product/payment/{id}', [ProductController::class, 'payment']);
});


require __DIR__.'/auth.php';
