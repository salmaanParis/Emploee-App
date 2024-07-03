import React from 'react'
import { Navigate,Outlet } from 'react-router-dom'

const privateRoutes = () => {

const accesToken=sessionStorage.getItem('userToken')
let validUser=false;
if (accesToken) {
    validUser=true;
}    
  return (

    validUser?<Outlet/> : <Navigate to="/"/>

  )
}

export default privateRoutes