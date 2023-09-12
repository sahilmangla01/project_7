import React, { useState } from 'react'
import "./Footer.css"
import { useNavigate } from 'react-router-dom'
import send from "./Icons/send.png"
import smrphone from "./Icons/smartphone.png"
import ln from "./Icons/linkedin.png"
import fb from './Icons/facebook.png'
import twitter from './Icons/twitter.png'
import insta from './Icons/instagram.png'
import add from "./Icons/add.png"

const Footer = () => {
    const [togle , settogle] = useState(true)
    const [togle2 , settogle2] = useState(true)
    const [togle3 , settogle3] = useState(true)
    const Navi = useNavigate()
  return (
    <>
    <div className='mainFooter'>
        <div className='Footer'>
        <div onClick={()=>Navi('/')} className="Title">
        <span className="the">The </span> 
        <span className='siren'>Siren</span></div>

        <div className='FooterHead'>The Siren is a Blog website where people can share their views and view other people thoughts.</div>
        <div className='fticon'>
            <img className='ftimg' src={ln} alt='linkdn'/>
            <img className='ftimg' src={twitter} alt='twitter'/>
            <img className='ftimg' src={fb} alt='facebook'/>
            <img className='ftimg' src={insta} alt='instagram'/>
        </div>
        </div>

        <div className='BRP'>
        <div className='FooterBRP'>
        <h2>Blog <img  onClick={()=>settogle(!togle)} className={!togle?'addBtnrt ':"addBtn "} src={add} alt='add'/></h2>
            
            <div className={!togle ?"show" : "hide"}>
            <div onClick={()=>Navi('/bollywood')}>Bollywood</div>
            <div onClick={()=>Navi('/technology')}>Technology</div>
            <div onClick={()=>Navi('/hollywood')}>Hollywood</div>
            <div onClick={()=>Navi('/fitness')}>Fitness</div>
            <div onClick={()=>Navi('/food')}>Food</div>
            </div>
        </div>
        <div className='FooterBRP'>
            <h2 >Resources<img onClick={()=>settogle2(!togle2)} img className={!togle2?'addBtnrt ':"addBtn "} src={add} alt='add'/></h2>
            <div className={!togle2 ?"show" : "hide"}>
            <div>Help Center</div>
            <div>Careers</div>
            <div>Contact Us</div>
            </div>
        </div>
        <div className='FooterBRP'>
        <h2 >Partners <img onClick={()=>settogle3(!togle3)} className={!togle3?'addBtnrt ':"addBtn "} src={add} alt='add'/></h2>
             <div className={!togle3 ?"show" : "hide"}>
            <div>Become a Partner</div>
            <div>Step to Integrate</div>
            <div>Partner List</div>
            </div>
        </div>
        </div>
        <div className='Footer'>
            <h1>Ready to get started ?</h1>
            <div className='started'>
                <img className='ftimg' src={smrphone} alt='mobile'/>
                <div>+91-8950121323</div>
            </div>
            <div  className='started'>
                <img className='ftimg' src={send} alt='mobile'/>
                <div>support@siren.com</div>
            </div>
        </div>
        </div>

        <div className='Copyright1'>
            <div className='Copyright'>
            <p>© 2023 THE SIREN - A Blog Website</p>
            <div>
                <div>Privacy Policy</div>
                <div>Terms of service</div>

            </div>
            </div>
        </div>
    </>
  )
}

export default Footer
