
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';



import Footer from './Components/Footer/Footer';

import Contact from './Pages/Contact';

import About from './Pages/About/About';
import Items from './Pages/Products1';

import interior_paints from './Components/Assets1/interior_paints.png';
import exterior_paints from './Components/Assets1/exterior_paints.png';
import primers from './Components/Assets1/primers.png';
import finishes from './Components/Assets1/finishes.png';

import Hero4 from './Components/Hero4/Hero4';



function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      
      <Routes>
        <Route path='/' element={<Shop />} />
        <Route path='/product' element={<Items />} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/product' element={<Product />} >
          <Route path=':productId' element={<Product />} /> 
        </Route>
       

        
        <Route path='/interior-paints' element={<ShopCategory banner={interior_paints} category="interior"/>} />
        <Route path='/exterior-paints' element={<ShopCategory banner={exterior_paints} category="exterior" />} />
        <Route path='/primers' element={<ShopCategory banner={primers} category="primers" />} />
        <Route path='/finishes' element={<ShopCategory banner={finishes} category="finishes" />} />
       
        <Route path='/hero4' element={<Hero4 />} />
      </Routes>
     
      <Footer />
      
      </BrowserRouter>
    
     

      
    </div>
  );
}

export default App;
