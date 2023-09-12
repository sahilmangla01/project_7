import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./LinkComponent.css"

const LinkComponent = ()=>{
    const [toggle , setToggle] = useState(false);

    const clickHandler =()=>{
        setToggle(!toggle);
        
        
    }
    return(
    <>        
    <div className='link__main '>
        <div className="link__button " onClick={clickHandler}>
            <div className={!toggle?" bar ":"bar bar1"}></div>
            <div className={!toggle?" bar ":"bar bar3"}></div>

        </div>
        <div className={!toggle ?"link__disp":"link__main link__main_dropDown"}>
        <NavLink style={({ isActive }) => ({ color: isActive ? 'red' : 'black',textDecoration:'none' })} onClick={clickHandler} to="/"><div className="navlink">Home</div></NavLink>
        <NavLink onClick={clickHandler} style={({ isActive }) => ({ color: isActive ? 'red' : 'black',textDecoration:'none' })} to="/bollywood"><div className="navlink">Bollywood</div></NavLink>
        <NavLink onClick={clickHandler} style={({ isActive }) => ({ color: isActive ? 'red' : 'black',textDecoration:'none' })} to="/technology"><div className="navlink">Technology</div></NavLink>
        <NavLink onClick={clickHandler} style={({ isActive }) => ({ color: isActive ? 'red' : 'black',textDecoration:'none' })} to="/hollywood"><div className="navlink">Hollywood</div></NavLink>
        <NavLink onClick={clickHandler} style={({ isActive }) => ({ color: isActive ? 'red' : 'black',textDecoration:'none' })} to="/fitness"><div className="navlink">Fitness</div></NavLink>
        <NavLink onClick={clickHandler} style={({ isActive }) => ({ color: isActive ? 'red' : 'black',textDecoration:'none' })} to="/food"><div className="navlink">Food</div></NavLink>
        </div>
    </div>
        <hr/>

    
    

    </>

    )
}
// style={({ isActive }) => ({ color: isActive ? 'red' : 'black',textDecoration:'none' })}
export default LinkComponent;