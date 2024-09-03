import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import About from './components/About/About';
//import Testimonials from './components/Events/Testimonials';
//import Events from './components/Events/Krithomedh';
import Team from './components/Team/Team';
import Event from './components/Events_code/EventPage';
//import Technovista from './components/Events/Technovista';
import Login from './components/Login/Login';

const App = () => {
    return (
        <Router>
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="about" element={<About />} />
                    {/* <Route path="testimonials" element={<Testimonials />} /> */}
                    <Route path="Events" element={<Event />} />
                    <Route path="team" element={<Team />} />
                    <Route path="events/:eventname" element={<Event />} />
                    {/* <Route path="events/TECHNOVISTA" element={<Technovista />} /> */}
                    <Route path="login" element={<Login />} />
                </Routes>
            </main>
            <Footer />
        </Router>
    );
};

export default App;
