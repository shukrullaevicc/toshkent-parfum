import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { Badge } from "antd";
import { ImEnter } from "react-icons/im";
import { BsCart3, BsTelephoneInbound } from "react-icons/bs"; 
import { AiOutlineSearch, AiOutlineHeart, AiFillFacebook, AiFillInstagram } from "react-icons/ai"; 
import { GiHamburgerMenu } from "react-icons/gi";
import { GrMapLocation } from "react-icons/gr";
import { SiTelegram } from "react-icons/si";
import logo from '../../images/logo.png';
import Container from "../container/Container";

const Navigation = () => {
   const navigate = useNavigate();
   const cartLength = useSelector((state) => state.cart.cart);
   const likedLength = useSelector((state) => state.like.likedItems);

   const handleCategoryClick = (type) => {
      navigate(`/category/${type}`);
   };

   return (
      <div>
         <div className='py-5 bg-gray-100'>
            <Container>
               <div className="flex items-center justify-between">
                  <div className="flex items-center gap-7 text-xs">
                     <div className="flex items-center gap-2">
                        <BsTelephoneInbound className="text-sm text-gray-500"/>
                        <p>+998 (90) 960-57-91</p>
                     </div>
                     <div className="flex items-center gap-2">
                        <GrMapLocation className="text-sm text-gray-500"/>
                        <a href="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d1210.804497026441!2d69.24240220331983!3d41.34046423944407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sDavlat%20universiteti!5e1!3m2!1suz!2s!4v1728221703766!5m2!1suz!2s">
                           Qorasaroy ko'chasi, 5-tupik, 1-uy
                        </a>
                     </div>
                  </div>

                  <div className="flex items-center gap-7">
                     <div className="flex items-center gap-3">
                        <a target="_blank" href="https://www.facebook.com/toshkentparfume"><AiFillFacebook className="text-2xl text-gray-400 hover:text-[#f62559]"/></a>
                        <a target="_blank" href="https://www.instagram.com/toshkent_parfum_/"><AiFillInstagram className="text-2xl text-gray-400 hover:text-[#f62559]"/></a>
                        <a target="_blank" href="https://t.me/toshkent_parfume"><SiTelegram className="text-xl text-gray-400 hover:text-[#f62559]"/></a>
                     </div>
                     <select name="" id="" className="text-gray-600 text-xs bg-transparent outline-none border-0">
                        <option value="">O'zbekcha</option>
                        <option value="">Русский</option>
                     </select>
                  </div>
               </div>
            </Container>
         </div>

         <div className="border-b-[1px] border-gray-200 bg-white">
            <Container>
               <div className="flex items-center justify-center gap-8 py-4">
                  <NavLink to="/">
                     <img src={logo} alt="" className="w-52"/>
                  </NavLink>

                  <div className="flex items-center gap-2 px-5 py-3 bg-black rounded-xl text-white">
                     <GiHamburgerMenu />
                     <p>Katalog</p>
                  </div>

                  <form action="" className="flex items-center gap-3 px-5 py-3 rounded-xl bg-gray-100 w-full">
                     <button className=""><AiOutlineSearch className="text-xl text-gray-700"/></button>
                     <input className="bg-transparent outline-none border-0 w-full" type="text" placeholder="Qidirish..." />
                  </form>

                  <div className="flex items-center gap-8">
                     <NavLink to="/cart" className="flex flex-col items-center justify-center gap-1">
                        <Badge count={cartLength.length} size="small" showZero>
                           <BsCart3 className="text-xl text-gray-700" />
                        </Badge>
                        <p className="text-xs text-gray-600">Savatcha</p>
                     </NavLink>
                     
                     <NavLink to="/favorite" className="flex flex-col items-center justify-center gap-1">
                        <Badge count={likedLength.length} size="small" showZero>
                           <AiOutlineHeart className="text-xl text-gray-700" />
                        </Badge>
                        <p className="text-xs text-gray-600">Saqlanganlar</p>
                     </NavLink>
                  </div>
                  
                  <button className="flex items-center gap-2 px-5 py-3 bg-[#f62559] rounded-xl text-white">
                     <ImEnter />
                     <p>Kirish</p>
                  </button>
               </div>
               
               <ul className="flex items-center justify-between gap-3 text-sm font-semibold text-black py-3 cursor-pointer">
                  <li onClick={() => handleCategoryClick('eyeshadow')}>Yuz uchun</li>
                  <li onClick={() => handleCategoryClick('eyeliner')}>Ko'zlar uchun</li>
                  <li onClick={() => handleCategoryClick('lipstick')}>Lablar uchun</li>
                  <li onClick={() => handleCategoryClick('eyebrow')}>Qoshlar uchun</li>
                  <li onClick={() => handleCategoryClick('mascara')}>Tirnoqlar uchun</li>
                  <li onClick={() => handleCategoryClick('foundation')}>Atirlar</li>
                  <li onClick={() => handleCategoryClick('nail_polish')}>Laklar</li>
               </ul>
            </Container>
         </div>
      </div>
   )
}

export default Navigation;