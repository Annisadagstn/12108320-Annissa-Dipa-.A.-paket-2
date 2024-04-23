<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Payment extends Model
{
    use HasFactory;

    use HasFactory;

    protected $fillable = ['amount', 'status', 'user_id'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
