import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';

function App() {
  return <>
    <BrowserRouter>
      <Routes>
        <Route path="/neet" element={<Layout />}>
          <Route index element={<Landing />} />
          <Route path="/neet/online-coaching-class-11" element={<Class11Program />} />
          <Route path='/neet/online-coaching-class-12' element={<Class12Program />} />
          {/* <Route path="*" element={<ErrorPage />} /> */}
      </Route>
    </Routes>
      Footer part | contact us
  </BrowserRouter>
    </>
}

function Layout(){
  return <div style={{height:"100vh , "}}>
    <Header />
    <div style={{height:"90vh"}}>
    <Outlet />
    </div>
  </div>
}
function Header(){
  return <>
  <Link to={"/neet"}> Allen</Link>
    |
    <Link to={"/neet/online-coaching-class-11"}>Class 11</Link>
    |
    <Link to={"/neet/online-coaching-class-12"}>Class 12</Link>
  </>
}
function ErrorPage(){
  return <div>
    Sorry :( page not found
  </div>
}

function Landing(){

  const usERef = useRef();
  function focusOnInput() {
  //   document.getElementById("firstName").focus()
  usERef.current.focus();
  }
  return <div>
    Welcome to allen
    <div>
      sign up
      <input ref={usERef} id="firstName" type={"text"} />
      <input id="lastname" type={"text"} />
      <button onClick={focusOnInput}>submit</button>
    </div>
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
    navigate("/neet");
  }
  return <div>
    NEET programs for class 12th
    <button onClick={redirecttoHomepage}>Get back to Home page</button>
  </div>
}

export default App
