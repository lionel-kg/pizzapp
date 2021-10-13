import React from "react";
import "../css/Banner.css";
import logo from '../assets/logo.png'

class Banner extends React.Component{

    render(){
        return( 
            <div className="lmj-banner">
                <img src={logo} alt="logo"></img>
                <h1>{this.props.titre}</h1>
            </div>
        );
    }   
}

export default Banner;

