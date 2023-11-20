import { useForm } from "react-hook-form";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { ImSpoonKnife } from "react-icons/im";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;


const AddItems = () => {
    const { register, handleSubmit,reset } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();

    const onSubmit = async(data) => {
        console.log(data)
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api,imageFile,{
            headers:{
                'Content-Type': 'multipart/form-data'
            }
        });
        if(res.data.success){
            const menuItem = {  
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: res.data.data.display_url

            }
            const menuRes = await axiosSecure.post('/menu',menuItem);
            console.log(menuRes.data);
            if(menuRes.data.insertedId){
                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} added to your cart`,
                    showConfirmButton: false,
                    timer: 1500
                  });
                // 
            }
        }
        console.log('with image url',res.data);
    }
    return (
        <div className='max-w-5xl mx-auto mb-24'>
            <SectionTitle
                subHeading={"---What's new?---"}
                heading={"ADD AN ITEM"}>

            </SectionTitle>
            <div className="border bg-[#F3F3F3] pt-24 px-14 mx-10">
                <form onSubmit={handleSubmit(onSubmit)}>
                   
                    <div className="w-full flex gap-3">
                        <div className="w-full">
                            <label className="label">
                                <span className="label-text text-[#444] font-semibold">Recipe name*</span>
                            </label>
                            <input {...register("name",{required: true})} required className="w-full h-12 border-2 p-4 pl-5 rounded-lg" placeholder="Recipe name" type="text" name="name" id="name" />
                        </div>
                    </div>

                    <div className="w-full flex gap-3">
                        <div className="w-1/2">
                            <label className="label">
                                <span className="label-text text-[#444] font-semibold">Category*</span>

                            </label>
                            <select  defaultValue="default" {...register("category",{required: true})} className="select select-bordered w-full ">
                                <option disabled value="default">Category</option>
                                <option>Salad</option>
                                <option>Soup</option>
                                <option>Pizza</option>
                                <option>Dessert</option>
                                <option>Drinks</option>
                            </select>
                        </div>

                        <div className="w-1/2">
                            <label className="label">
                                <span className="label-text text-[#444] font-semibold">Price*</span>
                            </label>
                            <input {...register("price",{required: true})} className="w-full h-12 border-2 p-4 pl-5 rounded-lg" placeholder="Price" type="number" name="price" id="price" />
                        </div>
                    </div>
                    <div className="w-full flex gap-3 mb-10">
                        <div className="w-full">
                            <label className="label">
                                <span className="label-text text-[#444] font-semibold">Recipe Details*</span>
                            </label>
                            <textarea {...register("recipe",{required: true})} className="w-full  border-2 p-4 pl-5 rounded-lg" placeholder="Recipe Details" name="recipe" id="recipe" cols="30" rows="10"></textarea>
                        </div>
                    </div>
                    <input {...register("image",{required: true})} type="file" className="file-input file-input-ghost bg-[#E8E8E8]" />

                    <button className="text-center  text-[#FFF] bg-gradient-to-r from-[#835D23] to-[#B58130] w-44 h-14 border font-bold pt-1 pl-9 mb-16 mt-6 flex justify-start items-center" >Add Item<ImSpoonKnife className="ml-2"></ImSpoonKnife></button>
                  
                </form>
            </div>
        </div>
    );
};

export default AddItems;