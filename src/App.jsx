import './App.css'
import { Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import Nav from './Nav/nav'
import Home from './Home/home'
import Foot from './footer/Footer'
import Male from './male/male'
import Female from './female/Female'
import Summer from './colection/summer'
import Winter from './colection/winter'
import Sport from './colection/sport'
import Bestselling from './colection/bestselling'
import ProductDetails from './components/ProductDetails'
import Cart from './components/Cart'
import Cap from './accsisoris/caps'
import Jeans from './accsisoris/jeans'
import Bag from './accsisoris/bag'
import Bracelet from './accsisoris/Bracelet'
import Socks from './accsisoris/socks'
function App() {

  return (
    <CartProvider>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/male" element={<Male />} />
        <Route path="/female" element={<Female />} />
        <Route path='/summer' element={<Summer/>}/>
        <Route path='/winter' element={<Winter/>}/>
        <Route path='/sport' element={<Sport/>} />
        <Route path='/bestselling' element={<Bestselling/>} />
        <Route path='/details' element={<ProductDetails/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/cap' element={<Cap/>}/>
        <Route path='/jeans'element={<Jeans/>}/>
        <Route path='/bag' element={<Bag/>}/> 
        <Route path='/bracelet' element={<Bracelet/>}/>
        <Route path='/socks' element={<Socks/>}/>
      </Routes>
      <Foot />
    </CartProvider>
  )
}

export default App
