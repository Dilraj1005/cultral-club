import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import img1 from '../images/img1.jpg' 
import img2 from '../images/img2.jpg' 
import img3 from '../images/img3.jpg' 

const Carousels = () => {
  return (

    <>
    {/* <div classNameName=' bg-slate-200 w-[100%] h-[100] border-transparent '>
    <Carousel classNameName='  '  >
    <Carousel.Item>
      <img style={{height:'500px', width:'900px'}} classNameName='d-block ml-[135px]  ' src={img1} text="First slide" />
      <Carousel.Caption>
       
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <img style={{height:'500px',width:'900px'}}  classNameName='d-block  ml-[135px] ' src={img2} text="Second slide" />
      <Carousel.Caption>
        
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <img style={{height:'500px',width:'900px'}}  classNameName='d-block  ml-[135px]  ' src={img3} text="Third slide" />
      <Carousel.Caption>
       
       
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>

  


  </div> */}


  <div id="demo" className="carousel slide "  data-bs-ride="carousel" >

{/* <!-- Indicators/dots --> */}
<div className="carousel-indicators">
  <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
  <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
  <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
</div>

{/* <!-- The slideshow/carousel --> */}
<div className="carousel-inner h-[600px] w-[900px] mx-[120px] ">
  <div className="carousel-item active" >
    <img src={img1} alt="" className="d-block w-100 h-[600px] w-[900px] mx-[10px]  " />
  </div>
  <div className="carousel-item">
    <img src={img2} className="d-block w-100 h-[600px] w-[900px] mx-[10px]" />
  </div>
  <div className="carousel-item">
    <img src={img3} className="d-block w-100 h-[600px] w-[900px] mx-[10px]" />
  </div>
</div>

{/* <!-- Left and right controls/icons --> */}
<button className="carousel-control-prev "  type="button" data-bs-target="#demo" data-bs-slide="prev">
  <span className="carousel-control-prev-icon bg-stone-700 rounded-full m-1"></span>
</button>
<button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
  <span className="carousel-control-next-icon bg-stone-700 rounded-full m-1"></span>
</button>
</div>


  </>
  
  )
}

export default Carousels