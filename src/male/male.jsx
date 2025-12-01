import Mfcards from '../mfcards/Mfcards'
export default function Male(){
    return(
        <>
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12 mt-12">Male Collectionr </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mx-auto w-fit mt-8">
            <Mfcards src='https://i5.walmartimages.com/asr/90e0cba2-fdff-49fb-9a8f-12316274a616.c0086c703087fdc8965ab67138220cbb.jpeg' title="Zip Polo" prc={'$11'}/>
            <Mfcards src='https://m.media-amazon.com/images/I/81FxQ1WB9qL._AC_SL1500_.jpg' title="Polo" prc={"$16"} />
            <Mfcards src='https://jayblancofficial.com/wp-content/uploads/2021/09/T-Shirt-Black-Oversize-Basic.jpg' title="Over size" prc={"$17"} />
            <Mfcards src='https://img4.dhresource.com/webp/m/260x260/f3/albu/ry/s/04/2409dcad-907c-4504-8997-b2e3a97241c0.jpg' title="Slim fit"  prc={"$26"}/>
            <Mfcards src='https://m.media-amazon.com/images/I/61NMlZz2joL._AC_UY1000_.jpg' title="Shirt"  prc={"$26"}/>
        </div>
        </>
    )
}
