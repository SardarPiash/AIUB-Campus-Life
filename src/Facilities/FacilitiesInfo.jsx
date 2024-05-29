import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { FacilitiesData } from './FacilitiesData';
import { slugify } from '../component/slugify';
import ImageUrl from '../DynamicUrlForImage/ImageUrl';

export default function FacilitiesInfo() {
  const { name } = useParams();
  const retriveTitle = FacilitiesData.find(data => slugify(data.name) === name);

  if (!retriveTitle) {
    return <div>Page not found</div>;
  }

  return (
    <div className="container mx-auto py-8 border border-black border-opacity-10 rounded-md p-1 ">
      <h1 className="text-center text-4xl font-bold mb-8 ">{retriveTitle.name}</h1>
      {retriveTitle.image && (
        <img
          src={ImageUrl(retriveTitle.image)}
          alt={retriveTitle.name}
          className="mx-auto mb-8 w-full h-96 object-cover rounded-lg shadow-md"
        />
      )}
      <div className=' border border-black border-opacity-15 rounded-md pt-3 pb-4 text-justify'>
      <p className="text-center text-lg mb-4"><b>Location:</b> {retriveTitle.location}</p>
      <p className="text-center text-lg mb-4"><b>Short Description:</b> {retriveTitle.short_description}</p>
      <div className="text-left px-8">
        <p>{retriveTitle.long_description}</p>
      </div>
      <div className="text-center mt-8 opacity-70 hover:opacity-90">
        <Link to="/facilities" className="inline-block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300">
          Back
        </Link>
      </div>
      </div>
    </div>
  );
}
