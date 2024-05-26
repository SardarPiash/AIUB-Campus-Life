import React, { useState } from 'react';
import SubmitText from './SubmitText'; // Adjust the import path as necessary

export default function InquiryInput() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    aiubian: '',
    aiubId: '',
    feedback: ''
  });
  const [errors, setErrors] = useState({});
  const [aiubianID, setAiubianID] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    if (name === 'aiubian') {
      setAiubianID(value === 'yes');
    }
  };

  const validateForm = () => {
    let newErrors = {};

    if (!formData.fullName) {
      newErrors.fullName = "Enter your full name.";
    }

    if (!formData.email) {
      newErrors.email = "Enter your email.";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = "Enter a valid email.";
      }
    }

    if (!formData.aiubian) {
      newErrors.aiubian = "Please select an option.";
    }

    if (aiubianID && !formData.aiubId) {
      newErrors.aiubId = "Enter your AIUB ID.";
    }

    if (!formData.feedback) {
      newErrors.feedback = "Enter your inquiries or feedback.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setSubmitted(true);
    }
  };

  const handleClose = () => {
    setSubmitted(false);
    setFormData({
      fullName: '',
      email: '',
      aiubian: '',
      aiubId: '',
      feedback: ''
    });
  };

  return (
    <div>
      {submitted ? (
        <SubmitText formData={formData} aiubianID={aiubianID} onClose={handleClose} />
      ) : (
        <div className="bg-gray-200 p-8 rounded-lg shadow-md max-w-lg mx-auto">
          <h3 className="text-center mb-4 font-bold underline underline-offset-1">Have you any inquiries or feedback?</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-4 text-left">
              <label htmlFor="fullName" className="block text-black mb-1">Full Name:</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                className="w-full p-1 border rounded border-black bg-gray-100"
                value={formData.fullName}
                onChange={handleChange}
              />
              {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
            </div>
            <div className="mb-4 text-left">
              <label htmlFor="email" className="block text-black mb-1">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-1 border rounded border-black bg-gray-100"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>
            <div className="mb-4 text-left">
              <label className="block text-black mb-1">Are you an Aiubian?</label>
              <div>
                <label className="inline-flex items-start">
                  <input
                    type="radio"
                    name="aiubian"
                    value="yes"
                    className="form-radio"
                    checked={formData.aiubian === 'yes'}
                    onChange={handleChange}
                  />
                  <span className="ml-2">Yes</span>
                </label>
                <label className="inline-flex items-center ml-6">
                  <input
                    type="radio"
                    name="aiubian"
                    value="no"
                    className="form-radio"
                    checked={formData.aiubian === 'no'}
                    onChange={handleChange}
                  />
                  <span className="ml-2">No</span>
                </label>
              </div>
              {errors.aiubian && <p className="text-red-500 text-sm">{errors.aiubian}</p>}
            </div>
            {aiubianID && (
              <div className="mb-4 text-left">
                <label htmlFor="aiubId" className="block text-black mb-1">AIUB ID:</label>
                <input
                  type="text"
                  id="aiubId"
                  name="aiubId"
                  className="w-full p-1 border rounded border-black bg-gray-100"
                  value={formData.aiubId}
                  onChange={handleChange}
                />
                {errors.aiubId && <p className="text-red-500 text-sm">{errors.aiubId}</p>}
              </div>
            )}
            <div className="mb-4 text-left">
              <label htmlFor="feedback" className="block text-black mb-1">Inquiries or Feedback:</label>
              <textarea
                id="feedback"
                name="feedback"
                className="w-full p-1 border rounded border-black bg-gray-100 h-24"
                value={formData.feedback}
                onChange={handleChange}
              ></textarea>
              {errors.feedback && <p className="text-red-500 text-sm">{errors.feedback}</p>}
            </div>
            <div className="text-center">
              <button type="submit" className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600">Submit</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
