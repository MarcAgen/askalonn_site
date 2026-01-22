import NavBar from "../componnent/navbar/navbar";
import { Routes, Route } from "react-router";

//import other pages
import  HomeApp  from "../routes/homeApp/homeApp";
import About from "../routes/about/about";
import Contact from "../routes/contact/contact";
import Event from "../routes/event/event";
import Partnership from "../routes/partnership/partnership";
import LegalMentions from "../routes/legal_mention/legal_mention";
import Footer from "../componnent/footer/footer";


function App () {
    return (
        <div className='nav-style'>
            <div>
                <header>
                    <NavBar/>
                </header>
            </div>
            <div>
                <Routes>
                    <Route path="/" element={<HomeApp/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/Contact" element={<Contact/>}/>
                    <Route path="/Event" element={<Event/>}/>
                    <Route path="/Partnership" element={<Partnership/>}/>
                    <Route path="/legal_mentions" element={<LegalMentions/>}/>
                </Routes>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    );
}

export default App