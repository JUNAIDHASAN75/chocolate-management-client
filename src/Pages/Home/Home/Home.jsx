import { Link } from "react-router-dom";
import ShowAllChocolates from "../ShowAllChocolates/ShowAllChocolates";
import CustomButton from "../../../Components/CustomButton";


const Home = () => {
    return (
        <div className="max-w-[1112px] mx-auto mt-[72px]">
            <div className="w-12">

                <Link to='/addchocolate' className="">
                    <CustomButton name={'New Chocolate'} sign={'+'}></CustomButton>

                </Link>
            </div>
            <ShowAllChocolates></ShowAllChocolates>
        </div>
    );
};

export default Home;