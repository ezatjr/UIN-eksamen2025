import React, { useState, useEffect } from 'react';

const HomePage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="h-[70vh] flex flex-col justify-center items-center bg-gradient-to-r from-purple-700 to-indigo-700 text-white">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
          Welcome to Billettlyst
        </h1>
        <p className="text-xl text-center max-w-xl">
          Discover and book tickets to amazing events around the world.
        </p>
      </section>

      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Featured Events</h2>
        <p className="text-gray-600">Coming soon...</p>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Explore by City</h2>
          <p className="text-gray-600">City event listings will appear here.</p>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Browse by Category</h2>
        <p className="text-gray-600">Categories like music, sports, and theater coming soon.</p>
      </section>
    </div>
  );
};

export default HomePage;
