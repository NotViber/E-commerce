import MfCard from '../mfcards/Mfcards.jsx'
export default function Jeans(){
    return(
        <div className='py-14 px-4 min-h-screen'>
             <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Jeans</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 justify-items-center">
           
            <MfCard src="https://lauras-boutique.com/cdn/shop/files/406C5E17-9993-49BC-9B47-A36C224F0CCF_5000x.jpg?v=1708118169" title="Alexia Denim Cargo Pants" prc="$50" rating="4.2" />
            <MfCard src="https://www.fitjeans.com/cdn/shop/files/fitjeans-baggy-xxs-womens-baggy-fitjeans-distorted-blue-53713677386056.jpg?v=1754326057"  title=" Baggy - Distorted Blue" prc="$50" rating="4.2"  />
            <MfCard src="https://m.media-amazon.com/images/I/51uFsmwra+L._AC_UY1100_.jpg" title="Tommy Jeans Claire high rise wide leg jeans" prc="$55" rating="4.7" />
            <MfCard src="https://www.fitjeans.com/cdn/shop/files/fitjeans-baggy-xxs-regular-womens-baggy-fitjeans-heavy-washed-black-52216482890056.jpg?v=1754326042" title="Baggy - Heavy Washed Black" prc="$60" rating="4.4" />
            <MfCard src="https://www.fitjeans.com/cdn/shop/files/DSC1447.jpg?v=1758703929" title="Baggy Ripped" prc="$48" rating="4.6"  />
            <MfCard src="https://littleboxindia.com/cdn/shop/files/Men_s_Casual_Street_Flap_Pocket_Loose_Straight_Leg_Cargo_Denim_Jeans_Plain_Long_Distressed_Straight_Leg_Cargo_Light_Blue.jpg?v=1742193836" title="Y2k Cargo Jeans" prc="$48" rating="4.6"  />
        </div>
        </div>
    )
}
