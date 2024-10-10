import { useRoutes } from "react-router-dom";
import { Suspense, lazy } from "react";

import { Loading } from "../utils";

const Home = lazy(() => import('../routes/home/Home'));
const Cart = lazy(() => import('../routes/cart/Cart'));
const Favorite = lazy(() => import('../routes/favorite/Favorite'));
const SinglePage = lazy(() => import('../routes/details/Details'));
const Recommendation = lazy(() => import('../routes/recommendation/Recommendation'));
const CategoryPage = lazy(() => import('../routes/categoryPage/CategoryPage'));

const NotFound = lazy(() => import('../routes/not-found/NotFound'));

const RouteController = () => {
   return useRoutes([
      {
         path: '',
         element: <Suspense fallback={<Loading />}><Home /></Suspense>,
      },

      {
         path: 'details/:id',
         element: <Suspense fallback={<Loading />}><SinglePage /></Suspense>,
      },

      {
         path: 'category/:type',
         element: <Suspense fallback={<Loading />}><CategoryPage /></Suspense>,
      },

      {
         path: 'cart',
         element: <Suspense fallback={<Loading />}><Cart /></Suspense>
      },

      {
         path: 'favorite',
         element: <Suspense fallback={<Loading />}><Favorite /></Suspense>
      },
      {
         path: 'recommendation',
         element: <Suspense fallback={<Loading />}><Recommendation /></Suspense>
      },
      {
         path: '*',
         element: <Suspense fallback={<Loading />}><NotFound /></Suspense>
      }
   ])
}

export default RouteController