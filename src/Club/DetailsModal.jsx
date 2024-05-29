import React, { useContext } from "react";
import ImageUrl from "../DynamicUrlForImage/ImageUrl";
import { clubId } from "../contex/AddContexClub";
import { Link } from "react-router-dom";

export default function DetailsModal({ ID, clubData, onClose }) {
  const filteredData = clubData.find((data) => data.id === ID);
  const { selectedClub, setSelectedClub } = useContext(clubId);

  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-50 bg-black/60 backdrop-blur-sm flex justify-center items-center ">
      <div className="bg-white shadow-md rounded-2xl overflow-hidden w-full max-w-[600px] p-4 relative">
        {filteredData ? (
          <div className="border border-black border-opacity-15 p-4 rounded-lg">
            <img
              src={ImageUrl(filteredData.image)}
              alt={filteredData.name}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <div className="border border-black border-opacity-10 rounded-md px-2 py-6">
            <h2 className="text-3xl font-bold mb-4">{filteredData.name}</h2>
            <span className="block text-base text-gray-700 mb-3 text-left">
              <b>Date Established:</b> {filteredData.Date}
            </span>
            <span className="block text-base text-gray-700 mb-3 text-left">
              <b>Current Total Members:</b> {filteredData.currentTotalMembers}
            </span>
            <span className="block text-base text-gray-700 mb-3 text-left">
              <b>Total Events Organized:</b> {filteredData.totalEventsOrganized}
            </span>
            <span className="block text-base text-gray-700 mb-3 text-left">
              <b>Objective:</b> {filteredData.objective}
            </span>
            <div className="flex justify-between mt-5 ml-3 mr-3 ">
              <button
                onClick={onClose}
                className="bg-red-500 text-white rounded-lg px-4 py-2 hover:bg-red-600 transition duration-300 w-40 text-center opacity-70 hover:opacity-90"
              >
                Close
              </button>
              <Link to="/login">
                <button
                  className="bg-gray-500 text-white  px-4 py-2 rounded-md opacity-70 hover:opacity-90 transition duration-300"
                  onClick={() =>
                    setSelectedClub({
                      ...selectedClub,
                      clubId: ID,
                    })
                  }
                >
                  Join now
                </button>
              </Link>
            </div>
            </div>
          </div>
        ) : (
          <p className="text-sm lg:text-base mb-4">Club details not found.</p>
        )}
      </div>
    </div>
  );
}
