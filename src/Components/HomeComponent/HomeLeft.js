import React, { useEffect,useState } from 'react'
import "../Home.css"
import { NavLink } from 'react-router-dom'
import axios from 'axios'


const HomeLeft = () => {
    const [contextData , setContextData] = useState()
    
  useEffect(()=>{
    axios.get("https://manglasahil-node-project7-backend.onrender.com/blog/api")
    .then(res =>setContextData(res.data))
    .catch(err=>console.log(err))
  },[])
    const random = Math.floor(Math.random()*73)+1
  return (
    <>
        <div className="topStories__left">
                    
                    {
                       contextData && contextData.slice(random, random+4).map(e=>{
                            return(
                                <div key={e.id} className="TS__Elements">
                                   <NavLink state={{id:e.id,val:0 , title: e.title}} to={"/content" }> <img className="TS__images" src={e.image} alt={e.title}/></NavLink>
                                    <div className="TS__headAndDDescpr">
                                   <NavLink className="heading" state={{id:e.id,val:0 , title: e.title}} to={"/content"}> <h2 className='leftTitle'>  {e.title}</h2> </NavLink>
                                    <div className="TS__description left__Desc">{e.description}</div>

                                    <div className="HomeCompFoot">{e.cat} <span style={{color:'gray'}}> / August 1 ,2023</span></div>
                                    </div>
                                    
                                </div>
                            )
                        })
                    }
                    
                    
                </div>
    
    </>
  )
}

export default HomeLeft
