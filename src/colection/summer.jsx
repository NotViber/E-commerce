import MfCard from '..//mfcards/Mfcards.jsx'
export default function Summer(){
    return (
        <div className="min-h-screen  py-12 px-4">
            
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Summer Collectionr </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto w-fit mt-8">
                    <MfCard src="https://fashionjackson.com/wp-content/uploads/2017/05/Fashion-Jackson-Wearing-White-Tank-The-Frankie-Shop-Corrin-Ivory-Wide-Leg-Pants-The-Row-Ginza-Black-Sandals-Bottega-Veneta-Jodie-Teen-Black-Handbag-Quiet-Luxury-Summer-Outfit-Street-Style-1.jpg"title="Zara High-Waisted"prc="$29" rating={4.8} />
                    <MfCard src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSnPDodjf25j5HOaa2E_CdZu9-OGboRsU9OHrkYvXnd0csyLGpe"title=" High-Waisted T-shirt"prc="$38" rating={parseFloat((Math.random() * 2 + 3).toFixed(1))} />
                    <MfCard src="https://m.media-amazon.com/images/I/61BiQ2DF5oL._AC_SL1100_.jpg"title="T-shirt"prc="$54" rating={parseFloat((Math.random() * 2 + 3).toFixed(1))} />
                    <MfCard src="https://bofrike.in/wp-content/uploads/2025/04/leather-jersey-tshirt2.jpg"title="Leather Jersey T-shirt"prc="$89" rating={parseFloat((Math.random() * 2 + 3).toFixed(1))} />
                    <MfCard src="https://styledup.co.uk/cdn/shop/files/black-oversized-football-t-shirt-with-los-angeles-number-slogan-styledup-fashion.jpg?v=1727120299"title="Woman Jersey T-shirt"prc="$64" rating={parseFloat((Math.random() * 2 + 3).toFixed(1))} />
            </div>
        </div>
        </div>
    );
}
