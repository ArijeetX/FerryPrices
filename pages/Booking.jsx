import React, { useState } from "react";
import { useRouter } from "next/router";
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
      console.log(selectedPrice);
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
          <h2>Booking Ferry</h2>
            <p>Vessel Name: {vesselName}</p>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            required
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
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="price">Select Price:</label>
          <select
            id="price"
            value={selectedPrice}
            onChange={handlePriceChange}
            required
          >
            <option value="Please select a price" disabled>Please select a price</option>
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
    maxWidth: "400px",
    margin: "auto",
    padding: "16px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#fff",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  formGroup: {
    marginBottom: "16px",
  },
  bookButton: {
    background: "#007BFF",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    padding: "8px 16px",
    cursor: "pointer",
    marginTop: "16px",
  },
};

export default BookingPage;
