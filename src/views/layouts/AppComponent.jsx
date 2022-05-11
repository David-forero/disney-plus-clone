import React from 'react'
import Header from '../../components/Header'
import { Outlet } from "react-router-dom";

function AppComponent() {
  return (
    <>
        <Header/>
        <Outlet/>
    </>
  )
}

export default AppComponent