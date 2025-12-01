import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useCart } from '../context/CartContext';

export default function ProductDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { src, title, prc, rating } = location.state || {};
  const [selectedColor, setSelectedColor] = useState('Red');
  const [selectedSize, setSelectedSize] = useState('M');

  if (!src) {
    return <div className="min-h-screen flex items-center justify-center">No product data found. Please go back and try again.</div>;
  }

  const description = "This is a high-quality product from our collection, perfect for your style. Made with premium materials for comfort and durability.";
  const productRating = rating || 4.5; 

  const colors = ['Red', 'Blue', 'Black', 'Green','white'];
  const sizes = ['S', 'M', 'L', 'XL','XXL'];

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={i <= rating ? 'text-yellow-400' : 'text-gray-300'}>
          ★
        </span>
      );
    }
    return stars;
  };

  const handleAddToCart = () => {
    addToCart({ src, title, prc, rating, color: selectedColor, size: selectedSize });
  };


 
  return (
    <div className="min-h-screen py-12 px-4">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 px-4 py-2 bg-black text-white rounded-full transition-colors cursor-pointer"
      >
        Back
      </button>
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/2">
            <img src={src} alt={title} className="w-full h-96 object-cover" />
          </div>
          <div className="md:w-1/2 p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">{title}</h1>
            <p className="text-xl font-semibold text-gray-700 mb-4">{prc === 'N/A' ? 'Various Prices' : prc}</p>
            <div className="flex items-center mb-4">
              {renderStars(productRating)}
              <span className="ml-2 text-gray-600">({productRating}/5)</span>
            </div>
            <p className="text-gray-600 mb-6">{description}</p>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Color:</h3>
              <div className="flex gap-2">
                {colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 border rounded-lg transition-colors ${
                      selectedColor === color
                        ? 'bg-black text-white border-black cursor-pointer'
                        : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100 cursor-pointer'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Size:</h3>
              <div className="flex gap-2">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 border rounded-lg transition-colors ${
                      selectedSize === size
                        ? 'bg-black text-white  cursor-pointer'
                        : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100 cursor-pointer'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={handleAddToCart}
              className="px-6 py-3 bg-white text-black font-semibold border-1 rounded-lg hover:bg-black 
              hover:text-white transition-colors duration-200 cursor-pointer"
            >
              Add to Cart ({selectedColor}, {selectedSize})
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
