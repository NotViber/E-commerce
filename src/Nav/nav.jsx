import { useState } from 'react';
import { Link } from "react-router-dom";
import { useCart } from '../context/CartContext';

export default function Nav({ onHomeClick }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartItems } = useCart();

  return (
    <nav className="bg-white text-black top-0 z-50 shadow-md relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center">
            <Link to="/">
            <img src="./src/assets/L969949-20150519004450.jpg" alt="StreetLook Logo" className='w-12 h-12 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer'/>
            <div className="text-2xl font-bold hover:cursor-pointer ml-2" onClick={onHomeClick}>
              StreetLook
            </div>
            </Link>
          </div>

          <div className="hidden md:flex space-x-8">
            <Link to="/" className='hover:underline hover:decoration-black transition duration-300 ease-in-out'>Home</Link>
            <Link to="/male" className='hover:underline hover:text-blue-500 hover:decoration-blue-500 transition duration-300 ease-in-out cursor-pointer'>Male</Link>
            <a href="#" className="hover:underline hover:decoration-black transition duration-300 ease-in-out">Shop</a>
            <Link to="/female" className='hover:underline hover:text-pink-500 hover:decoration-pink-500 transition duration-300 ease-in-out cursor-pointer'>Female</Link>
          </div>

          <div className="hidden md:flex items-center text-black rounded-md px-2">
            <input
              type="text"
              placeholder="Search"
              className="text-black placeholder-black focus:outline-none px-2 py-1 rounded-md shadow-2xl"
            />
            <button className="ml-2" aria-label="Search">
              🔍
            </button>
          </div>

          <div className="flex items-center space-x-4">
            <Link to="/cart" className="relative hover:cursor-pointer" aria-label="Shopping Cart">
              🛒
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
                  {cartItems.length}
                </span>
              )}
            </Link>

            <button
              className="md:hidden focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? '✖' : '☰'}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden  px-4 py-2 space-y-2">
          <a href="#" className="block hover:text-black">Home</a>
          <a href="#" className="block hover:text-black">Shop</a>
          <a href="#" className="block hover:text-black">Categories</a>
          <a href="#" className="block hover:text-black">About</a>
          <a href="#" className="block hover:text-black">Contact</a>
          <div className="flex items-center rounded-md px-2 mt-2">
            <input
              type="text"
              placeholder="Search"
              className=" text-white placeholder-black focus:outline-none px-2 py-1 rounded-md w-full"
            />
            <button className="ml-2 hover:text-black" aria-label="Search">
              🔍
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
