import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Checkout = () => {
    const service = useLoaderData()
    const { title, _id, price } = service
    const { user } = useContext(AuthContext)
    const handleBookSubmit = e => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value;
        const email = form.email.value;
        const date = form.date.value;
        const price = form.price.value;
        const booking = {
            customar: name,
            date,
            email,
            service: title,
            service_id: _id,
            price,
        }
        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                alert("Added")
                console.log(data);
            })
    }
    return (
        <div>
            <h2 className="text-3xl font-bold text-center">{title}</h2>
            <form onSubmit={handleBookSubmit} className="card-body">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="name" defaultValue={user?.displayName} className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date and Time</span>
                        </label>
                        <input type="date" name="date" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" defaultValue={user?.email} placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Due amount</span>
                        </label>
                        <input type="text" name="price" defaultValue={'$ ' + price} className="input input-bordered" required />
                    </div>

                </div>
                <div className="form-control mt-6">
                    <input className="btn btn-primary btn-block" type="submit" value="Order Confirm" />
                </div>
            </form>
        </div>


    );
};

export default Checkout;