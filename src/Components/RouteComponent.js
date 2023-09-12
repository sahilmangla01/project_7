import React from "react";
import { Routes,Route } from "react-router-dom";
import Home from "./Home";
import Bollywood from "./Bollywood";
import Technology from "./Technology";
import Fitness from "./Fitness";
import Hollywood from "./Hollywood";
import Food from "./Food";
// import DataStore from "./DataStore";
import Content from "./Content";


const RouteComponent = ()=>{
    return(
        // <DataStore>
             <Routes >
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/bollywood" element={<Bollywood/>}></Route>
                    <Route path="/technology" element={<Technology/>}></Route>
                    <Route path="/hollywood" element={<Hollywood/>}></Route>
                    <Route path="/fitness" element={<Fitness/>}></Route>
                    <Route path="/food" element={<Food/>}></Route>

                    <Route path="/content" element={<Content/>}></Route>
                    
    </Routes>
   
        // </DataStore>

       
    )
}
export default RouteComponent;