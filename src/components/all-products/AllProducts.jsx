import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { useGetProductsQuery } from "../../redux/api/productsApi";

import Container from "../../components/container/Container";
import { Loading } from "../../utils";

import { AiFillHeart, AiOutlineShoppingCart } from "react-icons/ai";

const AllProducts = () => {
   const [products, setProducts] = useState([]);
   const [visibleProducts, setVisibleProducts] = useState(6);

   const { data, error, isLoading } = useGetProductsQuery();

   useEffect(() => {
      if (data) {
         setProducts(data);
      }
   }, [data]);

   const loadMoreProducts = () => {
      setVisibleProducts((prev) => prev + 6);
   };

   const handleAddToCart = (product) => {
      // Add product to cart logic
   };

   return (
      <div className="mt-8 flex flex-col gap-12">
         <Container>
            <div className="flex justify-between items-center">
               <h1 className="text-3xl font-semibold">Tavsiya etilgan mahsulotlar</h1>
               {
                  products && products.length > visibleProducts ? ( <div className="flex gap-2">
                     <Link to="/recommendation">
                        <button onClick={loadMoreProducts} className="text-gray-600">Barcha mahsulotlar</button>
                     </Link>
                  </div> ) : null
               }
            </div>
            <div className="mt-8">
               {isLoading ? ( <Loading /> ) : (
                  <div className="max-w-[1400px] mx-auto gap-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6">
                     {products && products.slice(0, visibleProducts).map((product) => (
                        <div key={product.id} className="border rounded-lg shadow-lg bg-white flex flex-col">
                           <div className="relative h-[200px]">
                              <img src={product.api_featured_image} alt={product.name} className="object-cover w-full h-full rounded-lg"/>
                              <AiFillHeart className="absolute top-2 right-2 text-pink-500 text-2xl cursor-pointer" />
                           </div>
                           <div className="p-4 bg-gray-100">
                              <div className="mt-2 text-xs font-semibold text-[#f62559]">
                                 {product.name && product.name.length > 15 ? product.name.substring(0, 15) + "..." : product.name}
                              </div>
                              <div className="text-[10px] leading-4 text-gray-600">
                                 {product.description && product.description.length > 30 ? product.description.substring(0, 30) + "..." : product.description}
                              </div>
                              <div className="mt-2 text-sm font-semibold text-black">
                                 {Number(product.price).toFixed(1).replace(".0", "")}{" "} {product.currency || "UZD"}
                              </div>
                              <button onClick={() => handleAddToCart(product)} className="mt-3 bg-[#f62559] text-white text-sm p-2 rounded-lg flex items-center justify-center gap-1 w-full">
                                 <AiOutlineShoppingCart className="text-xl"/> 
                                 <p className="text-xs font-bold">Savatchaga qo'shish</p>
                              </button>
                           </div>
                        </div>
                     ))}
                  </div>
               )}
            </div>
         </Container>
      </div>
   );
};

export default AllProducts;