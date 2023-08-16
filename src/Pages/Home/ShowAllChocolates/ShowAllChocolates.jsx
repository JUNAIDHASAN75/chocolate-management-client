import './ShowAllChocolate.css'

const ShowAllChocolates = () => {
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead className="bg_thead text-black text-base font-semibold ">
                        <tr className='text-center'>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Country/Factory</th>
                            <th>Category</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody className=''>
                        {/* row 1 */}
                        <tr className='text-center'>

                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask  w-[70px] h-[70px] rounded">
                                            <img className='' src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        
                                    </div>
                                </div>
                            </td>
                            
                            <td>Name</td>
                            <td>Country</td>
                            <td>Category</td>
                            <th>
                                <button className="btn btn-ghost btn-xs">details</button>
                            </th>
                        </tr>
                    </tbody>



                </table>
            </div>
        </div>
    );
};

export default ShowAllChocolates;