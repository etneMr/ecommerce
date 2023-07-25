import Home from '../components/Home/Home'
import Shop from '../components/Shop/Shop'
import Contact from '../components/Contact/Contact'
import About from '../components/About/About'
import ErrorPage from '../components/Error/Error'
import Product from '../components/Product/Product'
import Cart from '../components/Cart/Cart'
import Checkout from '../components/Checkout/Checkout'
import Login from '../components/Login/Login'
import Blog from '../components/Blog/Blog'
import { ProductComparison } from '../components/ProductComparison/Productcomparison'
import {
    createBrowserRouter,
} from "react-router-dom";

export const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <Home />,
            errorElement: <ErrorPage />
        },
        {
            path: '/login',
            element: <Login />,
            errorElement: <ErrorPage />,
            // action: loginAction
        },
        {
            path: '/shop',
            element: <Shop />,
            errorElement: <ErrorPage />,
            children: [
                { index: true, element: <Home /> },
                // {
                //     path: '/shop/:productId',
                //     element: <Product />,
                //     errorElement: <ErrorPage />,
                // },
            ]
        },
        {
            path: '/shop/:productId',
            element: <Product />,
            errorElement: <ErrorPage />
        },
        {
            path: '/contact',
            element: <Contact />,
            errorElement: <ErrorPage />
        },
        {
            path: '/about',
            element: <About />,
            errorElement: <ErrorPage />
        },
        {
            path: '/product-compare/:productId',
            element: <ProductComparison />,
            errorElement: <ErrorPage />
        },
        {
            path: '/cart',
            element: <Cart />,
            errorElement: <ErrorPage />
        },
        {
            path: '/checkout',
            element: <Checkout />,
            errorElement: <ErrorPage />
        },
        {
            path: '/blog',
            element: <Blog />,
            errorElement: <ErrorPage />
        }
    ]
);
