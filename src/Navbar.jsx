import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
      <nav className="sticky top-0 bg-blue-700 z-50">
        <div className="container mx-auto text-white">
          <ul className="flex space-x-6 py-2 px-4 rounded-md justify-center align-middle">
            <li>
              <Link to="/" className="hover:text-sky-200">Home</Link>
            </li>
            <li>
              <Link to="/student_activities" className="hover:text-sky-200">Student Activities</Link>
            </li>
            <li>
              <Link to="#" className="hover:text-sky-200">Clubs</Link>
            </li>
            <li>
              <Link to="#" className="hover:text-sky-200">Facilities</Link>
            </li>
            <li>
              <Link to="#" className="hover:text-sky-200">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
