import React from 'react'
import MedicalCenter from "../assets/health-and-wellness.jpeg"
import { FacilitiesData } from './FacilitiesData'
import ImageUrl from '../DynamicUrlForImage/ImageUrl'
import { Link } from 'react-router-dom'
import { slugify } from '../component/slugify'

export default function Facilities() {
  return (
    <div className="bg-gray-100">
        <main className="container mx-auto my-8">
    <h2 className="text-3xl font-bold text-center mb-8">Facilities</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

      {FacilitiesData.map((data)=>(
        <div className="bg-white rounded-lg shadow-md p-4" key={data.id}>
        <img src={ImageUrl(data.image)} alt="AIUB Medical Center" className="w-full h-48 object-cover rounded-t-lg" />
        <div className="p-4">
          <h3 className="text-xl font-bold mb-2">{data.name}</h3>
          <p>{data.short_description}</p>
          <Link to={`/facilities/${slugify(data.name)}` } className="inline-block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"><button>Read more</button></Link>
          </div>
      </div>
      ))}
    </div>
  </main>
    </div>
  )
}
