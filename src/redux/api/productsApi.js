import { api } from "./index";

const productsApi = api.injectEndpoints({
   endpoints: (build) => ({

      // GET ALL PRODUCTS
      getProducts: build.query({
         query: () => ({
         url: "/products.json",
         method: "GET",
         }),
         providesTags: ["PRODUCTS"],
      }),
   }),
});

export const {
   useGetProductsQuery,
} = productsApi;