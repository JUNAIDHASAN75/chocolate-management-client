import { Link } from "react-router-dom";
import { LuEdit2 } from "react-icons/lu"
import './Chocolate.css'
import Swal from "sweetalert2";


const Chocolate = ({ chocolate, chocolates, setChocolates }) => {
    const { _id, name, category, price, country, photo } = chocolate;

    const handleDelete = _id => {
        console.log(_id)
        Swal.fire({
            text: "Do you want to delete this file?",
            imageUrl: 'https://i.ibb.co/Mcvk2Zp/Group-27.jpg',
            imageWidth: 116,
            imageHeight: 120,
            confirmButtonColor: '#F24500',

            confirmButtonText: 'Ok',
            showCancelButton: true
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/chocolates/${_id}`, {
                    method: 'delete'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                {
                                    imageUrl: `${photo}`,
                                    imageWidth: 116,
                                    imageHeight: 120,
                                    text:'This chocolate deleted successfully'
                                },
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            const remaining = chocolates.filter(choco=>choco._id !==_id);
                            setChocolates(remaining)
                        }

                    })
            }
        })
    }
    return (

        <tr className='text-left'>

            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask  w-[70px] h-[70px] rounded">
                            <img className='' src={photo} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
            </td>

            <td className="py-16">{name}</td>
            <td className="py-16">{country}</td>
            <td className="py-16">{category}</td>
            <td className="py-16">{price}</td>
            <th className=" ">
                <div className="flex items-center gap-2">

                    <Link className="text-center">
                        <button className="chocolate pl-[14px]"><LuEdit2 className=""></LuEdit2></button>
                    </Link>
                    <button onClick={() => handleDelete(_id)} className="chocolate text-center">X</button>
                </div>
            </th>
        </tr>
    );
};

export default Chocolate;