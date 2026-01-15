import NavBar from "../componnent/navbar/navbar";
import Footer from "../componnent/footer/footer";
import { Routes, Route } from "react-router";

//import other pages
import  HomeApp  from "../routes/homeApp/homeApp";
import About from "../routes/about/about";
import Contact from "../routes/contact/contact";
import Event from "../routes/event/event";
import Partnership from "../routes/partnership/partnership";


function App () {
    return (
        <div className='nav-style'>
            <NavBar/>
            <Footer/>
            <Routes>
                <Route path="/" element={<HomeApp/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/Contact" element={<Contact/>}/>
                <Route path="/Event" element={<Event/>}/>
                <Route path="/Partnership" element={<Partnership/>}/>
            </Routes>
        </div>
    );
}

export default App