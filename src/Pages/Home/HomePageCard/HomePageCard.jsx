
import { FcCalendar } from "react-icons/fc";
import { FiPhoneCall } from "react-icons/fi";
import { CiLocationOn } from "react-icons/ci";

const HomePageCard = () => {
    return (
        <div className="w-[1140px] rounded-lg mx-auto h-[250px] md:flex md:justify-center md:items-center bg-[#151515]">
            {/* first one */}
            <div className="flex items-center md:mr-4">
                <div className=" md:ml-4">
                    <FcCalendar className="text-2xl"></FcCalendar>
                </div>
                <div className="ml-4 ">
                    <h1 className="text-xl">We are open monday-friday</h1>
                    <p className="text-2xl font-bold">7:00 am - 9:00 pm</p></div>
            </div>
            {/* Secound one */}
            <div className="flex items-center md:mr-4">
                <div className=" md:ml-4">
                    <FiPhoneCall className="text-2xl"></FiPhoneCall>
                </div>
                <div className="ml-4 ">
                    <h1 className="text-xl">Have a question?</h1>
                    <p className="text-2xl font-bold">+2546 251 2658</p></div>
            </div>
            {/* Third one */}
            <div className="flex items-center ">
                <div className=" md:ml-4">
                    <CiLocationOn className="text-2xl"></CiLocationOn>
                </div>
                <div className="ml-4 ">
                    <h1 className="text-xl">Need a repair? our address</h1>
                    <p className="text-2xl font-bold">Liza Street, New York</p></div>
            </div>
        </div>
    );
};

export default HomePageCard;