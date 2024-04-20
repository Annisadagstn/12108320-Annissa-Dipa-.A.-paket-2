import { router, useForm } from '@inertiajs/react';
import React from 'react'

const Restock = ({products}) => {

    const {data, setData} = useForm({
        'stock':products.stock,
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
        router.put(`/product/restock/${products.id}`, data)
    }

  return (
    <div>
        <p>restock gaes</p>
        <form onSubmit={submit}>
            <input type="number" name="stock" onChange={handleChange}/>
            <button>restock</button>
        </form>
    </div>
  )
}

export default Restock