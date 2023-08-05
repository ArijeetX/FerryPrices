import React, { useState } from "react";
import { useRouter } from "next/router";
import backgroundImage from '../public/booking.jpg';

const BookingPage = () => {
  const router = useRouter();
  const { vesselName } = router.query;
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedPrice, setSelectedPrice] = useState(1050);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handlePriceChange = (event) => {
    setSelectedPrice(parseInt(event.target.value, 10));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform booking logic here using the collected data
    // For simplicity, let's just log the user information and selected price
    router.push({
      pathname: "/BookingSummary",
      query: {
        vesselName,
        name,
        age,
        email,
        phoneNumber,
        price: selectedPrice,
      },
    });
  };

  return (
    <div style={styles.container}>
      <div style={styles.backgroundImage}></div>
      <h2 style={styles.heading}>Booking Ferry</h2>
      <p style={styles.vesselName}>Vessel Name: {vesselName}</p>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={handleAgeChange}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="price">Select Price:</label>
          <select
            id="price"
            value={selectedPrice}
            onChange={handlePriceChange}
            required
            style={styles.input}
          >
            <option value="" disabled>
              Please select a price
            </option>
            <option value={1050}>1050</option>
            <option value={1400}>1400</option>
            <option value={1500}>1500</option>
          </select>
        </div>
        <button type="submit" style={styles.bookButton}>
          Book Now
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    position: "relative", // Make the container positioned relatively
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundImage: `url('/booking.jpg')`, // Add background image
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
  },
  backgroundImage: {
    position: "absolute", // Position the background image absolutely
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: -1,
    opacity: 0.5,
    backgroundImage: `url('/booking.jpg')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  heading: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "16px",
    textAlign: "center",
  },
  vesselName: {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "16px",
    display: "flex",
    justifyContent: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  formGroup: {
    marginBottom: "20px",
    display: "flex", // Added flex display
    alignItems: "center", // Center elements vertically in the flex container
  },
  input: {
    padding: "10px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    flex: 1, // Take available horizontal space in the flex container
    marginLeft: "10px", // Add some spacing between label and input
  },
  bookButton: {
    display: "flex",
    justifyContent: "center",
    background: "#007BFF",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    padding: "12px",
    cursor: "pointer",
    fontSize: "18px",
    //alignSelf: "flex-start", // Align button to the start of the flex container
  },
};

export default BookingPage;
