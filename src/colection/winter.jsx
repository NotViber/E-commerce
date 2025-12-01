import MfCard from '..//mfcards/Mfcards.jsx'
export default function Winter(){
    
    return (
        <>
            <div className="min-h-screen py-12 px-4">
                
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Winter Collection</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto w-fit mt-8">
                        <MfCard src='https://www.robertwstolz.com/cdn/shop/products/austrian.loden.coats-4_5be15c78-e673-4c25-ab42-5a8dfbb4a545_1200x.jpg?v=1630952566' title='Teddy coat' prc="$60" rating={parseFloat((Math.random() * 2 + 3).toFixed(1))}/>
                        <MfCard src='https://invincible.in/cdn/shop/products/IMG_0757.jpg?v=1653303105' title='Hoody' prc="$56" rating={parseFloat((Math.random() * 2 + 3).toFixed(1))}/>
                        <MfCard src='https://basiclook.com/cdn/shop/files/long-sleeve-top-women-the-basic-look-520832.jpg?v=1721301149' title='Long Sleeve Top' prc="$47" rating={parseFloat((Math.random() * 2 + 3).toFixed(1))}/>
                        <MfCard src='https://m.media-amazon.com/images/I/61F1GgxmJ-L._AC_UY1000_.jpg' title='Leather jacket' prc="$78" rating={parseFloat((Math.random() * 2 + 3).toFixed(1))}/>
                        <MfCard src='https://kaicollections.com/cdn/shop/files/TNS_4640.jpg?v=1731915401&width=2000' title='Black Varsity Jacket' prc="$68" rating={parseFloat((Math.random() * 2 + 3).toFixed(1))}/>
                    </div>
                </div>
            </div>
        </>
    );
}
