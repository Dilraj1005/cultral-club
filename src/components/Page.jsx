import Carousel from 'react-bootstrap/Carousel';
import img5 from '../images/img5.jpg';
import img19 from '../images/img19.jpg';
import img20 from '../images/img20.jpg';
import img21 from '../images/img21.jpg';
import img8 from '../images/img8.jpg';
import img25 from '../images/img25.jpg';


function Page() {
  return (
    <>
    <h1 className='text-5xl  text-center p-8 text-white'>EVENTS</h1>
    <Carousel className='h-[100vh]'>
      <Carousel.Item>
        <img src={img5} className='h-[600px] w-[80%] ml-[150px]' />
      
      </Carousel.Item>



      <Carousel.Item>
         <img src={img19}  className='h-[600px] w-[75%] ml-[160px]'/>
       
      </Carousel.Item>



      <Carousel.Item>
      <img src={img20} className='h-[600px] w-[75%] ml-[160px]' />
       
      </Carousel.Item>

      <Carousel.Item>
      <img src={img21}  className='h-[600px] w-[75%] ml-[160px]' />
       
      </Carousel.Item>


      <Carousel.Item>
      <img src={img8} className='h-[600px] w-[75%] ml-[160px]' />
       
      </Carousel.Item>


      <Carousel.Item>
      <img src={img25} className='h-[600px] w-[75%] ml-[160px]' />
       
      </Carousel.Item>
    </Carousel>
    </>
  );
}

export default Page;