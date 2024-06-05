import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { slugify } from '../component/slugify';
import { GridItemData } from './gridItemdata';
import ImageUrl from '../DynamicUrlForImage/ImageUrl';

export default function HomeBodyNews() {
  const { title } = useParams();
  console.log(title)
  const retriveTitle = GridItemData.find(data => slugify(data.title) === title);
  console.log(retriveTitle)

  if (!retriveTitle) {
    return <div>Page not found</div>;
  }

  return (
    <div className="container min-w-full min-h-full mx-auto py-8 border border-black border-opacity-15 p-2 mt-3 mb-4">
      <h1 className="text-center text-4xl font-bold mb-8">{retriveTitle.title}</h1>
      {retriveTitle.image && (
        <img
          src={ImageUrl(retriveTitle.image)}
          alt={retriveTitle.title}
          className="mx-auto mb-8 w-full h-96 object-cover rounded-lg shadow-md"
        />
      )}
      <p className="text-center text-lg font-bold mb-8">{retriveTitle.short_description}</p>
      <div className="text-left px-8 text-justify font-sans text-base">
        <p>{retriveTitle.description}</p>
      </div>
      <div className="text-center mt-8">
        <Link to="/" className="inline-block px-4 py-2 bg-blue-600 text-white rounded-md opacity-70 hover:opacity-90 transition duration-300">
          Back
        </Link>
      </div>
    </div>
  );
}
