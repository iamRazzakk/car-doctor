import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Singup from "../Singup/Singup";
import Checkout from "../Pages/Checkout/Checkout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/singup',
                element: <Singup></Singup>
            },
            {
                path: 'checkout/:id',
                element: <Checkout></Checkout>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            }
        ]
    },
]);
export default router