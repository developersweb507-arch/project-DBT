import React from "react";
function Card({name,Des}){
    return(
        <div style={{border:'2px solid red ', width:'200px',textAlign:'center',backgroundColor:'orange'}}> 
            <h1> {name}</h1>
            <h1>{Des}</h1>
        </div>
    )
}export default Card
// import React from 'react'

// function Card({name,des}) {
//   return (
//     <div style={{border:'2px solid red',width:'200px',textAlign:'center',backgroundColor:'orange'}}>
//         <h2>{name}</h2>
//         <p>{des}</p>
//     </div>
//   )
// }

// export default Card