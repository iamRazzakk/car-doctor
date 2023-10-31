import team1 from '../../../../public/images/team/1.jpg'
import team2 from '../../../../public/images/team/2.jpg'
import team3 from '../../../../public/images/team/3.jpg'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa6";

const Team = () => {
    return (
        <div>
            <div className='text-center space-y-4 mt-10'>
                <h1 className='text-orange-500 text-3xl font-bold'>Team</h1>
                <h1 className='text-5xl font-bold'>Meet Our Team</h1>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3'>
                {/* First one */}
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={team1} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Car Engine Plug!</h2>
                        <p>Engine Expert</p>
                        <div className='flex gap-4 text-2xl'>
                            <FaFacebook></FaFacebook>
                            <FaTwitter></FaTwitter>
                            <FaLinkedin></FaLinkedin>
                            <FaInstagram></FaInstagram>
                        </div>
                    </div>
                </div>
                {/* Secound one */}
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={team2} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Car Engine Plug</h2>
                        <p>Engine Expert</p>
                        <div className='flex gap-4 text-2xl'>
                            <FaFacebook></FaFacebook>
                            <FaTwitter></FaTwitter>
                            <FaLinkedin></FaLinkedin>
                            <FaInstagram></FaInstagram>
                        </div>
                    </div>
                </div>
                {/* Third one */}
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={team3} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Car Engine Plug!</h2>
                        <p>Engine Expert</p>
                        <div className='flex gap-4 text-2xl'>
                            <FaFacebook></FaFacebook>
                            <FaTwitter></FaTwitter>
                            <FaLinkedin></FaLinkedin>
                            <FaInstagram></FaInstagram>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;