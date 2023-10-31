import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
const ServicesCard = ({ service }) => {
    const { _id, img, title, price } = service
    console.log(img);
    return (
        <div className="mt-10">
            <div className="card bg-base-100 shadow-xl">
                <figure><img className="h-[208px] w-full" src={img} alt="Shoes" /></figure>
                <div className="space-y-3 mt-3 ml-4">
                    <h2 className="card-title">{title}</h2>
                    <p className="text-[#FF3811] text-[20px]">Price: ${price}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/checkout/${_id}`}>
                            <button className="btn text-[#FF3811] mb-4 mr-4"><AiOutlineArrowRight></AiOutlineArrowRight></button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;