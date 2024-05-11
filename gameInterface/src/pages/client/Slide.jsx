import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './style.css';

function Slide() {
  
  const sliderRef = useRef(null); 

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // Hide default arrows
    autoplay: true, // Autoplay slides
    autoplaySpeed: 5000, // Autoplay interval in milliseconds
  };

  return (
    <div className="mx-auto mt-7 max-w-screen-xl w-9/14 relative">
      <Slider {...settings} className="rounded-lg overflow-hidden" ref={sliderRef}>
        <div className="w-full slide-item">
          <img src="https://cdn.wallpaper.tn/large/4K-Wallpaper-Gaming-88684.jpg" alt="Photo 1" className="w-full h-full object-cover" />
        </div>
        <div className="w-full slide-item">
          <img src="https://cdn.wallpaper.tn/large/4K-Wallpaper-Gaming-88684.jpg" alt="Photo 2" className="w-full h-full object-cover" />
        </div>
        <div className="w-full slide-item">
          <img src="https://cdn.wallpaper.tn/large/4K-Wallpaper-Gaming-88684.jpg" alt="Photo 3" className="w-full h-full object-cover" />
        </div>
      </Slider>
      <button className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-lg z-10 bg-gray-800 rounded-full p-2 w-11 h-11" onClick={() => sliderRef.current.slickPrev()}>
        &lt;
      </button>
      <button className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white text-lg z-10 bg-gray-800 rounded-full p-2 w-11 h-11" onClick={() => sliderRef.current.slickNext()}>
        &gt;
      </button>
    </div>
  );
}

export default Slide;
