import React from "react"
import locaimg from "C:\Users\chick\Downloads\locaimg.png"


export default function places(props){
    return (
        
        <div className= "card">
        <img src= {locaimg} className="card--locaimg" id="topright"/>
        <img className="card--img" src = {`{props.imgURL}`} id="topright"/>
        <div className="">
            
            <span className="places--title">{props.stats.rating}</span>
            <span className="places--location"> </span>
            <span id="topright"className="places--gmap">{props.googleMapsUrl}</span>
        </div>
        <p className="places--startdate">{props.startDate}</p>
        <p className="places--enddate">{props.endDate}</p>
        <p className="places--description">{props.description}</p>
        <hr className="lineDivider" />
        </div>
    )
}
