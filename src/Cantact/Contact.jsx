import React from 'react'

export default function Contact() {
  return (
    <div className="bg-gray-100">
        <main className="container mx-auto my-8">
    <h2 className="text-3xl font-bold text-center mb-8">Contact</h2>

    <div className="bg-gray-200 p-8 rounded-lg shadow-md max-w-lg mx-auto">
      <p className="text-center mb-4">Have you any inquiries or feedback?</p>
      <form>
        <div className="mb-4">
          <label htmlFor="fullName" className="block text-gray-700">Full Name:</label>
          <input type="text" id="fullName" className="w-full p-2 border rounded" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">Email:</label>
          <input type="email" id="email" className="w-full p-2 border rounded" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Are you an Aiubian?</label>
          <div>
            <label className="inline-flex items-center">
              <input type="radio" name="aiubian" value="yes" className="form-radio" />
              <span className="ml-2">Yes</span>
            </label>
            <label className="inline-flex items-center ml-6">
              <input type="radio" name="aiubian" value="no" className="form-radio" />
              <span className="ml-2">No</span>
            </label>
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="aiubId" className="block text-gray-700">AIUB ID:</label>
          <input type="text" id="aiubId" className="w-full p-2 border rounded" />
        </div>
        <div className="mb-4">
          <label htmlFor="feedback" className="block text-gray-700">Inquiries or Feedback:</label>
          <textarea id="feedback" className="w-full p-2 border rounded h-24"></textarea>
        </div>
        <div className="text-center">
          <button type="submit" className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600">Submit</button>
        </div>
      </form>
    </div>
  </main>
    </div>
  )
}
