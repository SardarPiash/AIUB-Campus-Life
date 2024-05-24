import React, { useEffect, useState } from 'react';
import aiubGolla from '../assets/aiub_golla.jpg';
import csDep from '../assets/cs_dep.png';
import poylaBoishakh from '../assets/poyla_boishakh.jpg';
import studentRag from '../assets/student_rag.jpeg';
import umbrellaCanteen from '../assets/umbrella_canteen.jpg';
import boishakhiUllash2 from '../assets/boishakhi_ullash_2.jpg';
import '../App.css';

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

  useEffect(() => {
    const handleScroll = () => {
      const fadeInElements = document.querySelectorAll('.fade-in-left, .fade-in-right');
      fadeInElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top <= (window.innerHeight || document.documentElement.clientHeight)) {
          element.classList.add('fade-in');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <main className="container mx-auto py-8">
        <h1 className="text-center text-4xl font-bold mb-8">Welcome to AIUB Campus Life!</h1>
        <div className="flex justify-center mb-8">
          <div className="relative w-full max-w-4xl">
            {slides.map((slide, index) => (
              <img
                key={index}
                src={slide}
                alt={`Campus Life ${index + 1}`}
                className={`h-96 w-full object-cover rounded-lg shadow-md slide ${currentSlide === index ? 'active' : ''}`}
              />
            ))}
          </div>
        </div>

        <div className="container mx-auto">
          <Activity
            imgSrc={boishakhiUllash2}
            title="Get Involved with AIUB Student Activities!"
            text="At AIUB, student life goes beyond the classroom. Our diverse range of student activities and departmental events offers countless opportunities to get involved, learn, and grow. Whether you're studying accounting, finance, marketing, or any other field, there are events and engagements tailored just for you. Join us and be a part of a vibrant community that fosters learning, innovation, and leadership. Dive into the dynamic world of AIUB student activities today!"
            imgPosition="left"
          />
          <Activity
            imgSrc={boishakhiUllash2}
            title="Get Involved with AIUB Student Activities!"
            text="At AIUB, student life goes beyond the classroom. Our diverse range of student activities and departmental events offers countless opportunities to get involved, learn, and grow. Whether you're studying accounting, finance, marketing, or any other field, there are events and engagements tailored just for you. Join us and be a part of a vibrant community that fosters learning, innovation, and leadership. Dive into the dynamic world of AIUB student activities today!"
            imgPosition="right"
          />
          <Activity
            imgSrc={boishakhiUllash2}
            title="Experience the Best of AIUB Campus Life!"
            text="At AIUB, our campus is more than just a place to learn—it's a community where students can thrive. From state-of-the-art facilities and diverse student clubs to exciting cultural and sports activities, AIUB offers endless opportunities to explore your passions and make lifelong memories. Join one of our many student organizations, participate in engaging events, and enjoy modern amenities that support your academic and personal growth. Discover the vibrant and dynamic campus life at AIUB today!"
            imgPosition="left"
          />
        </div>

        <h2 className="text-center text-3xl font-bold my-8">Campus Life</h2>
        <div className="container mx-auto grid md:grid-cols-4 gap-4 p-4">
          {Array(8).fill().map((_, index) => (
            <GridItem
              key={index}
              imgSrc={boishakhiUllash2}
              title="Headline"
              text="At AIUB, our campus is more than just a place to learn—it's a community."
            />
          ))}
        </div>
      </main>
    </div>
  );
}

const Activity = ({ imgSrc, title, text, imgPosition }) => (
  <div className="flex p-6 rounded-lg shadow-md space-x-6">
    {imgPosition === 'left' && (
      <div className="w-1/3 fade-in-left">
        <img src={imgSrc} alt="Student Activities" className="rounded-lg w-full h-48 object-cover" />
      </div>
    )}
    <div className={`w-2/3 p-4 rounded-lg shadow-inner ${imgPosition === 'left' ? 'fade-in-right' : 'fade-in-left'}`}>
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="text-gray-700">{text}</p>
    </div>
    {imgPosition === 'right' && (
      <div className="w-1/3 fade-in-right">
        <img src={imgSrc} alt="Student Activities" className="rounded-lg w-full h-48 object-cover" />
      </div>
    )}
  </div>
);

const GridItem = ({ imgSrc, title, text }) => (
  <div className="bg-white p-4 rounded-lg shadow-md">
    <img src={imgSrc} alt="Activity" className="rounded-lg mb-2 h-48 w-full object-cover" />
    <p className="text-center font-semibold">{title}</p>
    <p className="text-center mb-4">{text}</p>
    <div className="text-center">
      <a href="#" className="inline-block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Read More</a>
    </div>
  </div>
);
