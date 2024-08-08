import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/books/')
            .then(response => {
                setBooks(response.data);
                console.log(response)
            })
            .catch(error => {
                console.error('There was an error fetching the books!', error);
            });
    }, []);

    return (
        <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold my-8 text-center">Book List</h1>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {books.map(book => (
                    <li key={book.id} className="bg-white shadow-md rounded-lg overflow-hidden">
                        <img src={`http://localhost:8000${book.booksImg}`} alt={book.name} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h2 className="text-2xl font-bold">{book.name}</h2>
                            <p className="text-gray-700">by {book.author}</p>
                            <p className="text-gray-700">Book Left: {book.stock}</p>
                            <p className="text-green-600 font-semibold">{book.isAvailable ? 'Available' : 'Stock Out'}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Home;
