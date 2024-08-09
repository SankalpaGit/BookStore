import React, { useState } from 'react';
import axios from 'axios';

const DonateBookForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        author: '',
        published_Date: '',
        description: '',
        ISBN: '',
        stock: 1,
        booksImg: null
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleFileChange = (e) => {
        setFormData({
            ...formData,
            booksImg: e.target.files[0]
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData();
        Object.keys(formData).forEach(key => {
            data.append(key, formData[key]);
        });

        axios.post('http://localhost:8000/donations/', data, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(response => {
                console.log('Donation successful', response.data);
            })
            .catch(error => {
                console.error('There was an error submitting the donation!', error);
            });
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-white shadow-md rounded-lg">
            <input 
                type="text" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                placeholder="Book Name" 
                className="w-full mb-4 p-2 border border-gray-300 rounded"
            />
            <input 
                type="text" 
                name="author" 
                value={formData.author} 
                onChange={handleChange} 
                placeholder="Author" 
                className="w-full mb-4 p-2 border border-gray-300 rounded"
            />
            <input 
                type="date" 
                name="published_Date" 
                value={formData.published_Date} 
                onChange={handleChange} 
                className="w-full mb-4 p-2 border border-gray-300 rounded"
            />
            <textarea 
                name="description" 
                value={formData.description} 
                onChange={handleChange} 
                placeholder="Description" 
                className="w-full mb-4 p-2 border border-gray-300 rounded"
            ></textarea>
            <input 
                type="text" 
                name="ISBN" 
                value={formData.ISBN} 
                onChange={handleChange} 
                placeholder="ISBN" 
                className="w-full mb-4 p-2 border border-gray-300 rounded"
            />
            <input 
                type="number" 
                name="stock" 
                value={formData.stock} 
                onChange={handleChange} 
                min="1" 
                className="w-full mb-4 p-2 border border-gray-300 rounded"
            />
            <input 
                type="file" 
                name="booksImg" 
                onChange={handleFileChange} 
                className="w-full mb-4 p-2 border border-gray-300 rounded"
            />
            <button 
                type="submit" 
                className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
            >
                Donate Book
            </button>
        </form>
    );
};

export default DonateBookForm;
