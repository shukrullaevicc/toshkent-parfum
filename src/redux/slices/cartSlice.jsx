import { createSlice } from "@reduxjs/toolkit";

// Savatchani localStorage dan olish
const getCartFromLocalStorage = () => {
   const storedCart = localStorage.getItem("cart");
   return storedCart ? JSON.parse(storedCart) : [];
};

const initialState = {
   cart: getCartFromLocalStorage(),
   total: 0,
};

const cartSlice = createSlice({
   name: "cart",
   initialState,
   reducers: {
      addToCart: (state, action) => {
         const existingProduct = state.cart.find((product) => product.id === action.payload.id);

         if (existingProduct) {
         existingProduct.quantity += 1; // Agar mahsulot mavjud bo'lsa, quantityni oshirish
         } else {
         state.cart.push({ ...action.payload, quantity: 1 }); // Yangi mahsulotni quantity=1 bilan qo'shish
         }

         localStorage.setItem("cart", JSON.stringify(state.cart)); // Savatchani localStorage'ga saqlash
      },

      removeFromCart: (state, action) => {
         const existingProduct = state.cart.find((product) => product.id === action.payload.id);

         if (existingProduct) {
         if (existingProduct.quantity > 1) {
            existingProduct.quantity -= 1; // Miqdorini kamaytirish
         } else {
            // Agar quantity 1 bo'lsa, mahsulotni savatdan o'chirish
            state.cart = state.cart.filter((product) => product.id !== action.payload.id);
         }

         // Yangilangan savatchani localStorage'ga saqlash
         localStorage.setItem("cart", JSON.stringify(state.cart));
         }
      },

      calculateTotals: (state) => {
         console.log("Cart contents:", state.cart);
         const totalPrice = state.cart.reduce((sum, product) => sum + product.price * product.quantity, 0);
         console.log("Total price:", totalPrice);        
         state.total = totalPrice;
      },

      deleteCart: (state, action) => {
         // Mahsulotni to'liq o'chirish
         state.cart = state.cart.filter((product) => product.id !== action.payload.id);
         localStorage.setItem("cart", JSON.stringify(state.cart)); // Yangilangan savatchani localStorage'ga saqlash
      },
   },
});

export const { addToCart, removeFromCart, calculateTotals, deleteCart } = cartSlice.actions;
export default cartSlice.reducer;
