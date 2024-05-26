import React from 'react'
import { Link } from 'react-router-dom'
import ImageUrl from '../DynamicUrlForImage/ImageUrl'
import { slugify } from '../component/slugify'

export default function GridItem({Data }) {
  return (
    <div>
  <div className="bg-white p-4 rounded-lg shadow-md">
    <img src={ImageUrl(Data.image)} alt="Activity" className="rounded-lg mb-2 h-48 w-full object-cover" />
    <p className="text-center font-semibold">{Data.title}</p>
    <p className="text-center mb-4">{Data.short_description}</p>
    <div className="text-center">
      <Link to={`/homepage/news/${slugify(Data.title)}`} className="inline-block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Read More</Link>
    </div>
  </div>
    </div>
  )
}
