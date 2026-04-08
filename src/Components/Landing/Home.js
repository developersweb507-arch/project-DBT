import React from 'react'
import { Carousel } from 'antd'
import './Home.css'
import Naturpic1 from './Home-img/pic1.png'
import Naturpic2 from './Home-img/pic2.jpg'
import Naturpic3 from './Home-img/pic3.jpg'
import Naturpic4 from './Home-img/pic4.jpg'


function Home() {
  return (
    <div>
      <Carousel autoplay>
        <div>
          <img src={Naturpic1} />
        </div>
        <div>
          <img src={Naturpic2} />
        </div>
        <div>
          <img src={Naturpic3} />
        </div>
        <div>
          <img src={Naturpic4} />
        </div>
      </Carousel>
    </div>
  )
}

export default Home