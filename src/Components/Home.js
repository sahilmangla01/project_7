import React,{ useEffect, useState} from "react";
import "./Home.css"
import Header from "../Header";
import RandomComponent from "./HomeComponent/RandomComponent";
import { NavLink } from "react-router-dom";
import LatestArticle from "./LatestArticle";
import Footer from "./Footer/Footer";
import axios from "axios";






const Home = ()=>{
    
    const [data ,  setData] = useState();
    const random = Math.floor(Math.random()*70)
    
    
    useEffect(() => {
        // window.scrollTo(0, 0);
       axios.get("https://manglasahil-node-project7-backend.onrender.com/blog/api")
       .then(res =>setData(res.data) )
       .catch(err=> console.log(err))
      }, []);

    return( 
        <>
        <Header/>
        <div className="Main">
        <div className="Home">
            {
                data && data.slice(random , random+1).map((e,index)=>{
                    return(
                       
                    <div key={index}><NavLink  state={{id:e.id , title: e.title ,val:0}} to={"/content"}><img className="img1" src={e.image} alt="homeTop"/></NavLink></div>
                        
                    )
                })
            }

            <div className="twoImages">
            {
                data && data.slice(random+1 , random+3).map((e,index)=>{
                    return(
                       
                    <NavLink key={index} state={{id:e.id , title: e.title ,val:0}} to={"/content"}><img className="img2" src={e.image} alt="homeTop" /></NavLink>
                        
                    )
                })
            }
            
            </div>

        </div>

            <div className="random">
            <h1 className="content__title">The Latest</h1>
            <div className="randomContent">
            <RandomComponent/>
        
            </div>

            <div className="LA">
            <h1 className="content__title latestArticle"> Latest Article</h1>
            <LatestArticle/>
            </div>
            </div>
       
            </div>

            <Footer/>
        </>
    )
}

export default Home;