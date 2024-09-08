import React from 'react';

const Home = () => {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <section className="bg-cover bg-center h-[80vh] relative flex items-center justify-center" style={{ backgroundImage: "url('https://www.emeraldcoastmagazine.com/content/uploads/2019/10/IMG_1155.jpg')" }}>
        <div className="bg-black bg-opacity-70 w-full h-full absolute top-0 left-0 "></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Discover Your Next Great Read</h1>
          <p className="text-md md:text-lg mb-6">Explore our vast collection of books across all genres.</p>
          <button className="px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-600">Shop Now</button>
        </div>
      </section>


      {/* Featured Books Section */}
      <section className="py-10 px-4 sm:px-8 lg:px-16">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Books</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Example Book Card */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img src="https://cdn.marvel.com/u/prod/marvel/i/mg/6/b0/649da2d1b9574/clean.jpg" alt="Book 1" className="w-full h-80 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-semibold mb-2">X-Men: Days of Future Past</h3>
            <p className="text-gray-600 mb-4">By Marc Guggenheim</p>
            <button className="bg-yellow-500 text-black px-4 py-2 rounded-md hover:bg-yellow-600">View Details</button>
          </div>
          {/* Add more book cards similarly */}
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-10 bg-gray-200 px-4 sm:px-8 lg:px-16">
        <h2 className="text-3xl font-bold  mb-3">Browse by Publisher</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Example Category Card */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <img src="https://thumbs.dreamstime.com/b/marvel-logo-official-design-american-entertainment-company-179548774.jpg" alt="Fiction" className="w-full h-32 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-semibold">Marvel Comics</h3>
          </div>
          {/* Add more category cards similarly */}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-yellow-500 px-4 sm:px-8 lg:px-16">
        <div className="max-w-2xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Subscribe to our Newsletter</h2>
          <p className="text-lg mb-6">Stay updated with the latest book releases and offers!</p>
          <div className="flex justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-l-lg text-black w-64"
            />
            <button className="px-6 py-2 bg-black rounded-r-lg hover:bg-gray-800">Subscribe</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
