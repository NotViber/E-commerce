export default function Foot(){
    return(
        <footer className="bg-black text-white py-6 mt-10 border-t border-gray-700">
  <div className="max-w-6xl mx-auto px-4 text-center">
    <h2 className="text-2xl font-semibold mb-2">StreetLook</h2>
    <p className="text-gray-400 mb-4">
      © {new Date().getFullYear()} StreetLook. All rights reserved.
    </p>
    <div className="flex justify-center space-x-6">
      <a href="#" className="hover:text-gray-300 cursor-pointer hover:scale-105 transition-transform duration-300">About</a>
      <a href="#" className="hover:text-gray-300 cursor-pointer hover:scale-105 transition-transform duration-300">Contact</a>
      <a href="#" className="hover:text-gray-300 cursor-pointer hover:scale-105 transition-transform duration-300">Privacy Policy</a>
      <a href="#" className="hover:text-gray-300 cursor-pointer hover:scale-105 transition-transform duration-300">Terms</a>
    </div>
  </div>
</footer>

    )
} 