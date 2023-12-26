import React, { useState } from 'react';
import axios from 'axios';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const sendEmail = async (event) => {
    event.preventDefault();

    try {
      // Assuming you have a Django endpoint to handle contact form submissions
      const response = await axios.post('http://localhost:8000/message/message/', formData);

      // Handle success, e.g., show a success message
      console.log('Message sent successfully:', response.data);

      // Clear the form after successful submission
      setFormData({
        name: '',
        email: '',
        Message: '',
      });
    } catch (error) {
      // Handle errors, e.g., show an error message
      console.error('Error sending message:', error);
    }
  };

  return (
    <div className='w-screen h-screen text-blue-500 bg-black'>
      <div className='w-full h-full flex flex-row gap-10 items-center justify-center  content-center'>
        <form method='post'  onSubmit={sendEmail} className='w-1/2 h-full self-center items-center pl-12 pt-32'>
          <div className='items-center'>
            <div className='pb-3'>
              <input
                type='text'
                name='name'
                placeholder='Name'
                value={formData.name}
                onChange={handleInputChange}
                className='w-1/2 h-12 bg-blue-600 border border-r-8 text-black border-black rounded-md hover:bg-black hover:text-blue-600 hover:border-blue-600'
              />
            </div>
            <div className='pb-3'>
              <input
                type='email'
                name='email'
                placeholder='Enter Your Email'
                value={formData.email}
                onChange={handleInputChange}
                className='w-1/2 h-12 bg-blue-600 border border-r-8 text-black border-black rounded-md hover:bg-black hover:text-blue-600 hover:border-blue-600'
              />
            </div>
            <div className='pb-8'>
              <textarea
                name='message'
                placeholder='Enter Your messages'
                value={formData.Message}
                onChange={handleInputChange}
                className='w-1/2 h-32 bg-blue-600 border border-r-8 text-black border-black rounded-md hover:bg-black hover:text-blue-600 hover:border-blue-600'
              />
            </div>
            <div>
              <button
                type='submit'
                className='bg-blue-600 border border-r-8 border-black rounded-md hover:bg-black hover:text-blue-600 hover:border-blue-600 text-black w-1/2 h-12'
              >
                Send
              </button>
            </div>
          </div>
        </form>
        <div>
          <iframe
            src='https://www.google.com/maps/d/u/0/embed?mid=1xHkqT4b0eM0forH8h6-KLyzGDq8q2sc&ehbc=2E312F'
            width='640'
            height='480'
            title='Google Maps'
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;
