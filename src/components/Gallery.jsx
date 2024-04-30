import "./index.css";
 import Slider from "react-slick";
 import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
 

 
 function Gallery(){


    const settings = {
        dots:true,
        infinite:true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
      };
    return(
       
        
    <div className="w-3/4, m-auto ">
        <div className="mt-20 mb-20 ms-20 me-20">
        <Slider {...settings}>
            {data.map((d)=>(
                
                <div className="bg-white h-[450px] rounded-xl text-black ">
                <div  className=" h-56 rounded-t-xl bg-indigo-500 flex justify-center items-center">
                <img src={d.images} alt="hi" className="h-44 w-44 rounded-full"/>

                </div>
                <div className="flex flex-col justify-center items-center gap-4 p-4">
                    <p className="text-xl font-semibold">{d.name}</p>
                    <p>{d.class}</p> 
                    <button className="bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl">read more</button>

                </div>
                </div>
            )

            )}
          </Slider>
        </div>

  
        </div>
        
    );
}
export default Gallery;
const data = [
    {
    name:`priyanka `,
    class:`btech (ece)`,
    images:`/src/images/img1.jpg`,
    },
    {
        name:`priyanka `,
        class:`btech (ece)`,
        images:`/src/images/img1.jpg`,
        },
        {
            name:`priyanka `,
            class:`btech (ece)`,
            images:`/src/images/img1.jpg`,
            }, {
                name:`priyanka `,
                class:`btech (ece)`,
                images:`/src/images/img1.jpg`,
                },
                {
                    name:`priyanka `,
                    class:`btech (ece)`,
                    images:`/src/images/img1.jpg`,
                    },
                    {
                        name:`priyanka `,
                        class:`btech (ece)`,
                        images:`/src/images/img1.jpg`,
                        },
            

];
