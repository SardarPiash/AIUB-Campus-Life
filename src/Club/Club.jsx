import React, { useContext, useState } from 'react';
import { clubData, FilterInfo } from './ClubData';
import Filter from '../component/Filter';
import { Link } from 'react-router-dom';
import Search from '../component/Search';
import DetailsModal from './DetailsModal';
import Login from '../component/Login';
import { clubId } from '../contex/AddContexClub';

export default function Club() {
    const [clubInfo, setClubInfo] = useState(clubData);
    const [originalClubInfo, setOriginalClubInfo] = useState(clubData);
    const [openDetailsModal, setOpenDetailsModal] = useState(false);
    const [contentID, setContentID] = useState(null);
    const [logInModal,setLoginModal] = useState(false)
    const [joinModal, setJoinModal] = useState(false);
    const {setSelectedClub,selectedClub} = useContext(clubId)

    ///filter function...............
    function handleFilter(filterValue) {
        let filteredData = [...originalClubInfo];

        if (filterValue === "") {
            setClubInfo(filteredData);
        } else if (filterValue === "Filter by Old_Club") {
            filteredData.sort((a, b) => new Date(a.Date) - new Date(b.Date));
            setClubInfo(filteredData);
        } else if (filterValue === "Filter by New_Club") {
            filteredData.sort((a, b) => new Date(b.Date) - new Date(a.Date));
            setClubInfo(filteredData);
        }
    }

    ///function for search based on Title and objective......
    function handleSearch(text) {
        if (text === "") {
            setClubInfo(originalClubInfo);
        } else {
            const searchTextLower = text.toLowerCase();
            const filteredData = originalClubInfo.filter(
                (data) => data.name.toLowerCase().includes(searchTextLower)
            );
            setClubInfo(filteredData);
        }
    }

      ///open modal...
  function handleDetailsModal(ID) {
    setContentID(ID);
    setOpenDetailsModal(true);
  }

  ///close modal.......
  function handleModalOff() {
    setOpenDetailsModal(false);
    setContentID(null);
  }



    return (
      
        <div className="bg-gray-100 w-full">
          {openDetailsModal && (
        <DetailsModal ID={contentID} clubData={originalClubInfo} onClose={handleModalOff} />
      )}
      <main className="container mx-auto pt-8">
      <div className="flex justify-between p-3 items-center mb-4 border border-black rounded-md border-opacity-15">
          <Filter  FilterInfo={FilterInfo} FilterMethod={handleFilter} />
          <Search searchText={handleSearch} />
      </div>
      <h2 className="text-center text-2xl font-bold mb-4">Clubs</h2>
      <div className="bg-white shadow-md rounded-md overflow-hidden">
          <table className="min-w-full">
              <thead className="bg-gray-200">
                  <tr>
                      <th className="py-2 px-4 text-left text-gray-700">Club Name</th>
                      <th className="py-2 px-4 text-left text-gray-700">Action</th>
                  </tr>
              </thead>
              <tbody>

              {clubInfo.length > 0 ? clubInfo.map((data) => (
    <tr className="border-b" key={data.id}>
        <td className="py-2 px-4" onClick={() => handleDetailsModal(data.id)}>
            <p className="text-blue-500 text-left">
                {data.name}
            </p>
        </td>
        <td className="py-2 px-4">
            <Link to='/login'>
                <button className="bg-gray-500 text-white px-4 py-2 rounded-md" onClick={() => setSelectedClub({
                    ...selectedClub,
                    clubId: data.id
                })}>
                    Join now
                </button>
            </Link>
        </td>
    </tr>
)) : (
    <tr>
        <td colSpan="2" className="py-2 px-4 text-center text-gray-500">
            No Club Found!
        </td>
    </tr>
)}

              </tbody>
          </table>
      </div>
  </main>
            
        </div>
    );
}
