import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { Link } from 'react-router-dom';

import { AiFillDelete } from "react-icons/ai"; 

import { addToCart, removeFromCart, calculateTotals, deleteCart } from '../../redux/slices/cartSlice';

import NotInCart from '../../components/not-in-cart/NotInCart';
import Container from '../../components/container/Container';

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart.cart);
  const total = useSelector(state => state.cart.total) || 0;

  console.log(total);

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cart, dispatch]);

  if (cart.length === 0) {
    return <NotInCart />;
  }

  return (
    <Container>
      <div className="flex flex-col lg:flex-row justify-between p-5">
        <div className="w-full">
          <h1 className="text-3xl font-bold mb-5">Savat</h1>
          <div className="bg-white rounded-lg p-5">
            {cart.map((product) => (
              <div key={product.id} className="flex justify-between gap-8 items-center border-b border-gray-200 py-5">
                <div className="flex hover:text-[#f62559] gap-4">
                  <img src={product.api_featured_image} alt={product.name} className="w-24 h-24 object-cover rounded-md" />
                  <Link to={`/details/${product.id}`}>
                    <h2 className="text-2xl font-semibold">{product.name}</h2>
                  </Link>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex flex-col justify-between">
                    <div className="text-lg font-semibold">
                      {(product.price * product.quantity).toLocaleString()}$
                    </div>
                    <p className="text-gray-500">{product.price.toLocaleString()}$ x {product.quantity}</p>
                    <div className="flex items-center gap-2 mt-8">
                      <button onClick={() => dispatch(removeFromCart(product))} className="p-3 bg-gray-200 rounded">
                        <AiOutlineMinus  className='text-[#f62559]'/>
                      </button>

                      <span className="text-lg font-semibold p-3">{product.quantity}</span>
                      
                      <button onClick={() => dispatch(addToCart(product))} className="p-3 bg-gray-200 rounded">
                        <AiOutlinePlus />
                      </button>
                    </div>
                  </div>

                  <button onClick={() => dispatch(deleteCart(product))} className="p-2 bg-gray-100 rounded-full">
                    <AiFillDelete />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full max-w-[500px] mt-10">
          <div className="rounded-lg bg-gray-100 p-5">
            <h2 className="text-2xl font-bold mb-5">Jami</h2>

            <div className="flex justify-between text-lg mb-3">
              <span>Tovarlar soni</span>
              <span>{cart.length} dona</span>
            </div>

            <div className="flex justify-between text-lg mb-3">
              <span>Yetkazib berish</span>
              <span className="text-green-500">Bepul</span>
            </div>

            <div className="flex justify-between text-xl font-bold">
              <span>Jami</span>
              <span>{total.toLocaleString()}$</span>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Cart;