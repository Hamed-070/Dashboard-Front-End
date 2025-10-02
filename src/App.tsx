import React from 'react';
import Login from './components/Login';
import {Route , Routes} from 'react-router-dom'
import Home from './components/Home'
import PrivateRoute from './components/PrivateRoute/PrivateRoute'

require('./App.css'); 


function App() {
  return (
    <div className="h-screen w-full flex">

        <Routes>
          <Route path='/home' element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          } />
          <Route path='/login' element={<Login />} />
        </Routes>

    </div>
  );
}

export default App;
