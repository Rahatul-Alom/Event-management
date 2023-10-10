import React from 'react';
import Banner from '../../Components/Header/Banner/Banner';
import Footer from '../../Components/Footer/Footer';

const About = () => {
    return (
        <div className='bg-[#FFF7EA]'>
            <Banner></Banner>
                <div className='my-12 mx-auto max-w-6xl' >
                    <h1 className='text-6xl font-bold text-amber-950 text-center'>About Us</h1>
                    <p className='font-semibold text-lg mt-7 text-center'>We are not just event planners; we are memory creators. With a passion for perfection and an eye for detail, we transform ordinary moments into extraordinary experiences. Our mission is simple - to make your dream events come to life.</p>
                    <h1 className='text-4xl mt-12 font-bold text-amber-950 text-center'>Our Commitment</h1>
                    <p className='font-semibold text-lg mt-7 text-center'>
                    We believe that every event is an opportunity to create lasting memories. Whether it is a milestone celebration, a corporate gala, or a once-in-a-lifetime wedding, we are committed to making it remarkable. Our team's dedication, creativity, and passion ensure that your event stands out and leaves a lasting impression on you and your guests.
                    Let us be your event partner. Contact with us today, and let us start planning your unforgettable moments together.
                   </p>
                </div>
            <Footer></Footer>
        </div>
    );
};

export default About;