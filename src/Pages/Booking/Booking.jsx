import { useEffect, useState } from "react";
import Footer from "../../Components/Footer/Footer";
import BookingCard from "./BookingCard";

const Offer = () => {
const [bookingCards, setBookingCards] =useState([])
useEffect(()=>{
    fetch('/data.json')
    .then(res => res.json())
    .then(data => setBookingCards(data))
},[])
  return (
    <div>
      <div className="space-y-12">
            {
                bookingCards.map(bookingCards => <BookingCard key={bookingCards.id} bookingCards ={bookingCards} ></BookingCard>)
            }
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Offer;
