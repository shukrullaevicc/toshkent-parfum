import { Link } from 'react-router-dom';

import Cart from "../../images/cart.png";

const NotInCart = () => {
   return (
      <div className="flex flex-col items-center justify-center mt-[100px]">
         <div className="flex flex-col items-center bg-transparent rounded-lg">
            <img src={Cart} alt="Empty Cart" className="w-48 h-48 object-contain mb-4" />
            <h1 className="text-2xl font-bold text-gray-700 mb-2">Savatch bosh-ku 😕</h1>
            <p className="text-gray-500 text-center mb-6">Borib savatga mahsulotlarni qo'shib keling</p>
            <Link to="/">
               <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-all duration-300 ease-in-out">
                  Asosiy sahifa
               </button>
            </Link>
         </div>
      </div>
   );
}

export default NotInCart;