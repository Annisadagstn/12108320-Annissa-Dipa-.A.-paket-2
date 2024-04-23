// resources/js/components/Payment.jsx

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
            <h1>Payment Page</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="amount">Amount:</label>
                    <input
                        type="text"
                        id="amount"
                        name="amount"
                        value={formData.amount}
                        onChange={handleChange}
                    />
                </div>
                {/* Tambahkan input tambahan sesuai kebutuhan */}
                <div>
                    <button type="submit">Submit Payment</button>
                </div>
            </form>
        </div>
    );
};

export default Payment;
