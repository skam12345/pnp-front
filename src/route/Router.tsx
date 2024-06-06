import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeGallery from '../views/home/Home_Gallery';
import PictureGallery from '../views/picture/Picture_Gallery';
import PoemGallery from '../views/poem/Poem_Gallery';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeGallery />} />
        <Route path="/picture" element={<PictureGallery />} />
        <Route path="/poem" element={<PoemGallery />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
