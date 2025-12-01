import { useNavigate } from 'react-router-dom';

export default function Card({ src, title, prc }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/details', { state: { src, title, prc } });
  };

  return (
    <div onClick={handleClick} className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer hover:scale-110 hover:shadow-xl transition-all duration-300 border border-gray-200">
      <img src={src} alt={title} className="w-full h-64 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <h2 className="font-light text-xl mt-2 text-center">{prc}</h2>
      
    </div>
  );
}
