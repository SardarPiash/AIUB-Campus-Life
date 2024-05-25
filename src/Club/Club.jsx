import React from 'react'

export default function Club() {
  return (
    <div className="bg-gray-100">
        <main className="container mx-auto mt-8">
        <div className="flex justify-between items-center mb-4">
            <div>
                <label htmlFor="filter" className="block text-gray-700">Filter by</label>
                <input id="filter" type="text" className="border border-gray-300 p-2 rounded-md w-full" />
            </div>
            <div>
                <input type="text" className="border border-gray-300 p-2 rounded-md" placeholder="Search" />
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md ml-2">Search</button>
            </div>
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
                    <tr className="border-b">
                        <td className="py-2 px-4"><a href="#" className="text-blue-500">FBA Events and Students' Engagements</a></td>
                        <td className="py-2 px-4"><button className="bg-gray-500 text-white px-4 py-2 rounded-md">Join now</button></td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                        <td className="py-2 px-4"><a href="#" className="text-blue-500">FBA Events and Students' Engagements</a></td>
                        <td className="py-2 px-4"><button className="bg-gray-500 text-white px-4 py-2 rounded-md">Join now</button></td>
                    </tr>
                    <tr className="border-b">
                        <td className="py-2 px-4"><a href="#" className="text-blue-500">FBA Events and Students' Engagements</a></td>
                        <td className="py-2 px-4"><button className="bg-gray-500 text-white px-4 py-2 rounded-md">Join now</button></td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                        <td className="py-2 px-4"><a href="#" className="text-blue-500">FBA Events and Students' Engagements</a></td>
                        <td className="py-2 px-4"><button className="bg-gray-500 text-white px-4 py-2 rounded-md">Join now</button></td>
                    </tr>
                    <tr className="border-b">
                        <td className="py-2 px-4"><a href="#" className="text-blue-500">FBA Events and Students' Engagements</a></td>
                        <td className="py-2 px-4"><button className="bg-gray-500 text-white px-4 py-2 rounded-md">Join now</button></td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                        <td className="py-2 px-4"><a href="#" className="text-blue-500">FBA Events and Students' Engagements</a></td>
                        <td className="py-2 px-4"><button className="bg-gray-500 text-white px-4 py-2 rounded-md">Join now</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </main>
    </div>
  )
}
