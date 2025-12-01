import { useNavigate } from 'react-router-dom';

export default function Cards({src,title,prc,rating}){
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/details', { state: { src, title, prc, rating } });
    };

    return(
        <div onClick={handleClick} className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer hover:scale-110 hover:shadow-xl transition-all duration-300 border border-gray-200 w-full">
            <img src={src} alt={title} className="w-full h-80 object-cover" />
            <div className="p-6">
                <h2 className="text-xl font-semibold text-center">{title}</h2>
                <h2 className="font-light text-2xl mt-2 text-center">{prc}</h2>

            </div>
        </div>
    )
}
