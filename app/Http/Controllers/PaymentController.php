<?php

namespace App\Http\Controllers;

use App\Models\Payment;
use GuzzleHttp\Client;
use GuzzleHttp\Promise\Create;
use Illuminate\Http\Request;

class PaymentController extends Controller
{
    public function create()
    {
        return inertia('Payment/Create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'amount' => 'required|numeric|min:0',
        ]);

        $payment = new Payment();
        $payment->amount = $request->amount;
        $payment->user_id = Payment::id();
        $payment->status = 'pending'; // Atur status pembayaran sesuai kebutuhan
        $payment->save();

        return $payment->status === 'success'
            ? redirect()->route('payment.success')
            : redirect()->route('payment.cancel');

    }

    public function success()
    {
        return inertia('Payment/Success');
    }

    public function cancel()
    {
        return inertia('Payment/Cancel');
    }
}
