import Footer from "../../Components/Footer/Footer";
import Banner from "../../Components/Header/Banner/Banner"
import Services from "../../Components/Services/Services";
import { useLoaderData } from "react-router-dom";
import WhyChooseUs from "../../Components/WhyChooseUs/WhyChooseUs";
import PhotoGallery from "../../Components/PhotoGallery/PhotoGallery";


const Home = () => {

    const services = useLoaderData()
    return (
        <div>
            <Banner></Banner>
            <h1 className="mt-16 text-center font-bold text-5xl lg:text-7xl text-black" >Our Services</h1>
            <div className="my-20 gap-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto max-w-6xl">         
              {
                services.map(service => <Services key={service.id} services={service}></Services>)
              }
            </div>
            <div className="mx-auto max-w-6xl my-28"> 
                <WhyChooseUs></WhyChooseUs>
            </div>
            <div>
               <h1 className="my-24 text-center font-bold text-5xl lg:text-7xl text-amber-950" >Photo Gallery</h1>
                <PhotoGallery></PhotoGallery>
            </div>
            <Footer></Footer>
      </div>
    );
};

export default Home;