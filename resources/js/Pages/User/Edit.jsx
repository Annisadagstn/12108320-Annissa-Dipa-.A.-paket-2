import { router, useForm } from '@inertiajs/react';
import React from 'react'

const Edit = ({users}) => {

    const {data, setData} = useForm({
        'name':users.name,
        'email':users.email,
        'role':users.role,
        
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
        router.put(`/users/edit/${users.id}`, data)
    }


  return (
    <div>
        <p>edit user</p>

        <form onSubmit={submit}>
            <input type="text" placeholder='name users' onChange={handleChange} name='name' defaultValue={users.name} />
            <input type="text" placeholder='email users' onChange={handleChange} name='email' defaultValue={users.email} />
            <select defaultValue={users.role}  name="role" className='w-full border-red-500 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm' onChange={handleChange}>
                    <option value="">Select Option</option>
                    <option value="admin">Admin</option>
                    <option value="petugas">Petugas</option>
              </select>
            <button>
                edit
            </button>
        </form>
    </div>
  )
}

export default Edit