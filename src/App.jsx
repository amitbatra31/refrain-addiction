import React from 'react';
import { Route, Routes } from 'react-router-dom';
import {
  Home,
  Assessment,
  Track,
  Chat,
  Profile,
  Landing,
  Book,
  Check,
  Login,
  Register,
  Blockweb,
} from './pages';
import Dashboard from './pages/Dashboard';
import Loginc from './pages/Loginc';
import Registerc from './pages/Registerc';
import Drugs from './pages/Drugs';
import Alcohol from './pages/Alcohol';
import Devices from './pages/Devices';
import Other from './pages/Other';
import Support from './pages/Support';
import Support1 from './pages/Support1';
import Support2 from './pages/Support2';
import Consultant from './pages/Consultant';

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route path="/assessment" element={<Assessment />} />
        <Route path="/track" element={<Track />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/" element={<Landing />} />
        <Route path="/Appointment/new" element={<Book />} />
        <Route path="/Appointment/past" element={<Check />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/blockweb" element={<Blockweb />} />
        <Route path="/drugs" element={<Drugs />} />
        <Route path="/alcohol" element={<Alcohol />} />
        <Route path="/devices" element={<Devices />} />
        <Route path="/other" element={<Other />} />
        <Route path="/support" element={<Support />} />
        <Route path="/drugSupp" element={<Support1 />} />
        <Route path="/alcoholSupp" element={<Support2 />} />
        <Route path="/registerc" element={<Registerc />} />
        <Route path="/loginc" element={<Loginc />} />
        <Route path="/consultant" element={<Consultant />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
