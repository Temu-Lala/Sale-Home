import { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Footer from './Footer';
import { Swiper, SwiperSlide } from 'swiper/react';
import './AllInfo.css'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import BathtubIcon from '@mui/icons-material/Bathtub';
import AirlineSeatIndividualSuiteIcon from '@mui/icons-material/AirlineSeatIndividualSuite';
import HotelIcon from '@mui/icons-material/Hotel';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import TelegramIcon from '@mui/icons-material/Telegram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import GitHubIcon from '@mui/icons-material/GitHub';


// import required modules
import { Mousewheel, Pagination } from 'swiper/modules';

const AllInfo = () => {

  const { id } = useParams()

  const [productData, setProductData] = useState(null);

  useEffect(() => {
    // Function to fetch data based on the received ID
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/homes/${id}/`);
        setProductData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Call the function to fetch data when the component mounts
    fetchData();
  }, [id]); 

  return (
    <div className='w-screen h-screen'>
    {productData ? (
      <div className='flex w-[80%] h-[80%] items-center mx-auto flex-row mt-24 gap-12 '>
        <div className='bg-blue-600 border border-r-8 border-black rounded-md hover:bg-black hover:text-blue-600 hover:border-blue-600 w-1/2 h-full  flex-1 '>            


        <Swiper
        direction={'vertical'}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>             <img src={productData.photo_of_out_view} alt={"photos"} className='w-full h-full '   onError={() => console.error(`Error loading image for Product ${productData.id}`)}/>
</SwiperSlide>

<SwiperSlide>             <img src={productData.photo_of_salon_view} alt={"photos"} className='w-full h-full '   onError={() => console.error(`Error loading image for Product ${productData.id}`)}/>
</SwiperSlide>
<SwiperSlide>             <img src={productData.photo_of_baedroom_view} alt={"photos"} className='w-full h-full '   onError={() => console.error(`Error loading image for Product ${productData.id}`)}/>
</SwiperSlide>
<SwiperSlide>             <img src={productData.photo_of_bathroom_view} alt={"photos"} className='w-full h-full '   onError={() => console.error(`Error loading image for Product ${productData.id}`)}/>
</SwiperSlide>
<SwiperSlide>             <img src={productData.photo_of_kichn_view} alt={"photos"} className='w-full h-full '   onError={() => console.error(`Error loading image for Product ${productData.id}`)}/>
</SwiperSlide>

        
      </Swiper>
        
        
        
        
 </div>
        <div className=' w-1/2 h-full flex-1  text-blue-600 bg-black '> <p className='text-xl font-bold'>{productData.name}</p> 
      
      
        
      
       <div className=' flex flex-row   gap-24 pb-6 justify-center '>
        <div className=' gap-12'>
        <div className='flex gap-6'>  <p><HotelIcon/></p>  <p className=' font-bold text-xl '>  {productData.baderoom}</p>
</div>
        <div className='flex gap-6'><p><BathtubIcon/></p>   <p className=' font-bold text-xl'>{productData.bathrooms}</p></div>
        <div className='flex gap-6'><p></p> <AttachMoneyIcon/> <p className=' font-bold text-xl'> {productData.price}</p> <p><AttachMoneyIcon/></p></div>
       

        
        <div className='flex gap-6'> <p>status</p><p className=' font-bold text-xl'> {productData.status}</p></div>
        </div>
        <div>
        <div className='flex gap-6'><p><LocationCityIcon/></p> <p className=' font-bold text-xl'>   {productData.city}</p></div>
        
        <div className='flex gap-6'><p>address</p> <p className=' font-bold text-xl'>  {productData.address}</p></div>
       
       
        <div className='flex gap-6'> <p>year_built</p><p className=' font-bold text-xl'>   {productData.year_built}</p></div>
        <div className='flex gap-6'> <p>square_footage</p> <p className=' font-bold text-xl'>{productData.square_footage}</p></div>
        </div>
        </div>
       <p className=' font-bold'>Description</p> 
        
        <div className=' scrollbar w-full h-2/3 overflow-y-scroll   break-words bg-transparent'> <p> {productData.description}</p></div>

        
        </div>
      </div>
    ) : (
      <p></p>
    )}
   
  </div>
  )
}

export default AllInfo