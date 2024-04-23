// resources/js/Pages/Product/Payment.jsx

import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';

const Payment = () => {
    const [formData, setFormData] = useState({
        amount: '',
        user_id: '',
        status: '',
        // Tambahkan state tambahan sesuai kebutuhan
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        Inertia.post('/product/payment', formData);
    };

    return (
        <div>
        <p>create product</p>

        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='amount product' onChange={handleChange} name='amount' />
            <input type="text" placeholder='user_id product' onChange={handleChange} name='user_id' />
            <input type="text" placeholde= 'status product' onChange={handleChange} name='status' />

            <button>
                create
            </button>
        </form>
    </div>
    );
};

export default Payment;
