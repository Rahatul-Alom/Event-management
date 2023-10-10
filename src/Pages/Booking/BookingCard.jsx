import React from "react";

const BookingCard = ({bookingCards}) => {
    const {name, id, image, description, price} = bookingCards;
  return (
    <div>
      <div className=" mx-auto max-w-6xl card lg:card-side bg-base-100 shadow-xl">
        <figure className="">
          <img className=" h-80 w-[700px]" src={image}alt=""/>
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p className="font-bold text-amber-900">Price of event: {price}</p>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <button className="btn bg-amber-900 text-white font-semibold">Booking Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
