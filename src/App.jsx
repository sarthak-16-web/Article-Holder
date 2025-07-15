import { useEffect, useState } from 'react'
import {useDispatch} from "react-redux"
import './App.css'
import authservice from './appwrite/auth';
import { login , logout } from './store/slice';
import Header from './components/header';
import Fotter from './components/fotter';
import { Outlet } from 'react-router-dom';
// import Header from './components/import_component';
function App() {
  const [loading , setLoading] = useState(true);

  const dispatch = useDispatch();


  useEffect(()=>{
   authservice.CurrentUser()
   .then((userData)=>{
    if(userData){
       dispatch(login(userData));
    }
    else {
      dispatch(logout());
    }
   })
   .finally(()=>(setLoading(false)))
  },
  [])
  
  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
    <div className='w-full block'>
        <Header />
        <main>
            <Outlet />
        </main>
        <Fotter></Fotter>
    </div>
    </div>
  ) : (null) ;
}

export default   App
