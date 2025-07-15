import { useDispatch } from 'react-redux'
import authservice from '../../appwrite/auth.js'
import { useNavigate } from 'react-router-dom'  

import { logout } from '../../store/slice'


   function Logout() {
    
   const navigate = useNavigate()
    const dispatch = useDispatch();
    const LogoutHandler = () =>{
     authservice.Logout().then(()=>{
        dispatch(logout());
        navigate('/login') 

     })
    } 
  return (
    <button
    className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
    onClick={LogoutHandler}
    >Logout</button>
  )

}

export default Logout 