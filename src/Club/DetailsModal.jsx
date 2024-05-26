import React from 'react';
import ImageUrl from '../DynamicUrlForImage/ImageUrl';

export default function DetailsModal({ ID, clubData, onClose }) {
    const filteredData = clubData.find((data) => data.id === ID);
    // console.log(ID)
    // console.log(clubData)

    return (
        <div className="fixed top-0 left-0 w-screen h-screen z-50 bg-black/60 backdrop-blur-sm flex justify-center items-center">
            <div className="bg-white shadow-md rounded-2xl overflow-hidden w-full max-w-[600px] p-4 relative">
                {filteredData ? (
                    <>
                    <img src={ImageUrl(filteredData.image)} className="w-full h-48 object-cover rounded-lg mb-4"/>
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
                    </>
                ) : (
                    <p className="text-sm lg:text-base mb-4">Club details not found.</p>
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
