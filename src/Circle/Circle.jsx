import { Link } from "react-router-dom"
import CircleCard from "./CircleCard"
export default function Circle(){
    return(
        <>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5" >
            <Link to="/cap">
            <CircleCard src='https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/025994/01/fnd/EEA/fmt/png/Essentials-Metal-PUMA-Cat-Baseball-Cap'title='Cap'/>
            </Link>
            <Link to="/jeans">
            <CircleCard src='https://kimesranch.com/cdn/shop/files/Mens-Straight-Fit-cowboy-cut-jeans-kimes-ranch.jpg?v=1737047277&width=1000'title='Jeans'/>
            </Link>
            <Link to='/bag'>
            <CircleCard src='https://hammerandfield.com.au/cdn/shop/files/Workwear_Backpack_Black_1_2048x2048.jpg?v=1716175066'title='Bag'/>
            </Link>
            <Link to="/bracelet">
            <CircleCard src='https://www.soremi-jewellery.co.uk/cdn/shop/files/MensBracelets_2.jpg?v=1698406372'title='Bracelet'/>
            </Link>
            <Link to='/socks'>
            <CircleCard src='https://www.gowithsocks.com/cdn/shop/files/retro-college-socks-for-women.webp?v=1762457535'title='Socks'/>
            </Link>
        </div>
        </>
    )
}
