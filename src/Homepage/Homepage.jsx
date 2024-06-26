import React, { useEffect, useState } from 'react';
import aiubGolla from '../assets/aiub_golla.jpg';
import csDep from '../assets/cs_dep.png';
import poylaBoishakh from '../assets/poyla_boishakh.jpg';
import studentRag from '../assets/student_rag.jpeg';
import umbrellaCanteen from '../assets/umbrella_canteen.jpg';
import boishakhiUllash2 from '../assets/boishakhi_ullash_2.jpg';
import { landingData } from './homepagedata';
import ImageUrl from '../DynamicUrlForImage/ImageUrl';
import BodyImage from './BodyImage';
import '../App.css';
import { Link } from 'react-router-dom';
import { slugify } from '../component/slugify';
import GridItem from './GridItem';
import ImageSlider from './ImageSlider';
import { GridItemData } from './gridItemdata';

const slides = [
  aiubGolla,
  csDep,
  poylaBoishakh,
  studentRag,
  umbrellaCanteen,
  boishakhiUllash2,
];

export default function Homepage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleScroll = () => {
    const fadeInElements = document.querySelectorAll('.fade-in-left, .fade-in-right');
    fadeInElements.forEach((element) => {
      const rect = element.getBoundingClientRect();
      if (rect.top <= (window.innerHeight || document.documentElement.clientHeight)) {
        element.classList.add('fade-in');
      }
    });
  };

  useEffect(() => {
    // Run the scroll handler immediately to catch elements in view on initial load
    handleScroll();

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <main className="container mx-auto py-8">
      <div className='border border-black p-1 border-opacity-10 rounded-md'>
        <h1 className="text-center text-4xl font-bold mb-8">Welcome to AIUB Campus Life!</h1>
        <div className="flex justify-center mb-8">
          <div className="relative w-full max-w-4xl">
            {slides.map((slide, index) => (
              <span key={index}>
                <ImageSlider Src={slide} alt={`Campus Life ${index + 1}`} Class={`h-96 w-full object-cover rounded-lg shadow-md slide ${currentSlide === index ? 'active' : ''}`} />
              </span>
            ))}
          </div>
        </div>
         
         
        {landingData.map((data, index) => (
          <Link to={`/homepage/${slugify(data.title)}`} key={index}>
            <div className="container mx-auto ">
              <BodyImage
                key={data.id}
                imgSrc={ImageUrl(data.image)}
                title={data.title}
                text={data.description}
                imgPosition={index % 2 === 0 ? 'left' : 'right'}
              />
            </div>
          </Link>
        ))}
</div>
<div className='border border-black p-1 border-opacity-10 rounded-md mt-4'>
        <h2 className="text-center text-3xl font-bold mt-6">Campus Life</h2>
        <div className="min-w-full min-h-full container mx-auto grid md:grid-cols-4 gap-4 p-4 ">
          {GridItemData.map((data, index) => (
            <GridItem
              key={index}
              Data={data}
            />
          ))}
        </div>
        </div>
      </main>
    </div>
    
  );
}
