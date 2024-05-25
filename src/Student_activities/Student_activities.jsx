import React from 'react'

export default function Student_activities() {
  return (
    <div>
        <div className="bg-gray-200">
        <main className="p-8">
        <div className="flex justify-between items-center mb-4">
            <div className="flex items-center space-x-2">
                <label htmlFor="filter" className="font-semibold">Filter by</label>
                <input type="text" id="filter" className="border border-gray-400 rounded p-1" />
            </div>
            <div>
                <input type="text" className="border border-gray-400 rounded p-1" />
                <button className="bg-blue-500 text-white rounded p-1 ml-2">Search</button>
            </div>
        </div>

        <h2 className="text-2xl font-bold mb-4 text-center">Student Activities</h2>

        <div className="bg-white rounded-lg shadow">
            <div className="grid grid-cols-3 bg-gray-300 p-2 rounded-t-lg">
                <div className="font-bold">Activities</div>
                <div className="font-bold">Organizer</div>
                <div className="font-bold">Date</div>
            </div>
            <div className="divide-y divide-gray-200">
                <div className="grid grid-cols-3 p-2 hover:bg-gray-100">
                    <a href="#" className="text-blue-500 hover:underline">FBA Events and Students' Engagements</a>
                    <div>FBA</div>
                    <div>23-03-2024</div>
                </div>
                <div className="grid grid-cols-3 p-2 hover:bg-gray-100">
                    <a href="#" className="text-blue-500 hover:underline">FBA Events and Students' Engagements</a>
                    <div>FBA</div>
                    <div>23-03-2024</div>
                </div>
                <div className="grid grid-cols-3 p-2 hover:bg-gray-100">
                    <a href="#" className="text-blue-500 hover:underline">FBA Events and Students' Engagements</a>
                    <div>FBA</div>
                    <div>23-03-2024</div>
                </div>
                <div className="grid grid-cols-3 p-2 hover:bg-gray-100">
                    <a href="#" className="text-blue-500 hover:underline">FBA Events and Students' Engagements</a>
                    <div>FBA</div>
                    <div>23-03-2024</div>
                </div>
                <div className="grid grid-cols-3 p-2 hover:bg-gray-100">
                    <a href="#" className="text-blue-500 hover:underline">FBA Events and Students' Engagements</a>
                    <div>FBA</div>
                    <div>23-03-2024</div>
                </div>
                <div className="grid grid-cols-3 p-2 hover:bg-gray-100">
                    <a href="#" className="text-blue-500 hover:underline">FBA Events and Students' Engagements</a>
                    <div>FBA</div>
                    <div>23-03-2024</div>
                </div>
            </div>
        </div>
    </main>
        </div>
    </div>
  )
}
