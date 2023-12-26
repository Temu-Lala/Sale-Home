import './App.css';
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Product from './components/Product'
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import Fullinfo from './components/Fullinfo';
import AllInfo from './components/AllInfo';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className=' wholepage flex flex-col  '>
      
     
      <BrowserRouter>
      <Navbar/>
     
      
     
      <Routes>
        <Route index element={<Home/>} />
        <Route path='Product' element = {<Product/>}/>
        <Route path='About' element = {<About/>}/>
        <Route path='Contact' element = {<Contact/>}/>
        <Route path='Fullinfo' element = {<Fullinfo/>}/>
        <Route path='AllInfo/:id' element = {<AllInfo />}/>
        

      </Routes>
      
     
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
