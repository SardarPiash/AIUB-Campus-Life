import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { clubId } from '../contex/AddContexClub';
import { clubData } from './ClubData';

export default function ClubWelcomeMsg() {
    const { selectedClub } = useContext(clubId);
    const club = clubData.find(data => data.id === selectedClub.clubId);
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/club');
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 border border-black ">
            <div className="bg-white rounded-lg shadow-lg w-96 p-6 border border-black border-opacity-15">
                <h2 className="text-2xl font-bold mb-4">Welcome to the Club {club.name}</h2>
                <div className="text-left border border-gray-300 rounded-md p-4">
                    <p><span className="font-bold">AIUB ID:</span> {selectedClub.aiubId}</p>
                    <p><span className="font-bold">Full Name:</span> {selectedClub.fullName}</p>
                    <p><span className="font-bold">Email:</span> {selectedClub.email}</p>
                    <p><span className="font-bold">Phone Number:</span> {selectedClub.phone}</p>
                    <p><span className="font-bold">Blood Group:</span> {selectedClub.bloodGroup}</p>
                    <p><span className="font-bold">Address:</span> {selectedClub.address}</p>
                    <p><span className="font-bold">Department:</span> {selectedClub.department}</p>
                </div>
                <div className="mt-6 text-center">
                    <p className="text-lg font-semibold text-blue-600">
                        Your request to join the club is in progress.
                    </p>
                    <p className="text-gray-600 mt-2">
                        We will notify you once your request has been processed.
                    </p>
                </div>
                <div className="mt-6 flex justify-center">
                    <button
                        onClick={handleLogout}
                        className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-300 opacity-70 hover:opacity-90"
                    >
                        Logout
                    </button>
                </div>
            </div>
        </div>
    );
}
