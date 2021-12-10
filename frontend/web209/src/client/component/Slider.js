import  Carousel  from 'react-bootstrap/esm/Carousel'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
const Slider = () => {
    return (
        <div className="mb-5">
            <Carousel >
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://iweb.tatthanh.com.vn/pic/12/banner/c91b2f25bbc1739f2ad0(1).jpg"
            alt="First slide"
          />
      
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://iweb.tatthanh.com.vn/pic/12/banner/163561683_876278912934832_7497640669404054062_o.jpg.png"
            alt="Second slide"
          />
      
        
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://iweb.tatthanh.com.vn/pic/12/banner/Untitled-2(1).png"
            alt="Third slide"
          />
    
        </Carousel.Item>
      </Carousel>
        </div>
        
    )
}

export default Slider
