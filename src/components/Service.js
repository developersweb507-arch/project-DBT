import React from 'react'
import Card from './Card'
function Service() {
  let name ="this is a services in my company"
  let Des ="i provide a best services"
  return (
    <div>
      <Card  name={name} Des={Des}/>
    </div>
  )
}

export default Service