import MfCard from '../mfcards/Mfcards.jsx'
export default function Bracelet(){
    return(
        <div className='py-14 px-4 min-h-screen'>
             <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Bracelets </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 justify-items-center ">
            <MfCard src="https://i-watch.co/cdn/shop/collections/Men_s_Bracelets.png?v=1692706184&width=750" title=" Lava Rocks Bracelet " prc="$25" rating="4.5" />
            <MfCard src="https://i.etsystatic.com/18841598/r/il/9a3e26/5136670827/il_570xN.5136670827_95hw.jpg" title="Sterling Silver Bracelet" prc="$20" rating="4.2" />
            <MfCard src="https://www.vikingwarriorshirts.com/cdn/shop/files/fenrir-sun-eater-wolf-of-ragnarok-bracelet-viking-jewelry-1_1200x.jpg?v=1750432296" title="Stainless Steel Viking Wolf Head Bracelet" prc="$30" rating="4.7" />
            <MfCard src="https://i5.walmartimages.com/asr/18f57cd5-7af1-412d-93cb-09ffcd1d85d8.6b6948ba84c06aad8f3f3d9dfbb75956.jpeg" title="Black Braided Leather Bracelet" prc="$28" rating="4.4" />
            <MfCard src="https://zink.me/cdn/shop/collections/MG_9023.jpg?v=1677051871" title="Black Woven Leather Bracelet" prc="$28" rating="4.3" />
            <MfCard src="https://assets.myntassets.com/w_412,q_30,dpr_3,fl_progressive,f_webp/assets/images/21720754/2023/1/27/8eb96ba9-1a15-4853-9a04-45d1e2e4f0701674810479213GIVAMenSilverBracelet1.jpg  " title=" 925 Sterling Silver Curb Chain Bracelet " prc="$28" rating="4.8" />
        </div>
        </div>
    )
}
