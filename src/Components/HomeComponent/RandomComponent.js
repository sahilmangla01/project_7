import React, { useEffect, useState } from 'react'
import { NavLink } from "react-router-dom";
import "../Home.css"
import axios from 'axios';


const RandomComponent = () => {
    const [data , setData]=useState();
    useEffect(()=>{
        axios.get("https://manglasahil-node-project7-backend.onrender.com/blog/api")
        .then(res => setData(res.data))
        .catch(err=>console.log(err))
    },[])
    const random = Math.floor(Math.random()* 73)+1
    return(

        <> 
                {
                            data && data.slice(random , random+4).map((e,index)=>{
                                return(
                                    <div className='randomComponents' key={index} >
                               <NavLink state={{id:e.id , title: e.title ,val:0}} to={"/content"}> <img className="random__images" src={e.image} alt={e.title}/></NavLink>
                                
                                <div>
                                <NavLink className="content__heading" state={{id:e.id , title: e.title, val:0}} to={"/content"}><div className="random__Title">{e.title}</div></NavLink>
                                <div className="random__profile">
                                    
                                    <div className="random__description">{e.description}</div>
                                     
                    </div>
                                    <div className='HomeCompFoot' >{e.cat} <span style={{color:'gray'}}> / August 1 ,2023</span></div>
                                
                                    </div>
                            </div>
                                )
                            })
                        }
        </>

    )
}

export default RandomComponent
