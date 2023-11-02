import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import BookingsTable from './BookingsTable';
import { data } from 'autoprefixer';

const Bookings = () => {
    const { user } = useContext(AuthContext)
    const [booking, setBooking] = useState([])
    const url = `http://localhost:5000/bookings?email=${user?.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBooking(data))
    }, [url])
    const handleDelete = id => {
        const proceed = confirm("Are you sure you want to delete")
        if (proceed) {
            fetch(`http://localhost:5000/bookings/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert("Deleted Successfully")
                        const remaining = booking.filter(booking => booking._id !== id)
                        setBooking(remaining)
                    }
                })
        }
    }
    const handleBookingConfirm = (id) => {
        fetch(`http://localhost:5000/bookings/${id}`, {
            method: "PATCH",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'confirm' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    const remaining = booking.filter(booking => booking._id)
                    const update = booking.find(booking => booking._id)
                    // const status: "confirm"
                    const newRemaining = [update, ...remaining]
                    setBooking(newRemaining)
                }
            })
    }
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Image</th>
                            <th>Services</th>
                            <th>Date</th>
                            <th>Price</th>
                            <th>Statusnpm run</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            booking?.map(book => <BookingsTable key={book._id} Bookings={booking} handleDelete={handleDelete} handleBookingConfirm={handleBookingConfirm}></BookingsTable>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Bookings;