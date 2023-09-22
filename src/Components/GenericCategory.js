import React, {  useState,useEffect } from "react";
import "./style.css"
import { NavLink } from "react-router-dom";
import Header from "../Header";
import axios from "axios"
import Footer from "./Footer/Footer";

const GenericCategory = (props) => {
    
    
    const [loadMore , setLoadMore] = useState(false)
    

    const loadMoreHandler= ()=>{
        setLoadMore(!loadMore);
    }

    const [contextData , setContextData]=useState('')
    useEffect(() => {
        axios.get(`https://manglasahil-node-project7-backend.onrender.com/blog/api/${props.urlCat}`)
        .then(res => setContextData(res.data))
        .catch(err => console.log(err))
        window.scrollTo(0, 0);

    }, [props.urlCat ]);

    
    return(
        
            <>
                <Header/>
            <div className="topStories">
                <div className="topStories__left">
                    <h1 className="content__title">{props.category}</h1>
                    {
                       contextData && contextData.slice(0,6).map((e,index)=>{
                            return(
                                <div key={index} className="TS__Elements">
                                   <NavLink state={{id:e.id , title: e.title}} to={"/content" }> <img className="TS__images" src={e.image} alt={e.title}/></NavLink>
                                    <div className="TS__headAndDDescpr">
                                   <NavLink className="heading" state={{id:e.id , title: e.title}} to={"/content"}> <h2 >  {e.title}</h2> </NavLink>
                                    <div className="TS__description">{e.description}</div>

                                    <div className="compfoot">{e.cat} <span style={{color:'gray'}}> / August 1 ,2023</span></div>
                                    </div>
                                    
                                </div>
                            )
                        })
                    }
                    
                    {
                       contextData && contextData.slice(6,10).map((e,index)=>{
                            return(
                                <div key={index} className={loadMore ? "TS__Elements " : "TS__Elements loadMore"}>
                                   <NavLink state={{id:e.id , title: e.title}} to={"/content/" }> <img className="TS__images" src={e.image} alt={e.title}/></NavLink>
                                    <div className="TS__headAndDDescpr">
                                   <NavLink state={{id:e.id , title: e.title}} className="heading" to={"/content"}> <h2 >  {e.title}</h2> </NavLink>
                                    <div className="TS__description">{e.description}</div>

                                    <div className="compfoot">{e.cat} <span style={{color:'gray'}}> / August 1 ,2023</span></div>
                                    </div>
                                    
                                </div>
                            )
                        })
                    }
                    <div className="load" onClick={loadMoreHandler}>
                        

                       
                       { !loadMore ? <h3  >Load More</h3>:<h3 >Show Less</h3>}</div>
                </div>
                <div className="topStories__right">
                        
                    <div >
                                            <h1 className="content__title topPost">Top Posts</h1>
                    {
                           contextData && contextData.slice(10,11).map((e,index)=>{
                                return(
                                    <div key={index} className="TP__first">
                                       <NavLink state={{id:e.id , title: e.title}} to={"/content"}> <img className="TP__firstImage" src={e.image} alt="topPost"/></NavLink>
                                        <div className="TP__firstDescription">
                                      <div className="TPTitle">
                                      <NavLink state={{id:e.id , title: e.title}} to={"/content"} className="heading">  <div className="TP__firstTitle">{e.title}</div></NavLink>
                                          <div className="compfoot">{e.cat} <span style={{color:'gray'}}> / August 1 ,2023</span></div>
                                      </div>
                                            <div className="TP__FirstNumber">{e.id -props.number}</div>

                                        </div>
                                    </div>
                                )
                            })
                        }
                    
                    
                                          {
                           contextData && contextData.slice(11,15).map((e,index)=>{
                                return(
                                    <div key={index} className="TP__Elements">
                                       <NavLink state={{id:e.id , title: e.title}} to={"/content"}> <img className="TP__images" src={e.image} alt="topPost"/></NavLink>
                                        <div className="TP__description">
                                        <div className="TPTitle second">
                                        <NavLink state={{id:e.id , title: e.title}} to={"/content"} className="heading">  <div className="TP__title ">{e.title}</div></NavLink>
                                          <div className="compfoot">{e.cat} <span style={{color:'gray'}}> / August 1 ,2023</span></div>
                                        </div>
                                        </div>
                                            <div className="TP__numbers">{e.id -props.number}</div>
                                    </div>
                                )
                            })
                        }
                        </div>

                    
                    <div className="advertisement">
                          <img src={props.advertisement} alt="gifs"/>
                                             </div>
                 </div>

           
            </div>

                        <Footer/>
            </>


    
        
    )
}

export default GenericCategory

