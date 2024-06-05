import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Homepage from "./Homepage/Homepage";
import Navbar from "./Navbar";
import Student_activities from "./Student_activities/Student_activities";
import Club from "./Club/Club";
import Facilities from "./Facilities/Facilities";
import Contact from "./Cantact/Contact";
import HomeBodyInfo from "./Homepage/HomeBodyInfo";
import HomeBodyNews from "./Homepage/HomeBodyNews";
import FacilitiesInfo from "./Facilities/FacilitiesInfo";
import Login from "./component/Login";
import JoinClub from "./Club/JoinClub";
import { clubId } from "./contex/AddContexClub";
import { useContext, useState } from "react";
import ClubWellcomeMsg from "./Club/clubWellcomeMsg";

export default function App() {
  const [selectedClub,setSelectedClub]=useState({
    clubId:"",
    aiubId:"",
    fullname:"",
    email:"",
    address:"",
    phone:"",
    department:""
  })
  return (
    <BrowserRouter>
      <div className="">
        <Header />
        <span className="w-full sticky top-0 bg-blue-700 z-50">
          <Navbar />
        </span>
        <clubId.Provider value={{ selectedClub, setSelectedClub }}>
          <div className="mt-1 flex-grow overflow-auto p-3 border border-black border-opacity-25">
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/student_activities" element={<Student_activities />} />
              <Route path="/club" element={<Club />} />
              <Route path="/facilities" element={<Facilities />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/homepage/:title" element={<HomeBodyInfo />} />
              <Route path="/homepage/news/:title" element={<HomeBodyNews />} />
              <Route path="/facilities/:name" element={<FacilitiesInfo />} />
              <Route path="/login" element={<Login />} />
              <Route path="/join-club" element={<JoinClub />} />
              <Route path="/club/join-club/welcome-msg" element={<ClubWellcomeMsg />} />
            </Routes>
          </div>
        </clubId.Provider>
        <Footer />
      </div>
    </BrowserRouter>
  );
}