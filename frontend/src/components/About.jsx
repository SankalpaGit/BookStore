import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-12 space-y-12">
      
      {/* Section 1: Full-Width Background Image with Text */}
      <section className="relative h-96 bg-cover bg-center text-white flex items-center justify-center" style={{ backgroundImage: 'url(https://miro.medium.com/v2/resize:fit:1200/1*6Jp3vJWe7VFlFHZ9WhSJng.jpeg)' }}>
        <div className="bg-black bg-opacity-50 p-8 rounded-lg">
          <h1 className="text-5xl font-bold mb-4 text-center">Welcome to Our Bookstore</h1>
          <p className="text-xl text-center">Your journey to discover and explore the world of books starts here.</p>
        </div>
      </section>
      
      {/* Section 2: Mission */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <img className="w-full h-full object-cover rounded-lg shadow-lg" src="https://www.nli.ie/sites/default/files/styles/event_large_large/public/2022-10/nli-oct-screen-res-56.jpg?h=78aab1d8&itok=8MZedc6a" alt="Books" />
        </div>
        <div>
          <h2 className="text-3xl font-semibold text-blue-800 mb-4">Our Mission</h2>
          <p className="text-lg text-gray-700 mb-4 text-justify">
            Our mission is to make books accessible to everyone, everywhere, at any time. We believe in the transformative power of reading and aim to foster a love for books across all ages and backgrounds. Whether you're seeking knowledge, entertainment, or inspiration, our carefully curated collection is designed to meet your needs.
          </p>
          <p className="text-lg text-gray-700 text-justify">
            We are committed to providing a seamless and enjoyable shopping experience, from browsing our vast selection to receiving your books at your doorstep. By bridging the gap between readers and the literature they love, we strive to create a global community of empowered and informed individuals.
          </p>
        </div>
      </section>

      {/* Section 3: Vision */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center ">
        <div className="order-last md:order-first">
          <h2 className="text-3xl font-semibold text-blue-800 ">Our Vision</h2>
          <p className="text-lg text-gray-700 mb-4 text-justify">
            Our vision is to empower minds, one book at a time. We envision a world where every individual has access to the knowledge and stories that can help them grow, learn, and succeed. By expanding our reach and constantly evolving our platform, we aspire to be the leading online destination for book lovers around the globe.
          </p>
          <p className="text-lg text-gray-700 text-justify">
            We believe in the importance of fostering literacy and education, and our long-term goal is to contribute to a more informed and enlightened society. Through our commitment to quality, diversity, and accessibility, we hope to inspire a lifelong passion for reading in every corner of the world.
          </p>
        </div>
        <div>
          <img className="w-full h-full object-cover rounded-lg " src="https://www.dorsetonline.co.uk/theme-content/uploads/2020/07/library-books.jpg" alt="Vision" />
        </div>
      </section>

    </div>
  );
};

export default About;
