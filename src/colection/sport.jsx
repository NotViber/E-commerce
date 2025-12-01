import MfCard from '..//mfcards/Mfcards.jsx'
export default function Sport(){
return (
        <div className="min-h-screen  py-12 px-4">
            
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Sport Collectionr </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto w-fit mt-8">
                    <MfCard src='https://m.media-amazon.com/images/I/51FwzitgW5L._AC_UY1000_.jpg' title="Basketball Jersey " prc="$30" rating={parseFloat((Math.random() * 2 + 3).toFixed(1))}/>
                    <MfCard src='https://escollection.es/27028-superlarge_default/ts160-fitness-plain-tank-top.jpg' title="Tank Top " prc="$28" rating={parseFloat((Math.random() * 2 + 3).toFixed(1))}/>
                    <MfCard src='https://pvot-apparel.com/cdn/shop/files/Compressiont-shirts_IKKI_5.jpg?v=1696433122&width=2048' title="Pvot Compression T-Shirt " prc="$32" rating={parseFloat((Math.random() * 2 + 3).toFixed(1))}/>
                    <MfCard src='https://m.media-amazon.com/images/I/51YxW4Rm3oL._AC_SL1000_.jpg' title="long-Sleeve Compression " prc="$28" rating={parseFloat((Math.random() * 2 + 3).toFixed(1))}/>

                </div>
            </div>
        </div>
    );
}