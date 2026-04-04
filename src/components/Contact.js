import React from "react"
function Contact(){
    let data=[{id: 1, name:'tomeshwar', age:23},{id:2,name: 'dwarika', age: 23,},{id: 3,name:'bhavesh', age:25}]

    return(
        <div>
            {data.map(i=> (
                <div>
                    <h1>{i.name}</h1>
                    <h1>{i.age}</h1>
                </div>
            ))}
        </div>
       
    )
}
export default Contact