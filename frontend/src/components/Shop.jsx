import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SkeletonCard = () => (
  <div className="border rounded-lg p-4 shadow-md animate-pulse">
    <div className="w-full h-80 bg-gray-300 mb-4"></div>
    <div className="h-6 bg-gray-300 rounded mb-2"></div>
    <div className="h-4 bg-gray-300 rounded mb-4"></div>
    <div className="h-10 bg-gray-300 rounded"></div>
  </div>
);

const Shop = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('http://localhost:8000/books/');
        setBooks(response.data);
        setTimeout(() => setLoading(false), 1500); // Simulate loading time (1.5s)
      } catch (error) {
        console.error('Error fetching books:', error);
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {Array(4).fill(0).map((_, idx) => (
          <SkeletonCard key={idx} />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {books.map((book) => (
        <div key={book.id} className="border rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img
            src={`http://localhost:8000${book.books_img}`}
            alt={book.title}
            className="w-full h-80 object-cover object-center mb-4 rounded"
          />
          <h2 className="text-2xl font-bold mb-2">{book.title}</h2>
          <p className="text-gray-600 mb-2">{book.author}</p>
          <p className="text-gray-800 font-semibold mb-4">${book.price}</p>
          <button className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300">
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Shop;
