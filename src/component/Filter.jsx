import React, { useState } from "react";

export default function Filter({FilterInfo,FilterMethod}) {
    const [data,setData]=useState("");
    function filterMethod(e){
         FilterMethod(e.target.value)
    }
  return (
    <div className="flex items-center space-x-2">
      <label htmlFor="filter" className="font-semibold text-gray-700">
        Filter by
      </label>
      <select
        id="filter"
        className="border border-gray-300 rounded-lg p-2 focus:border-blue-500 focus:ring-blue-500"
        onChange={filterMethod}
      >
        <option value="{disable}">Select an option</option>
        {FilterInfo.map((data,index)=>(
            <option value={data.name} key={index} >{data.name}</option>
        ))}
      </select>
    </div>
  );
}
