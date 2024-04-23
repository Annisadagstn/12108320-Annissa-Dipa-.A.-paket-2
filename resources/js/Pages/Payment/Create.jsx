import React, { useState } from 'react';
import { useForm } from '@inertiajs/inertia-react';

const Create = () => {
    const { data, setData, post } = useForm({
        amount: '',
        user_id: '',
        status: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((data) => ({
            ...data,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post('/payment/store', data);
    };

    return (
        <div>
            <h2>Create Payment</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="amount">Amount:</label>
                <input type="number" name="amount" value={data.amount} onChange={handleChange} placeholder="Enter amount" required />
                <button type="submit">Submit Payment</button>
            </form>
        </div>
    );
};

export default Create;
