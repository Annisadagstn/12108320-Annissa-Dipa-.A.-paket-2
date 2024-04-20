<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Product/Index', [
            'products' => Product::get()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Product/Create');
    }
    public function getStock($id)
    {
        return Inertia::render('Product/Restock', [
            'products' => Product::findOrFail($id),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'price' => 'required',
            'stock' => 'required',
            'image' => 'required',
        ]);

        Product::create([
            'name' => $request->name,
            'price' => $request->price,
            'stock' => $request->stock,
            'image' => $request->image,
        ]);

        return redirect('/product')->with('message', 'Product Berhasil Disimpan');

    }

    /**
     * Display the specified resource.
     */
    public function show(Product $product)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Product $product, $id)
    {
        return Inertia::render('Product/Edit', [
            'products' => Product::findOrFail($id)
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $product = Product::find($id);
        $data = $request->validate([
            'name' => 'required',
            'price' => 'required',
            'stock' => 'required',
            'image' => 'required',
        ]);
    
        $product->update($data);
    
        return redirect('/product')->with('message', 'Product Berhasil Diupdate');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product, $id)
    {
        $product = Product::findOrFail($id);
        $product->delete();
        
        return redirect()->back()->with('message', 'Product Berhasil Dihapus');

    }
    public function reStock(Request $request, $id)
    {
        $request->validate([
            'stock' => 'required|min:1', // stock harus positif integer
        ],[
            'stock.required' => 'stock tidak boleh kosong',
            'stock.min' => 'stock tidak boleh 0'
        ]);
    
        $product = Product::findOrFail($id);
        $currentstock = $product->stock;
    
        $newstock = $currentstock + $request->stock;
        
        $product->update([
            'stock' => $newstock,
        ]);
    
        return redirect('/product')->with('message', 'stock berhasil diperbarui');

    }
}
