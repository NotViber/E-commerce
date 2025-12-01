import MfCard from '..//mfcards/Mfcards.jsx'

export default function Bestselling(){

    return (
        <div className=" py-14 px-4">
            
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Best Selling Collection</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mt-10">
                    <MfCard src="https://fashionjackson.com/wp-content/uploads/2017/05/Fashion-Jackson-Wearing-White-Tank-The-Frankie-Shop-Corrin-Ivory-Wide-Leg-Pants-The-Row-Ginza-Black-Sandals-Bottega-Veneta-Jodie-Teen-Black-Handbag-Quiet-Luxury-Summer-Outfit-Street-Style-1.jpg" title="Zara high-waisted" prc="$29" rating={4.8}/>
                    <MfCard src="https://i.ebayimg.com/images/g/ZR0AAOSwGDpnJRii/s-l1200.jpg" title="Teddy coat" prc="$80" rating={4.9}/>
                    <MfCard src="https://static.nike.com/a/images/t_web_pdp_936_v2/f_auto/u1zdvupiwoyyilv7pohm/M+NSW+TEE+JUST+DO+IT+SWOOSH.png" title="Nike shirt" prc="$39" rating={4.7}/>
                    <MfCard src="https://cdn-img.prettylittlething.com/c/e/f/8/cef8d3a96e8c9c426be36ec0f091c9d39372b0aa_CNF2360_2_prettylittlething_black_logo_high_waisted_cuffed_joggers.jpg?imwidth=600" title='Sweatpants' prc="$50" rating={4.6}/>
                    <MfCard src="https://img01.ztat.net/article/spp-media-p1/31c7cc3815644c53a87a0e3002d4c519/c390441a4d4b4a2b82f0cdd6e42a0412.jpg?imwidth=1800" title="Sleeveless" prc="$34" rating={4.8}/>
                </div>
            </div>
        </div>
    );
}
