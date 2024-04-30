import Carousel2 from "./Carousel2";
const slides=[
   "https://i.ibb.co/ncrXc2V/1.png",
    "https://i.ibb.co/B3s7v4h/2.png",
    "https://i.ibb.co/XXR8kzF/3.png",
   " https://i.ibb.co/yg7BSdM/4.png",
];

 export default function Handler(){
    return(
        
        <main className='A'>
            <div className='max-w-lg'>
                <Carousel2 autoSlide={true} autoSlideInterval={1000}>
                    {slides.map((s)=>(
                        <img src={s}/>

                    ))

                    }
                </Carousel2>
            </div>
        </main>
     
    )
}
