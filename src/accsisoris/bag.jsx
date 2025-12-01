import MfCard from '../mfcards/Mfcards.jsx'
export default function Bag(){
    return(
        <div className='py-14 px-4 min-h-screen'>
             <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Bags</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 justify-items-center">
           
            <MfCard src="https://badworkwear.com.au/cdn/shop/files/bad-everyday-backpack-bag-721864_1024x1024.jpg?v=1739083257" title="Simple Bag" prc="$50" rating="4.2" />
            <MfCard src="https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/14/5535331/2.jpg?2843" title="Printed Backpack" prc="$43" rating="4.7" />
            <MfCard src="https://d2ob0iztsaxy5v.cloudfront.net/product/752048/7520487270_zm.jpg" title="Nike Backpack" prc="$52" rating="4.8" />
            <MfCard src="https://www.footasylum.com/images/products/large/4026203.jpg" title="Nike
Brasilia Duffle Bag" prc="$60" rating="4.4" />
            <MfCard src="https://assets.adidas.com/images/w_1880,f_auto,q_auto/cb3935b2d7e84b428b2f6c0c6d632a79_9366/IP9878_05_hover_standard.jpg" title="Adidas Bag " prc="$38" rating="4.3"  />
            <MfCard src="https://www.jdsports.com.sg/cdn/shop/files/jd_IP9863_a.jpg?v=1753245403&width=500" title="adidas Training Duffel Bag" prc="$48" rating="4.6"  />
        </div>
        </div>
    )
}
