// Product.js
import './Product.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Fullinfo from './Fullinfo'
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


function Product() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Function to fetch data from the Django API
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/homes/');
        setData(response.data);
        // console.log(response)
      } catch (error) {
        console.error('Error fetching data:', error);
        
      }
    };

    fetchData();
  }, []); 

  // Display only the first three items
  const displayedData = data.slice(0, 3);

  return (
    
    <div className='w-screen pt-6 h-screen text-black bg-black flex flex-col items-center content-center justify-center'>
      <div className='  w-4/5 h-4/5 flex flex-row gap-6'>
        {displayedData.map((item) => (
          <div key={item.id} className='bg-blue-600 border border-r-8 text-black border-black rounded-md cursor-pointer hover:bg-black hover:text-blue-600 hover:border-blue-600  flex flex-col'>
            <img src={item.photo_of_out_view} alt={`Product ${item.id}`} className=' h-full' />
            <div className='flex flex-row   items-end gap-8 p-4'>
              <div className='text-left'><BathtubIcon/> {item.bathrooms}</div>
              <div className='text-left'><HotelIcon/> {item.baderoom}</div>
              <div className='text-left'> <AttachMoneyIcon/> {item.price}</div>
            </div>
          </div>
        ))}
      </div>
      <div className='w-1/3 pt-6'>
  <Link to={`/Fullinfo`}>
    <button onClick={() => <Fullinfo />} className='w-full bg-blue-600 border border-r-8 border-black rounded-md hover:bg-black hover:text-blue-600 hover:border-blue-600 h-12'>
      See all products
    </button>
  </Link>
</div>

    </div>
  );
}

export default Product;
