import React from "react";

export default function DetailsModal({ ID, ActivitiesData, onClose }) {
  const filteredData = ActivitiesData.find((data) => data.id === ID);

  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-50 bg-black/60 backdrop-blur-sm flex justify-center items-center">
      <div className="bg-white shadow-md rounded-2xl overflow-hidden w-full max-w-[600px] p-4 relative">
        {filteredData ? (
          <>
            <h2 className="text-3xl font-bold mb-4">{filteredData.Title}</h2>
            <span className="block text-base text-gray-700 mb-3">
             <b> Organizer: </b>{filteredData.Organizer}
            </span>
            <span className="block text-base text-gray-700 mb-3">
            <b>  Date: </b>{filteredData.Date}
            </span>
            <span className="block text-base text-gray-700 mb-3">
            <b> Location: </b>{filteredData.Location}
            </span>
            <p className="text-sm lg:text-base mb-4">
            <b> Description: </b>{filteredData.Description}
            </p>
          </>
        ) : (
          <p className="text-sm lg:text-base mb-4">Activity not found.</p>
        )}
        <button
          onClick={onClose}
          className="mt-4 bg-red-500 text-white rounded-lg px-4 py-2 hover:bg-red-600 transition duration-300 w-40 text-center"
        >
          Close
        </button>
      </div>
    </div>
  );
}
