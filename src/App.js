import React from 'react';
import { Routes, Route} from 'react-router-dom';
import store from './Components/redux/configureStore';
import { Provider } from 'react-redux';

// Components
import Navbar from './Components/Header/Navbar';
import Rockets from './Pages/Rockets';
import Missions from './Components/Missions/Missions';
import MyProfile from './Components/MyProfile/Myprofile';

function App() {
  return (
  
      <Provider store={store}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/Missions" element={<Missions />} />
        <Route path="/MyProfile" element={<MyProfile />} />
      </Routes>
      </Provider>
  
  );
}

export default App;