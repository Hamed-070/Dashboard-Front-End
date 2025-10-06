<<<<<<< HEAD
import React from 'react';
import Login from './components/Login';
import {Route , Routes} from 'react-router-dom'
import Home from './components/Home'
import PrivateRoute from './components/PrivateRoute/PrivateRoute'
=======
import Login from './components/Login';
import {Route , Routes , Link} from 'react-router-dom'
import Home from './components/Home'
import { Navigate } from 'react-router-dom';

import Customers from './components/Customers';
import Products from './components/Products';
import Setting from './components/Setting';

import { IoLogoSlack } from "react-icons/io";
import { IoAnalyticsSharp } from "react-icons/io5";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { BsFillPeopleFill } from "react-icons/bs";
import { IoSettingsSharp } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";
import { useState , useEffect } from 'react';
>>>>>>> another

require('./App.css'); 


function App() {
<<<<<<< HEAD
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
=======

  // const token = localStorage.getItem('access') ;  
  const [token , setToken] = useState<string | null> (localStorage.getItem('access')) ; 

  useEffect(() => {
    const stored = localStorage.getItem("access");
    setToken(stored);
  }, []);

  if(!token){

      return (
        <Routes>
          <Route path="/login" element={<Login onLoginSuccess={() => setToken(localStorage.getItem("access"))} />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      );
    }

  else{

     return(
      <div className="h-screen w-full flex">
          <div className='w-1/6 h-full bg-gray-200 p-5 flex flex-col gap-10'>
            {/* Logo  */}
            <div className='flex flex-row pl-5 pt-10 gap-2 items-center justify-start'>
                <IoLogoSlack className='text-5xl text-yellow-400' />
                <h1 className='text-2xl font-semibold'><span className=' text-3xl '>B</span>ussiness</h1>
            </div>

            <div className='flex flex-col gap-2'>

              {/* Links */}
              <div className='w-full h-auto flex flex-col gap-7 p-5 pl-10 justify-center items-start'>
                  <Link to={'/'} className='flex flex-row gap-2 font-medium transition-transform hover:scale-110'><span><IoAnalyticsSharp className='text-2xl' /></span>Analytics</Link>
                  <Link to={'/products'} className='flex flex-row gap-2 font-medium  transition-transform hover:scale-110'><span><MdOutlineProductionQuantityLimits className='text-2xl' /></span>Products</Link>
                  <Link to={'/customers'} className='flex flex-row gap-2 font-medium  transition-transform hover:scale-110'><span><BsFillPeopleFill className='text-2xl' /></span>Customers</Link>
              </div>

              <hr className='h-px bg-slate-600 border-0' />

              {/* Others  */}

              <div className='w-full  h-auto flex flex-col gap-3 p-5 pl-10 justify-center items-start'>
                <Link to={'/setting'} className='flex flex-row gap-2  transition-transform hover:scale-110'><span><IoSettingsSharp className='text-2xl' /></span>Setting</Link>
                <Link to={'/'} className='flex flex-row gap-2  transition-transform hover:scale-110' ><span><CiLogout className='text-2xl'/></span> Sign Out</Link>
              </div>

            </div>


          </div>
           
           <div className='w-5/6 h-screen'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/products' element={<Products />} />
              <Route path='/customers' element={<Customers />} />
              <Route path='/setting' element={<Setting />} />
              <Route path='/login' element={<Login onLoginSuccess={() => setToken(localStorage.getItem("access"))} />} />
            </Routes> 


            </div> 
          
      </div>
    )
  }


  }








>>>>>>> another

export default App;
