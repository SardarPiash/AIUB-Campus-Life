import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { LogInData } from "../component/logindata";

export default function JoinClub() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    bloodGroup: "",
    address: "",
    department: "",
  });
  const [errors, setErrors] = useState({});
  const nevigation = useNavigate();
  const location = useLocation();
  const aiub_id = location.state?.aiubId;

  useEffect(() => {
    try {
      const token = localStorage.getItem("token");
      const user = LogInData.find((data) => data.AIUB_ID === aiub_id);

      if (!token || token !== user.token) {
        nevigation("/login");
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  /// form data state handle....
  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  /// handle form submit....
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted successfully", formData);
    }
  };

  /// validate form data.....
  const validateForm = () => {
    let newErrors = {};

    if (!formData.fullName) {
      newErrors.fullName = "Enter your full name.";
    }
    if (!formData.email) {
      newErrors.email = "Enter your email.";
    }
    if (!formData.phoneNumber) {
      newErrors.phoneNumber = "Enter your phone number.";
    }
    if (!formData.bloodGroup) {
      newErrors.bloodGroup = "Enter your blood group.";
    }
    if (!formData.address) {
      newErrors.address = "Enter your address.";
    }
    if (!formData.department) {
      newErrors.department = "Enter your department.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg w-96 p-6">
        <h2 className="text-2xl font-bold mb-4">Enter Your Details</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4 text-left">
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-gray-700"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            {errors.fullName && (
              <div className="text-red-500">{errors.fullName}</div>
            )}
          </div>
          <div className="mb-4 text-left">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            {errors.email && <div className="text-red-500">{errors.email}</div>}
          </div>
          <div className="mb-4 text-left">
            <label
              htmlFor="phoneNumber"
              className="block text-sm font-medium text-gray-700"
            >
              Phone Number
            </label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            {errors.phoneNumber && (
              <div className="text-red-500">{errors.phoneNumber}</div>
            )}
          </div>
          <div className="mb-4 text-left">
            <label
              htmlFor="bloodGroup"
              className="block text-sm font-medium text-gray-700"
            >
              Blood Group
            </label>
            <input
              type="text"
              id="bloodGroup"
              name="bloodGroup"
              value={formData.bloodGroup}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            {errors.bloodGroup && (
              <div className="text-red-500">{errors.bloodGroup}</div>
            )}
          </div>
          <div className="mb-4 text-left">
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-700"
            >
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            {errors.address && (
              <div className="text-red-500">{errors.address}</div>
            )}
          </div>
          <div className="mb-4 text-left">
            <label
              htmlFor="department"
              className="block text-sm font-medium text-gray-700"
            >
              Department
            </label>
            <input
              type="text"
              id="department"
              name="department"
              value={formData.department}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            {errors.department && (
              <div className="text-red-500">{errors.department}</div>
            )}
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md ml-2 hover:bg-blue-600 transition duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
