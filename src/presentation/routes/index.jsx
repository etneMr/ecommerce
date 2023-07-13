import Home from '../components/Home/Home'
import Shop from '../components/Shop/Shop'
import Contact from '../components/Contact/Contact'
import About from '../components/About/About'
import ErrorPage from '../components/Error/Error'
import Product from '../components/Product/Product'
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
    ]
);
