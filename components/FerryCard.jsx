import React from "react";
import Link from "next/link";
const FerryCard = (props) => {
  const {
    _id,
    vesselName,
    vesselOperator,
    dTime,
    aTime,
    from,
    to,
    pmb,
    fares,
    travelTS,
    isActiveInBooking,
  } = props.ferrydata;

  const handleBookNow = () => {
    // Implement the booking action here or navigate to a booking page
    console.log("Book now clicked for ferry with ID:", _id);
  };

  return (
    <div style={styles.card}>
      <div style={styles.header}>
        <h2 style={styles.vesselName}>{vesselName}</h2>
        <p style={styles.vesselOperator}>{vesselOperator}</p>
      </div>
      <div style={styles.timeContainer}>
        <p>
          Departure Time: {dTime.hour}:{dTime.minute}
        </p>
        <p>
          Arrival Time: {aTime.hour}:{aTime.minute}
        </p>
      </div>
      <div style={styles.routeContainer}>
        <p>From: {from}</p>
        <p>To: {to}</p>
        <p>PMB: {pmb}</p>
      </div>
      <div style={styles.footer}>
        <Link href={{pathname: '/Booking', query: {vesselName}}}>
          <button
            style={styles.bookButton}
            onClick={() => {
              handleBookNow(vesselName);
            }}
          >
            Book Now
          </button>
        </Link>
      </div>
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    padding: "16px",
    marginBottom: "16px",
    backgroundColor: "#fff",
    maxWidth: "400px",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "8px",
  },
  vesselName: {
    margin: "0",
  },
  vesselOperator: {
    margin: "0",
    fontSize: "14px",
    color: "#888",
  },
  timeContainer: {
    marginBottom: "8px",
  },
  routeContainer: {
    marginBottom: "8px",
  },
  faresContainer: {
    marginBottom: "8px",
  },
  footer: {
    borderTop: "1px solid #ddd",
    paddingTop: "8px",
    fontSize: "14px",
    color: "#888",
  },
  bookButton: {
    background: "#007BFF",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    padding: "8px 16px",
    cursor: "pointer",
  },
};

export default FerryCard;
