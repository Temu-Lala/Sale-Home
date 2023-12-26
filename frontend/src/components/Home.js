import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import House from './house.jpg'
import House2 from './house2.jpg'
import Product from './Product';
import About from './About'
import Contact from './Contact';
import Footer from './Footer';
import House3 from './house3.jpg'


import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function Home() {
  return (
    <div className='w-screen h-screen bg-black text-yellow-50 relative'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 105500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper bg-black"
      >
        <SwiperSlide>
        <div className='relative w-full h-full'>
            <img src={House} alt="Slide 1" className="w-full h-96 object-cover" />
            
            <div className='absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center p-8 text-center text-blue-600 text-xl'>
           <div className=' w-2/3 h-80'>
           <p className='text-4xl font-bold  font-serif '>
What Kinds of House Do you Need    It is The Perfect Place for you             </p>
              <p>
                This is your centered text. It can span multiple lines. Adjust the content as needed.
              </p>
           </div>
             
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='relative w-full h-full'>
            <img src={House2} alt="Slide 1" className="w-full h-96 object-cover" />
            
            <div className='absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center p-8 text-center text-blue-600 text-xl'>
           <div className=' w-2/3 h-80'>
           <p className='text-4xl font-bold  font-serif '>
What Kinds of House Do you Need    It is The Perfect Place for you             </p>
              <p>
                This is your centered text. It can span multiple lines. Adjust the content as needed.
              </p>
           </div>
             
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='relative w-full h-full'>
            <img src={House3} alt="Slide 1" className="w-full h-96 object-cover" />
            
            <div className='absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center p-8 text-center  text-xl'>
           <div className=' w-2/3 h-80'>
           <p className='text-4xl font-bold  font-serif '>
What Kinds of House Do you Need    It is The Perfect Place for you             </p>
              <p>
                This is your centered text. It can span multiple lines. Adjust the content as needed.
              </p>
           </div>
             
            </div>
          </div>
        </SwiperSlide>
        {/* Add more SwiperSlides as needed */}
      </Swiper>
      <Product/>
      <About/>
     
      <Contact/>
     <Footer/>
    </div>
  );
}

export default Home;
