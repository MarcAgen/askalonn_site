import NavBar from "./homeApp/header/headerApp";
import { Routes, Route } from "react-router";

//import other pages
import  HomeApp  from "./homeApp/homeApp";
import About from "./homeApp/routes/about";
import Contact from "./homeApp/routes/contact";
import Event from "./homeApp/routes/event";
import Partnership from "./homeApp/routes/partnership";


function App () {
    return (
        <div className='nav-style'>
            <NavBar/>
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