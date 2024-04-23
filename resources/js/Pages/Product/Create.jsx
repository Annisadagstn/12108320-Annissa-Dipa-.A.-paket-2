import { router, useForm } from '@inertiajs/react';
import React from 'react'

const Create = () => {

    const {data, setData} = useForm({
        'name':'',
        'price':'',
        'stock':'',
        'image':'',
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
        router.post('/product/create', data)
    }

  return (
    <div>
        <p>create product</p>

        <form onSubmit={submit}>
            <input type="text" placeholder='name product' onChange={handleChange} name='name' />
            <input type="number" placeholder='price product' onChange={handleChange} name='price' />
            <input type="number" placeholde= 'stock product' onChange={handleChange} name='stock' />
            <input type="text" placeholde= 'image product' onChange={handleChange} name='image' />
            <button>
                create
            </button>
        </form>
    </div>
  )
}

export default Create
