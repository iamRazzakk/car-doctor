import person from '../../../assets/images/about_us/person.jpg'
import partse from '../../../assets/images/about_us/parts.jpg'
const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className='lg:w-1/2 relative'>
                    <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
                    <img src={partse} className="w-1/2 border-8 border-white absolute right-5 top-1/2 rounded-lg shadow-2xl" />
                </div>
                <div className='lg:w-1/2 space-y-5'>
                    <h1 className='text-3xl font-bold text-orange-500'>About Us</h1>
                    <h1 className="text-5xl font-bold text-black">We are qualified <br /> & of experience in this field</h1>
                    <p className="">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <p className='text-[Dark 03]'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <button className="btn bg-[#FF3811]">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;