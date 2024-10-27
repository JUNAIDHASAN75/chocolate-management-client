import newChocolate from '../assets/images/chocolate-bar 1.svg'


const CustomButton = ({name, sign}) => {
    return (
        <div className=' w-[228px]'>
            <button className=" flex gap-2 items-center mb-8 p-[17px] border rounded-lg text-xl font-medium text-[#141414d6]"><span className="">{sign} </span> {name} <img src={newChocolate} alt="" /></button>
        </div>
    );
};

export default CustomButton;