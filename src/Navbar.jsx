import React from 'react'

export default function Navbar() {
  return (
    <div>
        <nav className="sticky top-0 bg-blue-700 z-50">
        <div className="container mx-auto text-white">
            <ul className="flex space-x-6 py-2 px-4 rounded-md justify-center align-middle">
                <li><a href="#" className="hover:text-sky-200">Home</a></li>
                <li><a href="#" className="hover:text-sky-200">Student details</a></li>
                <li><a href="#" className="hover:text-sky-200">Clubs page</a></li>
                <li><a href="#" className="hover:text-sky-200">Facilities page</a></li>
                <li><a href="#" className="hover:text-sky-200">Contact page</a></li>
            </ul>
        </div>
    </nav>
    </div>
  )
}
