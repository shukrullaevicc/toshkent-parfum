import { useRoutes } from "react-router-dom";
import { Suspense, lazy } from "react";

import { Loading } from "../utils";

const Home = lazy(() => import('../routes/home/Home'));
const Cart = lazy(() => import('../routes/Cart/Cart'));
const Favorite = lazy(() => import('../routes/Favorite/Favorite'));
const SinglePage = lazy(() => import('../routes/details/Details'));
const Recommendation = lazy(() => import('../routes/recommendation/Recommendation'));

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