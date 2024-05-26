import React from 'react';

export default function SubmitText({ formData, aiubianID, onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="bg-white shadow-md rounded-2xl overflow-hidden w-full max-w-[600px] p-6 relative">
        <div>
          <h3 className="text-center mb-4 text-3xl font-bold underline underline-offset-1">Thank you for your inquiry!</h3>
          <p className="text-black mb-2">Dear <b>{formData.fullName}</b>,</p>
          {aiubianID ? (
            <p className="text-black mb-2">Your AIUB ID: <b>{formData.aiubId}</b></p>
          ) : (
            <p className="text-black mb-2">Your AIUB ID: <b>N/A</b></p>
          )}
          <p className="text-black mb-2">Your inquiry has been received and is currently being processed. A representative will contact you at <b>{formData.email}</b>.</p>
          <p className="text-black">We appreciate your feedback and will get back to you shortly.</p>
        </div>
        <div className="text-center mt-4">
          <button onClick={onClose} className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600 transition duration-300 w-40 text-center">Close</button>
        </div>
      </div>
    </div>
  );
}
