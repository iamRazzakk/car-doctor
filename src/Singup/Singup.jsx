import { Link } from "react-router-dom";
import img2 from '../../public/images/login/login.svg'

const Singup = () => {
    const handleSingup = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password, name);
    }
    return (
        <div className="hero h-[80vh] bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center p-36 lg:text-left w-1/2">
                    <img className='mr-3' src={img2} alt="" />
                </div>
                <div className="card  flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-5xl font-bold text-center">Login!</h1>
                    <form onSubmit={handleSingup} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Your name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Login" />
                        </div>
                    </form>
                    <hr />
                    <p className='text-center my-4'>Already Have an account please<Link className='text-orange-600 font-bold ml-3' to='/login'>Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Singup;