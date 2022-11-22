import React from 'react';
import { Routes, Route} from 'react-router-dom';

// Components
import Navbar from './Components/Header/Navbar';
import Rockets from './Components/Rockets/Rockets';
import Missions from './Components/Missions/Missions';
import MyProfile from './Components/MyProfile/Myprofile';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/Missions" element={<Missions />} />
        <Route path="/MyProfile" element={<MyProfile />} />
      </Routes>
    </div>
  );
}

export default App;