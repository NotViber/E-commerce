
import { Link } from 'react-router-dom'
import New from './new'
import Circle from '../Circle/Circle'
export default function Home({ onMaleClick, onFemaleClick }){
    return (<>
    <div className="flex flex-col md:flex-row">
      <div className="relative w-full md:w-1/2 h-96 md:h-175">
        <img src="https://www.apetogentleman.com/wp-content/uploads/2024/08/all-black-outfits2.jpg" alt="main pic" className="w-full h-full object-cover" />
        <Link to="/male">
        <button onClick={onMaleClick} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-transparent text-white px-4 py-2 rounded cursor-pointer outline outline-white hover:bg-white hover:text-black transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl">Male</button>
        </Link>
      </div>
      <div className="relative w-full md:w-1/2 h-96 md:h-175">
        <img src="https://i.pinimg.com/736x/35/36/2f/35362f8ea0e573d3f1949b9010239adb.jpg" alt="f-pic" className="w-full h-full object-cover" />
        <Link to="/female">
        <button onClick={onFemaleClick} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-transparent text-white px-4 py-2 rounded cursor-pointer outline outline-white hover:bg-white hover:text-black transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl">Female</button>
        </Link>
      </div>

    </div >
    <div>
      <Circle/>
    </div>
        <div >
        <h1 className= 'text-4xl font-bold  mt-4 text-center mb-4'>Our collections</h1>
        </div>
      <div>
      <New/>
      </div>
    </>
)
}
