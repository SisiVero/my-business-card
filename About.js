import React from "react"
import Interests from "./Interests"

export default function About(){
    return (
     <div className="details">
       <div> 
        <h4 className="about">About</h4>
        <p className="about-text">I am a data Vendor and a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
        </div>
        <div>
        <Interests />
        </div>
    </div>
    )
}