import React from "react"
import Card from "./Card"
function About(){
    let i ="this is a company about"
    let t="i provide a company details"
    return(
       <div>
        <Card name={i} Des={t}/>
       </div>
    )
}export default About