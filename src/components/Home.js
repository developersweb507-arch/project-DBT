import React from "react";

function Home() {
    let data = [{ id: 1, name: 'tomeshwar', age: 23 }, { id: 2, name: 'dwarika', age: 23 }, { id: 3, name: 'bhavesh', age: 25 }]
    return (
        <div>
            {data.map(i => (
                <div> 
                 <h1>{i.id}</h1>
                 <h2>{i.name}</h2>
                </div>
            ))}
                </div>
            )
        }
export default Home