<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;

class Order extends Model
{
    use HasFactory;
    protected $table = 'db_order';
    protected $with = ['user'];

    public function product(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
