<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Product;
use App\Models\ProductStore;
use App\Models\Category;
use App\Models\Brand;

class ProductSale extends Model
{
    use HasFactory;
    protected $table = 'db_productsale';
    protected $with = ['product', 'category', 'brand'];

    public function product(): BelongsTo
    {
        return $this->belongsTo(ProductStore::class,Product::class);
    }
    public function category(): HasOneThrough
    {
        return $this->hasOneThrough(Category::class, Product::class);
    }
    public function brand(): HasOneThrough
    {
        return $this->hasOneThrough(Brand::class, Product::class);
    }
}