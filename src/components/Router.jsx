import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ItemListContainer from "./ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer";
import AboutUs from "./AboutUs";
import Faq from "./Faq";
import HomeContainer from "./HomeContainer";
import Cart from "./Cart";
import Root from "./Root";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <h1>Oops, parece que hubo un error</h1>,
        children: [
            {
                path: "/",
                element: <HomeContainer />
            },
            {
                path: "/category/:categoryId",
                element: <ItemListContainer />,
            },
            {
                path: "/detail/:id",
                element: <ItemDetailContainer />,
            },
            {
                path: "/about-us",
                element: <AboutUs />,
            },
            {
                path: "/faq",
                element: <Faq />,
            },
            {
                path: "/cart",
                element: <Cart />,
            }
        ],
    },
]);

const Router = () => {
    return <RouterProvider router={router} />;
};

export default Router;
