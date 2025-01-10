import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';

function App() {
  return <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Landing />} />
          <Route path="/neet/online-coaching-class-11" element={<Class11Program />} />
          <Route path='/neet/online-coaching-class-12' element={<Class12Program />} />
          <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
      Footer part | contact us
  </BrowserRouter>
    </>
}

function Layout(){
  return <div>
    <Link to={"/"}> Allen</Link>
    |
    <Link to={"/neet/online-coaching-class-11"}>Class 11</Link>
    |
    <Link to={"/neet/online-coaching-class-12"}>Class 12</Link>
    Hi there
    <Outlet />
  </div>
}

function ErrorPage(){
  return <div>
    Sorry :( page not found
  </div>
}

function Landing(){
  return <div>
    Welcome to allen
  </div>
}

function Class11Program() {
  return <div>
  NEET programs for class 11th
  </div>
}

function Class12Program() {
  const navigate = useNavigate();
  function redirecttoHomepage(){
    navigate("/");
  }
  return <div>
    NEET programs for class 12th
    <button onClick={redirecttoHomepage}>Get back to Home page</button>
  </div>
}

export default App
