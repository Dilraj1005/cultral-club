import Carousel1 from "./Carousel1";

const slides=[
    {
        images:`./src/images/img17.jpg`,
    },
    {
        images:`./src/images/img15.jpg`,
    },
    {
        images:`./src/images/img5.jpg`,
    },
    {
        images:`./src/images/img27.jpg`,
    },
    {
        images:`./src/images/img29.jpg`,
    },
    {
        images:`./src/images/img26.jpg`,
    },
    {
        images:`./src/images/img21.jpg`,
    },
    {
        images:`./src/images/img23.jpg`,
    },
    {
        images:`./src/images/img25.jpg`,
    },
//    "https://i.ibb.co/ncrXc2V/1.png",
//     "https://i.ibb.co/B3s7v4h/2.png",
//     "https://i.ibb.co/XXR8kzF/3.png",
//    " https://i.ibb.co/yg7BSdM/4.png",
 ];

 export default function Handler(){
    return(
        
        <main className='A'>
            <div className='max-w-lg'>
                <Carousel1 autoSlide={true} autoSlideInterval={1000}>
                    {slides.map((s)=>(
                        <>
                        <img src={s.images} className="h-[420px] w-full m-2"/>
                        
                        
                        
                        </>

                    ))

                    }
                </Carousel1>
            </div>
        </main>
     
    )
}
