import React from 'react'
import LinkComponent from "./Components/LinkComponent";
import { useNavigate } from 'react-router-dom';
const Header = () => {
    const Navi = useNavigate()
  return (
    <>
        <div className="app__main">
      
      <div onClick={()=>Navi('/')} className="Title">
        <span className="the">The </span> 
        <span className='siren'>Siren</span></div>
      
        <LinkComponent/>
        </div><hr/>
      
       
    </>
  )
}

export default Header
