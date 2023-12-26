import React from 'react'
import Person from './person.jpg'
import Footer from './Footer'

function About() {
  return (
    <div className=' w-full h-full bg-black text-blue-600'>


<div className='flex flex-row gap-10 pl-16'> 
<p className='  w-1/3 text-xl'> <p className=' text-4xl'>About </p>
Welcome to my website dedicated to the seamless experience of buying and selling homes! As a dedicated software engineering student at Debrebirhan University, I have combined my passion for technology with the exciting world of real estate.</p>
 
<div className='  pt-48 w-1/2'> <p className=' font-bold text-xl'> Whether you are in search of a new home or looking to sell your current property, I invite you to explore the listings and features of this site. It's not just a platform; it's a digital space where the journey of finding or selling a home is simplified and elevated through the power of technology.
</p>
<p>On this platform, you'll find a user-friendly interface designed to facilitate the process of finding and acquiring your dream home. Leveraging my academic background, I've integrated cutting-edge technologies to provide a modern and efficient platform for both buyers and sellers.</p>
<div className='flex flex-row gap-20 pt-12 pl-24 pb-36'> <div>
<ul> See all products  </ul>
<ul> See each home internal and external  </ul>
<ul> it have detailed information </ul>
  </div>
 
  
  </div>

</div>

<div className='w-1/2 h-full  pr-14' >
<img src={Person} alt='opps' className='  object-cover max-h-fit'/>

  
</div>

</div>



    </div>
  )
}

export default About