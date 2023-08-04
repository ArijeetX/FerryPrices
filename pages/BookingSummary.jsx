// pages/BookingSummary.js
import React from 'react';
import { useRouter } from 'next/router';

const BookingSummary = () => {
  const router = useRouter();
  const { vesselName, name, age, email, phoneNumber, price } = router.query;

  return (
    <div>
      <h2>Booking Summary</h2>
      <p>Vessel Name: {vesselName}</p>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Email: {email}</p>
      <p>Number: {phoneNumber}</p>
      <p>Price: {price}</p>
    </div>
  );
};

export default BookingSummary;
