import { useEffect } from "react";
import { useState } from "react";
import ServicesCard from "./ServicesCard";


const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div className="text-center space-y-4">
                <h3 className="text-3xl font-bold text-orange-500">Service</h3>
                <h1 className="text-5xl font-bold text-black">Our Service Area</h1>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <div>
                <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {
                        services.map((service, index) => <ServicesCard key={index} service={service}></ServicesCard>)
                    }
                </div>
                <button className="btn flex mx-auto mt-4 mb-4 btn-outline btn-warning">More Services</button>
            </div>
        </div>
    );
};

export default Services;