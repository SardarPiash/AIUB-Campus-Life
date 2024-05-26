import React, { useState } from 'react';
import { LogInData } from './logindata';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [formData, setFormData] = useState({
    aiubId: "",
    password: ""
  });
  const [errors, setErrors] = useState({});
  const navigation =useNavigate()

  /// form data state handle....
  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  /// handle form submit....
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const user = LogInData.find((data) => data.AIUB_ID === formData.aiubId && data.password === formData.password);
      if (user) {
        localStorage.setItem('token', user.token);
        navigation('/join-club', { state: { aiubId: formData.aiubId } })
      } else {
        setErrors({ form: "Invalid AIUB ID or Password" });
      }
    }
  };

  /// validate form data.....
  const validateForm = () => {
    let newErrors = {};

    if (!formData.aiubId) {
      newErrors.aiubId = "Enter your AIUB ID.";
    }

    if (!formData.password) {
      newErrors.password = "Enter your password.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg w-96 p-6">
        <h2 className="text-2xl font-bold mb-4">Log in with your AIUB credentials</h2>
        <form onSubmit={handleSubmit}>
          {errors.form && <div className="text-red-500 mb-4">{errors.form}</div>}
          <div className="mb-4">
            <label htmlFor="aiubId" className="block text-sm font-medium text-gray-700 text-left">
              AIUB ID
            </label>
            <input
              type="text"
              id="aiubId"
              name="aiubId"
              value={formData.aiubId}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            {errors.aiubId && <div className="text-red-500">{errors.aiubId}</div>}
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 text-left">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            {errors.password && <div className="text-red-500">{errors.password}</div>}
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
            >
              Log In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
