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

      // GET PRODUCTS BY TYPE
      getProductsByType: build.query({
         query: (type) => ({
            url: `/products.json?product_type=${type}`,
            method: "GET",
         }),
         providesTags: (result, error, type) => [{ type: "PRODUCTS", id: type }],
      }),
   }),
});

export const {
   useGetProductsQuery,
   useGetProductsByTypeQuery
} = productsApi;
