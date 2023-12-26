// Product.js
import './Product.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
import Footer from './Footer';
import './Fullinfo.css'
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
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Call the function to fetch data when the component mounts
    fetchData();
  }, []);

  // Split the data into rows of three


  return (
    <div className='Fullinfo w-screen pt-12 h-screen   text-black bg-transparent flex flex-row items-center content-center justify-center'>
      <div className='   w-4/5 h-4/5 flex flex-row gap-6  overflow-scroll'>
       
          <div className=' flex flex-row gap-16'>
            {data.map((item) => (
              <Link to={`/AllInfo/${item.id}`} key={item.id} className='bg-blue-600 border border-r-8 border-black rounded-md hover:bg-black hover:text-blue-600 hover:border-blue-600 w-1/3 products  flex flex-col h-full'> 
              <div className='text-right '> <button className=''> <AttachMoneyIcon/> {item.status} </button></div>

              <div  className=''>
                <img src={item.photo_of_out_view} alt={"photos"} className='w-full h-full '   onError={() => console.error(`Error loading image for Product ${item.id}`)}/>
                <div className='flex flex-row items-end gap-8 p-4'>
                  <div className='text-left '><AttachMoneyIcon/> {item.price}</div>
                  <div className='text-left '><HotelIcon/> {item.baderoom}</div>
                  <div className='text-left '><BathtubIcon/> {item.bathrooms}</div>
                </div>
              </div>
              </Link>
            ))}
          </div>
      
      </div>
    </div>
  );
}

export default Product;
