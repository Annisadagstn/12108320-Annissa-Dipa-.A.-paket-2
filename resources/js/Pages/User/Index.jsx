import { Link, router } from '@inertiajs/react';
import React from 'react'

const Index = ({users, auth}) => {

    
    const filteredUsers = users.filter(user => {
        return !(auth && user.id === auth.user.id); 
    });

    const handleDelete = (users) => {
        router.delete(`/user/${users.id}`)
    }

  return (
    <div>
        <p>data</p>
        <div className='flex flex-col gap-[10px]'>
            <div className='bg-transparent w-full h-auto px-[15px]'>
                <div className='bg-black text-white p-[10px] w-full h-full rounded-md'>
                    hello
                </div>
            </div>
            <div className='bg-transparent w-full h-auto px-[15px] flex flex-col gap-[10px]'>
                {filteredUsers.length > 0 ?(
                    filteredUsers.map((users, index) => {
                        return (
                            <div key={index} className='bg-black text-white w-full h-full p-[10px] flex items-center justify-between gap-[10px] rounded-md'>
                                <div className='flex flex-col'>
                                    <p>
                                    {users.name}    
                                    </p>
                                    <p>
                                    {users.email}    
                                    </p>
                                    <p>
                                    {users.role}    
                                    </p>
                                    
                                </div>
                                <div className='flex gap-[10px]'>
                                    <Link href={`/user/edit/${users.id}`}>edit</Link>
                                    <button onClick={() => handleDelete(users)}>delete</button>
                                </div>
                            </div>
                        )
                    })
                ):(
                    <div>no data</div>
                )}
            </div>
        </div>
    </div>

    
  )
 
}


export default Index