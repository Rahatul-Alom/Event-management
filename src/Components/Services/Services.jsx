import { Link } from "react-router-dom";

const Services = ({services}) => {
    const {name, id, image, description,price } = services || {}
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img className="h-64 w-full" src={image} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p className="font-bold text-amber-900">Price of event: {price}</p>
                    <p className="">{description}</p>
                    <Link to={`/services/${id}`}>
                        <div className="card-actions">                 
                            <button className="btn bg-amber-900 text-white font-semibold w-full">See Details</  button>
                        </div>
                    </Link>
             </div>
        </div>
    );
};

export default Services;

