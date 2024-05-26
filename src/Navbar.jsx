import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="sticky top-0 bg-blue-700 z-50">
        <div className="container mx-auto text-white flex justify-around items-center py-2 px-4">
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-sky-200">Home</Link>
            <Link to="/student_activities" className="hover:text-sky-200">Student Activities</Link>
            <Link to="/club" className="hover:text-sky-200">Clubs</Link>
            <Link to="/facilities" className="hover:text-sky-200">Facilities</Link>
            <Link to="/contact" className="hover:text-sky-200">Contact</Link>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="focus:outline-none">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-blue-700`}>
          <ul className="flex flex-col space-y-4 py-4 px-4">
            <li>
              <Link to="/" className="hover:text-sky-200" onClick={toggleMenu}>Home</Link>
            </li>
            <li>
              <Link to="/student_activities" className="hover:text-sky-200" onClick={toggleMenu}>Student Activities</Link>
            </li>
            <li>
              <Link to="/club" className="hover:text-sky-200" onClick={toggleMenu}>Clubs</Link>
            </li>
            <li>
              <Link to="/facilities" className="hover:text-sky-200" onClick={toggleMenu}>Facilities</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-sky-200" onClick={toggleMenu}>Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
