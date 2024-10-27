import { useLoaderData } from 'react-router-dom';
import './ShowAllChocolate.css'
import {  useState } from 'react';
import Chocolate from './Chocolate/Chocolate';

const ShowAllChocolates = () => {
    const loadedChocolates = useLoaderData();
    const [chocolates, setChocolates] = useState(loadedChocolates);
    // useEffect(()=>{
    //     fetch('https://chocolate-management-server-16ec3aozb-junaidhasan75s-projects.vercel.app/chocolates')
    //     .then(res=>res.json())
    //     .then(data=>setChocolates(data))
    // },[]);
    console.log(chocolates)
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead className="bg_thead text-black text-base font-semibold ">
                        <tr className='text-left '>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Country/Factory</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody className=''>
                        {/* row 1 */}
                        {
                            chocolates.map(chocolate=><Chocolate
                            key={chocolate._id}
                            chocolate={chocolate}
                            setChocolates={setChocolates}
                            chocolates={chocolates}
                            ></Chocolate>)
                        }
                        
                    </tbody>



                </table>
            </div>
        </div>
    );
};

export default ShowAllChocolates;