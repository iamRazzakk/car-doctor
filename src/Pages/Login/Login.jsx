import img from '../../../public/images/login/login.svg'
import { FcGoogle } from "react-icons/fc";
import { AiFillFacebook, AiFillLinkedin } from "react-icons/ai";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import axios from 'axios';

const Login = () => {
    const { signIn } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    const handleLogin = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);
        signIn(email, password)
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                const user = { email }
                // Get access token
                axios.post('http://localhost:5000/jwt', user, { withCredentials: true })
                    .then(res => {
                        console.log(res.data);
                        if (res.data.success) {
                            navigate(location?.state ? location?.state : '/')
                        }
                    })

            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div className="hero h-[80vh] bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center p-36 lg:text-left w-1/2">
                    <img className='mr-3' src={img} alt="" />
                </div>
                <div className="card  flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-5xl font-bold text-center">Login!</h1>
                    <form onSubmit={handleLogin} className="card-body">
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
                    <p className='text-center my-4'>New to Car Doctor <Link className='text-orange-600 font-bold' to='/singup'>Sing up</Link></p>
                    <div className='flex mx-auto gap-5 text-4xl mb-4'>
                        <FcGoogle></FcGoogle>
                        <AiFillFacebook></AiFillFacebook>
                        <AiFillLinkedin></AiFillLinkedin>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;