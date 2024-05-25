import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Homepage from "./Homepage/Homepage";
import Navbar from "./Navbar";
import Student_activities from "./Student_activities/Student_activities";
import Club from "./Club/Club";
import Facilities from "./Facilities/Facilities";
import Contact from "./Cantact/Contact";


export default function App() {
  return (
    <BrowserRouter>
    <div>
      <Header/>
      <span className="w-full sticky top-0 bg-blue-700 z-50"><Navbar/></span>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/student_activities" element={<Student_activities />}/>
        <Route path="/club" element={<Club />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>  
      <Footer />
    </div>
    </BrowserRouter> 
  )
}