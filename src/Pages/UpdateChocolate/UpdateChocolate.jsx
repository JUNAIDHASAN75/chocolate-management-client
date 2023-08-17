import { BsArrowLeft } from "react-icons/bs";
import { Link, useLoaderData } from "react-router-dom";
import '../AddChocolates/AddCohocolate.css'
import Swal from "sweetalert2";


const UpdateChocolate = () => {
    const chocolate = useLoaderData();
    // console.log(chocolate)
    const {_id,name, photo, country, price} =chocolate;
    const handleUpdateChocolate = event =>{
        event.preventDefault()
        const from = event.target;
        const name = from.name.value;
        const category = from.category.value;
        const country = from.country.value;
        const price = from.price.value;
        const photo= from.photo.value;
        const allProperties = {name, category, country, price, photo}
        console.log(allProperties)
        fetch(`http://localhost:5000/chocolates/${_id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(allProperties)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.modifiedCount >0){
                // alert('added chocolate')
                Swal.fire({
                    title: 'Sweet!',
                    text: `${name} updated successfully`,
                    imageUrl: `${photo}`,
                    imageWidth: 400,
                    imageHeight: 200,
                    imageAlt: 'Custom image',
                  })
            }
        })

    }
    return (
        <div  className="max-w-[1112px] mx-auto mt-[72px]">
            <Link to='/'>
                <p className="text-xl font-medium flex items-center gap-2 mb-8"><BsArrowLeft></BsArrowLeft> All Chocolates</p>
            </Link>
            <hr />
            <div className="bg_addChocolate mt-8">
                <h2 className="text-center text-[24px] font-semibold pt-12"> Update Chocolates</h2>
                <p className="text-base text-center text-black text-opacity-60 mb-12">
                    Use the below form to create a new product
                </p>
                <form onSubmit={handleUpdateChocolate} className="max-w-[886px] mx-auto">
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text font-semibold text-base">Name</span>
                        </label>
                        <input type="text" name="name" defaultValue={name} placeholder="Chocolate Name" className="input input-bordered w-full mb-8 border-none" />
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text font-semibold text-base">Category</span>
                        </label>
                        <div className="form-control w-full">
                            <select className="select select-bordered mb-8 border-none" name="category" defaultValue={'Premium'}>
                                <option>Premium</option>
                                <option>Normal</option>
                                <option>Dark</option>
                                <option>Milk</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text font-semibold text-base">Country</span>
                        </label>
                        <input type="text" name="country" defaultValue={country} placeholder="Country" className="input input-bordered w-full mb-8 border-none" />
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text font-semibold text-base">Price</span>
                        </label>
                        <input type="text" name="price" defaultValue={price} placeholder="price" className="input input-bordered w-full mb-8 border-none" />
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text font-semibold text-base">Photo URL</span>
                        </label>
                        <input type="text" name="photo" defaultValue={photo} placeholder="Photo URL" className="input input-bordered w-full mb-8 border-none" />
                    </div>
                    <div className="form-control w-full ">
                        <input type="submit" value="Save" className="w-full bg-[#91572b] text-white py-[17px] rounded mb-12 mt-5" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateChocolate;