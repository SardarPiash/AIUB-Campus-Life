import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { LogInData } from "../component/logindata";
import { clubId } from "../contex/AddContexClub";
import { clubData } from "./ClubData";

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
  const navigate = useNavigate();
  const location = useLocation();
  const aiub_id = location.state?.aiubId;
  const { setSelectedClub, selectedClub } = useContext(clubId);
  const desiredClub = clubData.find(data => data.id === selectedClub?.clubId);
  

  const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
  const departments = [
    "Department of Accounting",
    "Department of Business Analytics",
    "Department of Business Economics",
    "Department of Innovation and Entrepreneurship Development",
    "Department of Finance",
    "Department of Investment Management",
    "Department of Management",
    "Department of HRM",
    "Department of Management Information Systems",
    "Department of Marketing",
    "Department of International Business",
    "Department of Tourism and Hospitality Management",
    "Department of Operations and Supply Chain Management",
  ];

  useEffect(() => {
    try {
      const token = localStorage.getItem("token");
      const user = LogInData.find((data) => data.AIUB_ID === aiub_id);

      if (!token || token !== user?.token) {
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  }, [aiub_id, navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/club');
  };

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
      setSelectedClub({
        ...selectedClub,
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phoneNumber,
        address: formData.address,
        department: formData.department,
      });

      navigate('/club/join-club/welcome-msg');
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
      newErrors.bloodGroup = "Select your blood group.";
    }
    if (!formData.address) {
      newErrors.address = "Enter your address.";
    }
    if (!formData.department) {
      newErrors.department = "Select your department.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 border border-black rounded-md border-opacity-25">
      <div className="bg-white rounded-lg shadow-lg m-8 w-2/5 p-6 border border-black border-opacity-15">
        <h2 className="text-2xl font-bold mb-4">
          Enter Your Details for joining {desiredClub.name}
        </h2>
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
              className="mt-2 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            {errors.fullName && (
              <div className="text-red-500 font-medium mt-2 p-1 border border-red-500 bg-sky-100 rounded-md border-opacity-15">
                {errors.fullName}
              </div>
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
              className="mt-2 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            {errors.email && (
              <div className="text-red-500 font-medium mt-2 p-1 border border-red-500 bg-sky-100 rounded-md border-opacity-15">
                {errors.email}
              </div>
            )}
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
              className="mt-2 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            {errors.phoneNumber && (
              <div className="text-red-500 font-medium mt-2 p-1 border border-red-500 bg-sky-100 rounded-md border-opacity-15">
                {errors.phoneNumber}
              </div>
            )}
          </div>
          <div className="mb-4 text-left">
            <label
              htmlFor="bloodGroup"
              className="block text-sm font-medium text-gray-700"
            >
              Blood Group
            </label>
            <select
              id="bloodGroup"
              name="bloodGroup"
              value={formData.bloodGroup}
              onChange={handleChange}
              className="mt-2 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Select your blood group</option>
              {bloodGroups.map((group) => (
                <option key={group} value={group}>
                  {group}
                </option>
              ))}
            </select>
            {errors.bloodGroup && (
              <div className="text-red-500 font-medium mt-2 p-1 border border-red-500 bg-sky-100 rounded-md border-opacity-15">
                {errors.bloodGroup}
              </div>
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
              className="mt-2 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            {errors.address && (
              <div className="text-red-500 font-medium mt-2 p-1 border border-red-500 bg-sky-100 rounded-md border-opacity-15">
                {errors.address}
              </div>
            )}
          </div>
          <div className="mb-4 text-left">
            <label
              htmlFor="department"
              className="block text-sm font-medium text-gray-700"
            >
              Department
            </label>
            <select
              id="department"
              name="department"
              value={formData.department}
              onChange={handleChange}
              className="mt-2 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Select your department</option>
              {departments.map((dept) => (
                <option key={dept} value={dept}>
                  {dept}
                </option>
              ))}
            </select>
            {errors.department && (
              <div className="text-red-500 font-medium mt-2 p-1 border border-red-500 bg-sky-100 rounded-md border-opacity-15">
                {errors.department}
              </div>
            )}
          </div>
          <div className="flex justify-center mt-4">
            <button
              type="button"
              onClick={handleLogout}
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-300 opacity-70 hover:opacity-90 mr-2"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300 opacity-70 hover:opacity-90 ml-2"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
