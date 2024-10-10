import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom"; 

import { AiFillHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { useGetProductsQuery } from "../../redux/api/productsApi";

import { toggleLike } from "../../redux/slices/likeSlice";
import { addToCart } from "../../redux/slices/cartSlice";

import Container from "../../components/container/Container";
import { Loading } from "../../utils";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState(6);

  const { data, error, isLoading } = useGetProductsQuery();
  const dispatch = useDispatch();
  const likedItems = useSelector((state) => state.like.likedItems);

  useEffect(() => {
    if (data) {
      setProducts(data);
    }
  }, [data]);

  const loadMoreProducts = () => {
    setVisibleProducts((prev) => prev + 6);
  };

  const handleLikeToggle = (product) => {
    dispatch(toggleLike(product));
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const isProductLiked = (productId) => {
    return likedItems.some((item) => item.id === productId);
  };

  return (
    <div className="mt-8 flex flex-col gap-12">
      <Container>
        <div className="flex justify-between gap-6">
          <div className="flex-1">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold">Barcha mahsulotlar</h1>
            </div>
            <div className="mt-4">
              {isLoading ? (
                <div className="flex justify-center items-center h-screen">
                  <Loading />
                </div>
              ) : (
                <div>
                  <div className="gap-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6">
                    {products &&
                      products.slice(0, visibleProducts).map((product) => (
                        <div key={product.id} className="border rounded-lg shadow-lg bg-white flex flex-col">
                          <div className="relative h-[200px]">
                            <Link to={`/details/${product.id}`}>
                              <img src={product.api_featured_image} alt={product.name} className="object-contain w-full h-full"/>
                            </Link>
                            <button onClick={(e) => handleLikeToggle(product, e)} className="absolute top-2 right-2 text-2xl cursor-pointer p-1 bg-gray-200 rounded-lg z-50">
                              <AiFillHeart style={{ color: isProductLiked(product.id) ? "red" : "white" }} />
                            </button>
                          </div>
                          <div className="p-4 bg-gray-100">
                            <div className="mt-2 text-xs font-semibold text-[#f62559]">
                              {product.name && product.name.length > 15 ? product.name.substring(0, 15) + "..." : product.name}
                            </div>
                            <div className="text-[10px] leading-4 text-gray-600">
                              {product.description && product.description.length > 30 ? product.description.substring(0, 30) + "..." : product.description}
                            </div>
                            <div className="mt-2 text-sm font-semibold text-black">
                              {Number(product.price).toFixed(1).replace(".0", "")}{" "}{product.currency || "UZD"}
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
                      <button  onClick={loadMoreProducts} className="bg-[#f62559] text-white px-6 py-2 rounded-lg font-semibold">Ko'proq yuklang</button>
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