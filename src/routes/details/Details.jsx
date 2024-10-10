import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { useGetProductsQuery } from '../../redux/api/productsApi';
import { addToCart } from "../../redux/slices/cartSlice";

import { AiFillPhone, AiFillCreditCard } from "react-icons/ai"; 
import { BsTelegram, BsCart4 } from "react-icons/bs"; 
import { MdOutlineShoppingCart } from "react-icons/md"; 

import Container from "../../components/container/Container";
import { Loading } from "../../utils";

const Details = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { data: products, error, isLoading } = useGetProductsQuery();

  const product = products ? products.find((item) => item.id === parseInt(id)) : null;

  if (isLoading) return <Loading />;
  if (error) return <div>Error loading product details</div>;
  if (!product) return <div>Product not found</div>;

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <Container>
      <div className="flex flex-col md:flex-row mt-5 gap-8">
        <div className="flex gap-5 flex-col">
          <div className='w-[500px] h-[500px] bg-gray-100 rounded-2xl'>
            <img src={product.api_featured_image} alt={product.name} className='w-full h-full object-cover rounded-2xl' />
          </div>
        </div>

        <div className="flex flex-col justify-start">
          <h1 className="text-2xl font-semibold text-[#f62559]">{product.name}</h1>

          <div className='flex items-center gap-7 mt-6'>
            <div>
              <p className='p-3 border-[1px] text-2xl border-gray-200 rounded-lg'>Brend</p>
            </div>
            <div className='flex gap-2 flex-col'>
              <div className='flex gap-2'>
                <p className='text-gray-600 text-base'>Mahsulot brenddi:</p>
                <span className='text-gray-400 text-base'>{product.brand}</span>
              </div>
              <div className='flex gap-2'>
                <p className='text-gray-600 text-base'>Mahsulot kategoriyasi:</p>
                <span className='text-orange-500 font-bold text-base'>{product.category}</span>
              </div>
            </div>
          </div>

          <div className='border-t-[1px] border-b-[1px] border-gray-200 mt-8'>
            <div className="flex items-end mt-6 gap-3">
              <p className="text-black font-semibold text-4xl">{Number(product.price).toFixed(1).replace(".0", "")}$</p>
            </div>
            <div className='mb-6 mt-3'>
              <p className='text-xl font-bold text-black'>dan 100 USD / Oylik to'lov</p>
            </div>
          </div>

          <div className="mt-8 border-b-[1px] border-gray-200">
            <div className="flex gap-4 justify-between items-center">
              <div className="flex items-center gap-4 p-4 border-[1px] rounded-lg bg-orange-600 text-white">
                <MdOutlineShoppingCart className="text-2xl" />              
                <p className="text-lg font-bold">BUYURTMA QOLDIRISH</p>
              </div>
              <button onClick={() => handleAddToCart(product)} className="flex items-center gap-4 p-4 border-[1px] rounded-lg bg-orange-600 text-white hover:bg-orange-700">
                <BsCart4 className="text-3xl" />
                <p className="text-xl font-bold">SAVATGA QO'SHISH</p>
              </button>
            </div>
            <div className="p-4 border-[1px] rounded-lg flex items-center gap-4 justify-center mt-4 bg-red-600 text-white mb-8">
              <AiFillCreditCard className="text-2xl" />
              <p className="text-lg font-bold">BO'LIB TO'LASH</p>
            </div>
          </div>
          
          <div>
            <div className="flex items-center justify-center gap-2 mt-8">
              <p className="text-2xl font-bold">Yordam kerakmi?</p>
              <span className="text-orange-500 text-2xl font-bold">Biz sizga yordam beramiz!</span>
            </div>
            <div>
              <div className="p-3 mt-4 border-[1px] rounded-lg border-blue-500 text-blue-500 flex justify-center items-center gap-4">
                <BsTelegram className="text-3xl" />
                <p className="text-xl font-bold">Telegram orqali bog'lanish</p>
              </div>
              <div className="p-3 mt-4 border-[1px] rounded-lg border-green-500 text-green-500 flex justify-center items-center gap-4">
                <AiFillPhone className="text-3xl" />
                <p className="text-xl font-bold">Telefon orqali bog'lanish</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Details;
