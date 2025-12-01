import MfCard from '../mfcards/Mfcards.jsx'
export default function Bracelet(){
    return(
        <div className='py-14 px-4 min-h-screen'>
             <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Socks </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 justify-items-center ">
            <MfCard src="https://mizuno.com.au/cdn/shop/products/SH_J2GX0055Z77.jpg?v=1755469733" title="Super Short Socks " prc="$15" rating="4.5" />
            <MfCard src="https://soulofsocks.com/cdn/shop/files/Chickenlegblackhighknee_5.jpg?v=1709492674" title="Leg Day Socks" prc="$20" rating="4.2" />
            <MfCard src="https://static.qns.digital/img/p/2/7/9/6/6/1/0/2796610-full_product.jpg" title="Nike Crew Socks" prc="$30" rating="4.7" />
            <MfCard src="https://www.compressport.com/inter/30888-lightbox_default/thick-padded-sock.jpg" title="Shock Absorb Socks" prc="$28" rating="4.4" />
            <MfCard src="https://m.media-amazon.com/images/I/71UdNQguIPL._AC_UY1000_.jpg" title="Football Grip Socks" prc="$34" rating="4.4" />
        </div>
        </div>
    )
}
