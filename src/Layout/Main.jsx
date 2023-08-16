import { Outlet } from "react-router-dom";
import Banner from "../Pages/Shared/Banner/Banner";


const Main = () => {
    return (
        <div className="max-w-[1340px] mx-auto bg-white rounded-xl py-[65px]">
            <Banner></Banner>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;