"use client"

import { createContext, useState, useContext } from 'react';

const ImageContext = createContext();

export const useImageContext = () => useContext(ImageContext);

export const ImageProvider = ({ children }) => {
  const [image, setImage] = useState(null);

  const setImageData = (newImage) => {
    setImage(newImage);
  };

  return (
    <ImageContext.Provider value={{ image, setImageData }}>
      {children}
    </ImageContext.Provider>
  );
};
