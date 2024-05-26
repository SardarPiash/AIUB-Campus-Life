import React, { useState } from 'react';
import { studentActivitiesData } from './data';
import Filter from '../component/Filter';
import Search from '../component/Search';
import { FilterInfo } from './data';
import DetailsModal from './DetailsModal';

export default function Student_activities() {
  const [activitiesData, setActivitiesData] = useState(studentActivitiesData);
  const [originalInfo, setOriginalInfo] = useState(studentActivitiesData);
  const [openDetailsModal, setOpenDetailsModal] = useState(false);
  const [contentID, setContentID] = useState(null);

  ///filter function...............
  function handleFilter(filterValue) {
    let filteredData = [...studentActivitiesData];

    if (filterValue === "") {
      setActivitiesData(filteredData);
    } else if (filterValue === "Filter by Old_Date") {
      filteredData.sort((a, b) => new Date(a.Date) - new Date(b.Date));
      setActivitiesData(filteredData);
    } else if (filterValue === "Filter by New_Date") {
      filteredData.sort((a, b) => new Date(b.Date) - new Date(a.Date));
      setActivitiesData(filteredData);
    }
  }

  ///function for search based on Title and Organization......
  function handleSearch(text) {
    if(text === ""){
      setActivitiesData(originalInfo);
    }else{
      const searchTextLower = text.toLowerCase();
      const filteredData = studentActivitiesData.filter(
        (data) =>
          data.Title.toLowerCase().includes(searchTextLower)
      );
      setActivitiesData(filteredData);
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
    <div>
      {openDetailsModal && (
        <DetailsModal ID={contentID} ActivitiesData={studentActivitiesData} onClose={handleModalOff} />
      )}
      <div className="bg-gray-200">
        <main className="p-8">
          <div className="flex justify-between items-center mb-4">
            <Filter FilterInfo={FilterInfo} FilterMethod={handleFilter} />
            <Search searchText={handleSearch} />
          </div>

          <h2 className="text-2xl font-bold mb-4 text-center">Student Activities</h2>

          <div className="bg-white rounded-lg shadow">
            <div className="grid grid-cols-3 bg-gray-300 p-2 rounded-t-lg">
              <div className="font-bold text-left">Activities</div>
              <div className="font-bold text-left">Organizer</div>
              <div className="font-bold">Date</div>
            </div>
            <div className="divide-y divide-gray-200">
              {activitiesData.map((data) => (
                <div className="grid grid-cols-3 p-2 hover:bg-gray-100" key={data.id} onClick={() => handleDetailsModal(data.id)}>
                  <p className="text-blue-500 hover:underline text-left">{data.Title}</p>
                  <div className="text-left">{data.Organizer}</div>
                  <div>{data.Date}</div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
