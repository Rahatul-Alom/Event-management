import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import ShowServiceDetails from "./ShowServiceDetails";
import Footer from "../../Components/Footer/Footer"

const ServiceDetails = () => {
    const [service, setService] = useState([])
    const {id}= useParams()

    const services = useLoaderData()

    useEffect(() =>{
      const findService =  services.find(service => service.id === id)
      setService(findService)
      console.log(findService)

    },[id, services])
    return (
        <div>
            {
                <ShowServiceDetails service ={service}></ShowServiceDetails>
            }
              <Footer></Footer>
        </div>
      
    );
};

export default ServiceDetails;