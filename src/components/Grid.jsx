

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "../Components/Grid.css"
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
// import slide_image_18 from "../images/img18.jpg";
// import slide_image_17 from "../images/img17.jpg";
// import slide_image_8 from "../images/img8.jpg";
// import slide_image_13 from "../images/img13.jpg";
// import slide_image_12 from "../images/img12.jpg";
// import slide_image_31 from "../images/img31.jpg";
// import slide_image_36 from "../images/img36.jpg";
// import slide_image_32 from "../images/img32.jpg";
// import slide_image_24 from "../images/img24.jpg";
// import slide_image_37 from "../images/img37.jpg";
// import slide_image_33 from "../images/img33.jpg";
// import slide_image_38 from "../images/img38.jpg";
import slide_image from "../assets/images/img1.jpg";


function Grid() {
    return (
      <div className="container">
        <h1 className="heading"> MOMENTS</h1>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 0,
            stretch:0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ el: '.swiper-pagination', clickable: true }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container"
        >
          <SwiperSlide>
            <img src={slide_image} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image} alt="slide_image" />
          </SwiperSlide>
          {/* <SwiperSlide>
            <img src={slide_image_13} alt="slide_image" />
          </SwiperSlide> */}
          {/* <SwiperSlide>
            <img src={slide_image_12} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_31} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_36} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_32} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_24} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_37} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_33} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_38} alt="slide_image" />
          </SwiperSlide>

   */}
          <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow">
              <ion-icon name="arrow-back-outline"></ion-icon>
            </div>
            <div className="swiper-button-next slider-arrow">
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </div>
    );
  }
  export default Grid;
// function Grid(){
//     return(
//         <>
//         <div className="conatiner">
//             <h1 className="heading">gallery</h1>
//             <Swiper 
//              effect={'coverflow'}
//              grabCursor={true}
//              centeredSlides={true}
//              loop={true}
//              slidesPerView= {'auto'}
//              coverflowEffect={{
//                 rotate: 0,
//                 stretch: 0,
//                 depth: 100,
//                 modifier: 2.5,
//               } }
//               pagination={{el:'.swiper-pagination',clickable:true}}
//               navigation={{
                
//                     nextEl: '.swiper-button-next',
//                     prevEl: '.swiper-button-prev',
//                     clickable:true
               
//               }}
//               modules={[EffectCoverflow,Pagination,Navigation]}
//             className="swiper-container"
//             >
//                 <SwiperSlide>
//                     <img src={slider_image_1 } alt="imgage1"/>
//                 </SwiperSlide>
//                 <SwiperSlide>
//                     <img src={slider_image_1 } alt="imgage1"/>
//                 </SwiperSlide>
//                 <SwiperSlide>
//                     <img src={slider_image_1 } alt="imgage1"/>
//                 </SwiperSlide>
              
//                 <SwiperSlide>
//                     <img src={slider_image_1 } alt="imgage1"/>
//                 </SwiperSlide>
//                 <SwiperSlide>
//                     <img src={slider_image_1 } alt="imgage1"/>
//                 </SwiperSlide>
//                 <SwiperSlide>
//                     <img src={slider_image_1 } alt="imgage1"/>
//                 </SwiperSlide>
//                 <SwiperSlide>
//                     <img src={slider_image_1 } alt="imgage1"/>
//                 </SwiperSlide>
              
//                 <SwiperSlide>
//                     <img src={slider_image_1 } alt="imgage1"/>
//                 </SwiperSlide>
              
              
                
//              <div className="swiper-controler">
//                 <div className="swiper-button-prev slider-arrow">
//                     <ion-icon name="arrow-back-outline"></ion-icon>
//                     <div className="swiper-button-next slider-arrow">
//                     <ion-icon name="arrow-forward-outline"></ion-icon>
//                 </div>
//                 <div className="swiper-pagination"></div>
//              </div>
             
//             </Swiper>
//         </div>
//         </>
//     );
// }
// export default Grid;