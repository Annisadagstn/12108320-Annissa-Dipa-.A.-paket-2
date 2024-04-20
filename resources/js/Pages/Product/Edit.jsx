import { router, useForm } from '@inertiajs/react';
import React from 'react'

const edit = ({products}) => {

    const {data, setData} = useForm({
        'name':products.name,
        'price':products.price,
        'stock':products.stock,
        'image':products.image,
    })

    function handleChange(e) {
        const { name, value } = e.target;
        setData(values => ({
          ...values,
          [name]: value,
        }));
      }

    const submit = (e) => {
        e.preventDefault()
        router.put(`/product/edit/${products.id}`, data)
    }

  return (
    <div>
        <p>edit product</p>

        <form onSubmit={submit}>
            <input type="text" placeholder='name product' onChange={handleChange} name='name' defaultValue={products.name} />
            <input type="number" placeholder='price product' onChange={handleChange} name='price' defaultValue={products.price} />
            <input type="number" placeholde= 'stock product' onChange={handleChange} name='stock' defaultValue={products.stock} />
            <input type="text" placeholde= 'image product' onChange={handleChange} name='image' defaultValue={products.image} />
            <button>
                edit
            </button>
        </form>
    </div>
  )
}

export default edit