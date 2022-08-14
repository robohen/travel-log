import React from "react"
import ReactDOM from "react-dom"
export default function Travel(){
    const places = data.map(item => {
        return (
            <places 
                key={item.id}
                {...item}
            />
        )})
    return(
        <div>
            <Nav/>
            <section className="places-list">
            {places}
            </section>
        </div>
    )
}







ReactDOM.render(<Travel/>, document.getElementById("root"))

