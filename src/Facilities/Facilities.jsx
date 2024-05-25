import React from 'react'
import MedicalCenter from "../assets/health-and-wellness.jpeg"

export default function Facilities() {
  return (
    <div className="bg-gray-100">
        <main className="container mx-auto my-8">
    <h2 className="text-3xl font-bold text-center mb-8">Facilities</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-white rounded-lg shadow-md p-4">
        <img src={MedicalCenter} alt="AIUB Medical Center" className="w-full h-48 object-cover rounded-t-lg" />
        <div className="p-4">
          <h3 className="text-xl font-bold mb-2">AIUB Medical Center</h3>
          <p>At AIUB, we prioritize the well-being and fitness of our community. Our state-of-the-art medical and fitness facilities are designed to care to the health needs of our students, faculty, and staff, ensuring they stay healthy and active. Located in Annex 1, the AIUB Medical Center is dedicated to providing comprehensive healthcare services to all students and employees.</p>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md p-4">
        <img src="https://via.placeholder.com/400x300" alt="AIUB Fitness/Gymnasium Facilities" className="w-full h-48 object-cover rounded-t-lg" />
        <div className="p-4">
          <h3 className="text-xl font-bold mb-2">AIUB Fitness/Gymnasium Facilities</h3>
          <p>Our modern gymnasium, located on the 10th floor of the D-building, is designed to support the fitness goals of all members of the AIUB community. Equipped with the latest fitness equipment, our gym is accessible to both male and female students, faculty, and officials. With dedicated sessions for different groups, we ensure that everyone has the opportunity to exercise comfortably.</p>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md p-4">
        <img src="https://via.placeholder.com/400x300" alt="AIUB Daycare Facilities" className="w-full h-48 object-cover rounded-t-lg" />
        <div className="p-4">
          <h3 className="text-xl font-bold mb-2">AIUB Daycare Facilities</h3>
          <p>At the American International University–Bangladesh (AIUB), we are dedicated to fostering a supportive environment for our university community. Understanding the challenges that come with balancing parenthood and professional or academic responsibilities, we have established the AIUB Daycare Facility.</p>
        </div>
      </div>
    </div>
  </main>
    </div>
  )
}
