import { useEffect, useState } from "react";
import ChooseCards from "./ChooseCards";

const WhyChooseUs = () => {
    const [chooseCards, setChooseCards] = useState([])
        useEffect(()=>{
            fetch('/choosing_data.json')
            .then(res => res.json())
            .then(data => setChooseCards(data))
        })  
    return (
        <div className=''>
            <div className="text-center my-12">
                <h1 className='text-6xl font-bold text-black my-12'>Why choose us?</h1>
                <p className=" text-center">We have been established for over 20 years, hosting thousands of weddings, birthday celebrations, Romantic Anniversary Dinner, Engagement Event, Retirement Celebration, Baby Shower Delight parties and a variety of social events. </p>
            </div>
            <div className='grid grid-cols-2  gap-11'>
                    {
                        chooseCards.map(chooseCards=> <ChooseCards key={chooseCards.id} chooseCards={chooseCards}></ChooseCards>)
                    }
            </div>
        </div>
);

};

export default WhyChooseUs;