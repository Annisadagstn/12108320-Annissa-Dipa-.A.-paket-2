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
                                    <div className='flex gap-[10px]'>
                                        <Link href={`/product/edit/${product.id}`}>edit</Link>
                                        <button onClick={() => handleDelete(product)}>delete</button>
                                        <Link href={`/product/restock/${product.id}`}>restock</Link>
                                    </div>
                                </div>
                            )
                        })
                    ):(
                        <div>no data masee</div>
                    )}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
