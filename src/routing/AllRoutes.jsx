import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Contact from '../pages/Contact';

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/contact" element={<Contact />} />
      {/* Add other routes here as needed */}
    </Routes>
  );
};

export default AllRoutes;
