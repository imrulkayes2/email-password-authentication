import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../MainLayout/MainLayout";
import Home from "../../Pages/Home/Home";
import Register from "../../Components/Register/Register";
import Login from "../../Components/Login/Login";

const MyCreateRoute = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            }
        ]
    }
])

export default MyCreateRoute;