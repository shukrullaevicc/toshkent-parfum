import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { notification } from "antd";

import { toggleLike } from "../../redux/slices/likeSlice";
import { addToCart } from "../../redux/slices/cartSlice";

import NotInFavorite from "../../components/not-in-favorite/NotInFavorite";
import Container from "../../components/container/Container";

import { AiFillHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { CloseCircleOutlined, CheckCircleOutlined } from "@ant-design/icons";

const Favorite = () => {
  const dispatch = useDispatch();

  const favorite = useSelector((state) => state.like.likedItems || []);

  if (favorite.length === 0) {
    return <NotInFavorite />;
  }

  const handleToggleLike = (product, e) => {
    e.stopPropagation();
    dispatch(toggleLike(product));
  };

  const handleAddToCart = (product, e) => {
      e.stopPropagation();
      dispatch(addToCart(product));

      notification.success({
        message: 'Savatchaga qo\'shildi!',
        description: `${product.name} mahsuloti savatchaga qo'shildi.`,
        icon: <CheckCircleOutlined style={{ color: '#52c41a' }} />,
      });
  };

 const isProductLiked = (productId) => {
    return favorite.some((item) => item.id === productId);
 };

  return (
    <Container>
      <div className="mt-8 flex flex-col gap-12">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-semibold">Yoqtirgan mahsulotlaringiz</h1>
        </div>
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-5">
          {favorite.map((product) => (
            <div key={product.id} className="border rounded-lg shadow-lg bg-white flex flex-col">
              <div className="relative h-[200px]">
                <Link to={`/products/${product.id}`}>
                  <img src={product.api_featured_image} alt={product.name} className="object-cover w-full h-full rounded-lg" />
                </Link>
                <button onClick={(e) => handleToggleLike(product, e)} className="absolute top-2 right-2 text-2xl cursor-pointer p-1 bg-gray-200 rounded-lg z-50">
                  <AiFillHeart style={{ color: isProductLiked(product.id) ? "red" : "white" }} />
                </button>
              </div>
              <div className="p-4 bg-gray-100">
                <div className="mt-2 text-xs font-semibold text-[#f62559]">
                  {product.name.length > 15 ? product.name.substring(0, 15) + "..." : product.name}
                </div>
                <div className="text-[10px] leading-4 text-gray-600">
                  {product.description.length > 30 ? product.description.substring(0, 30) + "..." : product.description}
                </div>
                <div className="mt-2 text-sm font-semibold text-black">
                  {Number(product.price).toFixed(1).replace('.0', '')} {product.currency || "UZD"}
                </div>
                <button onClick={(e) => handleAddToCart(product, e)} className="mt-3 bg-[#f62559] hover:bg-red-600 text-white text-sm p-2 rounded-lg flex items-center justify-center gap-1 w-full z-50">
                  <AiOutlineShoppingCart className="text-xl" />
                  <p className="text-xs font-bold">Savatchaga qo'shish</p>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Favorite;