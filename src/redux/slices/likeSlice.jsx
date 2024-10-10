import { createSlice } from "@reduxjs/toolkit";

const getLikedItemsFromLocalStorage = () => {
  const storedLikes = localStorage.getItem("likedItems");
  return storedLikes ? JSON.parse(storedLikes) : [];
};

const initialState = {
  likedItems: getLikedItemsFromLocalStorage() || [],
};

const likeSlice = createSlice({
  name: "like",
  initialState,
  reducers: {
    toggleLike: (state, action) => {
      const product = action.payload;
      const isAlreadyLiked = state.likedItems.some(item => item.id === product.id);
      
      if (!isAlreadyLiked) {
        state.likedItems.push(product);
      } else {
        state.likedItems = state.likedItems.filter(item => item.id !== product.id);
      }
      
      localStorage.setItem("likedItems", JSON.stringify(state.likedItems));
    },
  },
});

export const { toggleLike } = likeSlice.actions;
export default likeSlice.reducer;