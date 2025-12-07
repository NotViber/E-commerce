import { Link } from 'react-router-dom';
import Card from '../components/Card';
import Bestselling from '../colection/bestselling';

export default function New(){

    return(
        <>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-9 mx-auto w-fit">

        <Link to="/summer">
        <Card src="https://blog.beyoung.in/wp-content/uploads/2020/03/long_skirt_with_crop_top_indian_summer_3-min-931x1024.jpg" title="Summer" />
        </Link>
        <Link to="/winter">
        <Card src="https://cdn.shopify.com/s/files/1/0012/7339/7332/files/12_Men_s_Winter_Coats_To_Keep_Him_Warm_This_Year_-_Society19_1024x1024.jpg?v=1673221195" title="Winter" />
        </Link>
        <Link to="/sport">
        <Card src="https://img.freepik.com/free-photo/man-posing-stairs-while-wearing-athletic-wear_23-2148773866.jpg" title="Sport" />
        </Link>
        
        </div>
        <div>
        <Bestselling/>
        </div>
        </>
    )
}
