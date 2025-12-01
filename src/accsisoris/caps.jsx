import MfCard from '../mfcards/Mfcards.jsx'
export default function Cap(){
    return(
        <div className='py-14 px-4 min-h-screen'>
             <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Caps </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 justify-items-center ">
            <MfCard src="https://www.nike.ae/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dwe9b4ba5b/nk/a95/0/f/e/d/9/a950fed9_46ee_49c8_ac31_ce64a16c2d76.jpg?sw=2000&sh=2000&sm=fit" title="Nike Cap" prc="$20" rating="4.5" />
            <MfCard src="https://img.hatshopping.com/9Forty-Outline-New-York-Yankees-Cap-by-New-Era-black.67235_rf4.jpg" title="NY Cap" prc="$11" rating="4.2" />
            <MfCard src="https://www.pingeurope.com/media/catalog/category/Ping-golf-womens-caps-and-headwear-750x520.jpg" title="Golf Cap" prc="$30" rating="4.7" />
            <MfCard src="https://scssports.in/cdn/shop/files/BBALL_C_3S_A.R._White_JC6286_01_00_standard_535x.jpg?v=1735115342  " title="Adidas Cap" prc="$28" rating="4.4" />
        </div>
        </div>
    )
}
