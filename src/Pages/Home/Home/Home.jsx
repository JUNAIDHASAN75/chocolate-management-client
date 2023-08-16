import { Link } from "react-router-dom";
import newChocolate from '../../../assets/images/chocolate-bar 1.svg'
import ShowAllChocolates from "../ShowAllChocolates/ShowAllChocolates";


const Home = () => {
    return (
        <div className="max-w-[1112px] mx-auto mt-[72px]">
            <Link className="">
            <button className="flex gap-2 items-center mb-8 p-[17px] border rounded-lg text-xl font-medium text-[#141414d6]"><span className="">+ </span> New Chocolate <img src={newChocolate} alt="" /></button>
            </Link>
            <ShowAllChocolates></ShowAllChocolates>
        </div>
    );
};

export default Home;