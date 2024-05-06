import React, { useState } from 'react';
import './Slider.scss'; // Import CSS file

interface Props{
    images: string[],
    name: string
}
const Slider : React.FC<Props> = ({ images, name }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="slider">
      <button className="prev" onClick={prevImage}>❮</button>
        <img src={images[currentImageIndex]} alt={name}/>
      <button className="next" onClick={nextImage}>❯</button>
    </div>
  );
};

export default Slider;
