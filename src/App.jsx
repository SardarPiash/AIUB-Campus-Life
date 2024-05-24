import Footer from "./Footer";
import Header from "./Header";
import Homepage from "./Homepage/Homepage";
import Navbar from "./Navbar";


export default function App() {
  return (
    <div>
      <Header/>
      <span className="w-full sticky top-0 bg-blue-700 z-50"><Navbar/></span>
      <Homepage />
      <Footer />
    </div>
  )
}