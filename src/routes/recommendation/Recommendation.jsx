import { useState, useEffect } from "react";

import { AiFillHeart, AiOutlineShoppingCart } from "react-icons/ai";

import { useGetProductsQuery } from "../../redux/api/productsApi";

import { Loading } from "../../utils";
import Container from "../../components/container/Container";
import FiltrProducts from "../../components/filtr-products/FiltrProducts";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState(8);

  const { data, error, isLoading } = useGetProductsQuery();

  useEffect(() => {
    if (data) {
      setProducts(data);
    }
  }, [data]);

  const loadMoreProducts = () => {
    setVisibleProducts((prev) => prev + 4);
  };

  const handleAddToCart = (product) => {
    // Savatchaga mahsulot qo'shish logikasi
  };

  return (
    <div className="mt-8 flex flex-col gap-12">
      <Container>
        <div className="flex justify-between gap-6">
          {!isLoading && (
            <div> <FiltrProducts /> </div>
          )}

          <div className="flex-1">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold">Barcha mahsulotlar</h1>
            </div>
            <div className="mt-4">
              {isLoading ? (
                <div className="flex justify-center items-center h-screen"> <Loading /> </div>
              ) : (
                <div>
                  <div className="max-w-[1400px] mx-auto gap-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
                    {products && products.slice(0, visibleProducts).map((product) => (
                        <div key={product.id} className="border rounded-lg shadow-lg bg-white flex flex-col">
                          <div className="relative h-[200px]">
                            <img src={product.api_featured_image} alt={product.name} className="object-contain w-full h-full"/>
                            <AiFillHeart className="absolute top-2 right-2 text-pink-500 text-2xl cursor-pointer" />
                          </div>
                          <div className="p-4 bg-gray-100">
                            <div className="mt-2 text-xs font-semibold text-[#f62559]">
                              {product.name && product.name.length > 15 ? product.name.substring(0, 15) + "..." : product.name}
                            </div>
                            <div className="text-[10px] leading-4 text-gray-600">
                              {product.description && product.description.length > 30 ? product.description.substring(0, 30) + "...": product.description}
                            </div>
                            <div className="mt-2 text-sm font-semibold text-black">
                              {Number(product.price).toFixed(1).replace(".0", "")}{" "} {product.currency || "UZD"}
                            </div>
                            <button onClick={() => handleAddToCart(product)} className="mt-3 bg-[#f62559] text-white text-sm p-2 rounded-lg flex items-center justify-center gap-1 w-full">
                              <AiOutlineShoppingCart className="text-xl" />
                              <p className="text-xs font-bold"> Savatchaga qo'shish </p>
                            </button>
                          </div>
                        </div>
                      ))}
                  </div>

                  {visibleProducts < products.length && (
                    <div className="flex justify-center mt-6">
                      <button onClick={loadMoreProducts} className="bg-[#f62559] text-white px-6 py-2 rounded-lg font-semibold"> Ko'proq yuklang </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AllProducts;