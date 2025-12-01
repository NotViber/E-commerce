export default function CircleCard({src ,title}){
    return(
        <div className="flex flex-col items-center text-center p-3 transition-transform duration-300 cursor-pointer hover:scale-110">
            <img src={src} alt={title} className="rounded-full w-[120px] h-[120px] object-cover border-4 border-gray-300 shadow-lg" />
            <h2 className="mt-4 text-lg font-bold text-gray-800">{title}</h2>
        </div>
    )
}
 