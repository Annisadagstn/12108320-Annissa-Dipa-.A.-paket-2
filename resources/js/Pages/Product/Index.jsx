import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, router } from '@inertiajs/react';

export default function Index({ auth, products }) {

    const handleDelete = (product) => {
        router.delete(`/product/${product.id}`)
    }
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />
            <div className='w-full h-auto flex flex-col gap-[10px]'>
                <div className='mt-[10px] w-full h-auto px-[15px]'>
                    <div className='bg-white w-full h-full p-[10px] flex items-center justify-between'>
                        <p>Product</p>
                        <Link href='/product/create' className='bg-red-500 p-[5px] text-white rounded-sm font-bold capitalize'>add product</Link>
                    </div>
                </div>
                <div className='bg-transparent px-[15px] flex flex-col gap-[10px] rounded-md'>
                    {products.length > 0 ? (
                        products.map((product, index) => {
                            return (
                                <div key={index} className='w-full h-auto bg-white p-[10px] flex items-center justify-between'>
                                    <div>
                                        <p>{product.name}</p>
                                        <p>{product.price}</p>
                                        <p>{product.stock}</p>
                                    </div>
                                    <div className='flex gap-4 items-center'>
                                     <Link href={`/product/edit/${product.id}`} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Edit</Link>
                                     <button onClick={() => handleDelete(product)} className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">Delete</button>
                                     <Link href={`/product/restock/${product.id}`} className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">Restock</Link>
                                     <Link href={`/product/payment/${product.id}`} className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600">Payment</Link>

                                    </div>

                                </div>
                            )
                        })
                    ):(
                        <div>no data</div>
                    )}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
