import { Link } from "react-router-dom";

const ShowServiceDetails = ({service}) => {
        const {name, id, image, description, } = service 
        return (
            <div className="mx-auto max-w-7xl my-12">
                <img className=" w-full" src={image} alt="" />
                    <h2 className="text-5xl font-bold my-11 text-black">{name}</h2>
                    <p className="mb-9">{description}</p>
                    <Link to={"/"}><button className="btn  bg-amber-900 text-white font-semibold">Go Back Home</button></Link>
            </div>
        );

};

export default ShowServiceDetails;