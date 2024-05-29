import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { landingData } from './homepagedata';
import { slugify } from '../component/slugify';
import ImageUrl from '../DynamicUrlForImage/ImageUrl';

export default function HomeBodyInfo() {
  const { title } = useParams();

  const retriveTitle = landingData.find(data => slugify(data.title) === title);
  if (!retriveTitle) {
    return <div>Page not found</div>;
  }

  return (
    <div className="container mx-auto py-8 border">
      <h1 className="text-center text-4xl font-bold mb-8">{retriveTitle.title}</h1>
      <img src={ImageUrl(retriveTitle.image)} alt={retriveTitle.title} className="mx-auto mb-8" />
      <div className="text-left px-8 text-sm font-arial text-justify">
        <p>{retriveTitle.paragraph}</p>
      </div>
      <div className="text-center mt-8">
        <Link to="/">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300">
            Back
          </button>
        </Link>
      </div>
    </div>
  );
}
