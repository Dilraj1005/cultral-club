import img_20 from '../images/img20.jpg';
import img_18 from '../images/img18.jpg';

import img_17 from '../images/img17.jpg';
import img_8 from '../images/img8.jpg';
import img_37 from '../images/img37.jpg';
import img_38 from '../images/img38.jpg';
import img13 from '../images/img13.jpg';
import img14 from '../images/img14.jpg';
import img_15 from '../images/img15.jpg';
import Carousel from './Carousel1';
import UseRefPlayer from './UseRefPlayer';








function Ggrid(){
    return(
        <>
        <h1 className='text-7xl font-semibold text-center mb-20 hover:text-9xl'>GALLERY</h1>
       <div className='flex shadow-lg'>
     {/* <h1 className='text-7xl font-semibold'>GALLERY</h1> */}
       
        < div className='identity w-full max-w-7xl columns-3 gap-3 pb-2 mb-10 mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 '>
        <img src={img_20} className=' scale-80 hover:scale-150'  alt='image2'/>
        <img src={img_18}  className='scale-80 hover:scale-150'alt='image18' />
        <img src={img_17} className='scale-80 hover:scale-150'alt='image17'/>
        <img src={img_8} className='scale-80 hover:scale-150'alt='image8'/>
        <img src={img_37} className='scale-80 hover:scale-150'alt='image37'/>
        <img src={img_38} className='scale-80 hover:scale-150'alt='image38'/>
        <img src={img_15} className='scale-80 hover:scale-150'alt='image15'/>
        <img src={img13} className='scale-80 hover:scale-150'alt='image13'/>
        <img src={img14}className='scale-80 hover:scale-150' alt='image14'/>
        </div>
     
       
</div>
</>

    );
}
export default Ggrid;