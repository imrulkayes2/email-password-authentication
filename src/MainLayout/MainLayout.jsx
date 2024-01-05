import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";


const MainLayout = () => {
    return (
        <div className="text-center">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;