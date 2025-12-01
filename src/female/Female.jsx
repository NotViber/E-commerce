import Mfcards from '../mfcards/Mfcards'
export default function Female (){
    return(
        <>
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12 mt-12">Female Collectionr </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mx-auto w-fit mt-8">
                    <Mfcards src='https://m.media-amazon.com/images/I/71X7jGVJhsL.jpg' title="Vest" prc={'$45'}/>
                    <Mfcards src='https://norwaygift.shop/cdn/shop/files/5_75c37519-8f6c-429d-8662-c1dc0794a146.jpg?v=1711128233&width=1445' title="Nor Way shirt" prc={"$39"} />
                    <Mfcards src='https://www.dresscodeme.com/wp-content/uploads/2022/03/gall-TSH10006BK-2.jpg' title="Over size" prc={"$29"} />
                    <Mfcards src='https://m.media-amazon.com/images/I/614kZPsUd0L._AC_UY1000_.jpg' title="Tuber Top"  prc={"$26"}/>
                    <Mfcards src='https://oldnavy.gap.com/webcontent/0059/114/716/cn59114716.jpg' title="Sleeveless Top"  prc={"$37"}/>
                </div>
        </>
    )
}
