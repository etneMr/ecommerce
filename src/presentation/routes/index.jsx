import Home from '../components/Home/Home'
import Shop from '../components/Shop/Shop'
import Contact from '../components/Contact/Contact'
import About from '../components/About/About'
import ErrorPage from '../components/Error/Error'
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
