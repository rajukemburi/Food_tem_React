import React from "react";
import Topnavbar from "./Topnavbar";
import Downnavabar from "./Downnavbar";



class Header extends React.Component{
    render(){
        return(
            <div style={{textAlign:"center"}}>
               <h1>Hello Users Welcome to my Food Template...!!!</h1>
               <Topnavbar/>
               <Downnavabar/>
            </div>
        )
    }
}
export default Header