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
        <div style={styles.dept}>
          <p style={{ fontSize: "20px" }}>
            {dTime.hour}:{dTime.minute}
          </p>
          <p style={{ fontSize: "10px", marginTop: "-35%" }}>{from}</p>
        </div>
        <div style={styles.duration}>
        <p style={{ fontSize: "20px", color: "grey" }}>
            {Math.abs(dTime.hour-aTime.hour)}:{Math.abs(dTime.minute-aTime.minute)}
          </p>
        </div>
        <div style={styles.arr}>
          <p style={{ fontSize: "20px" }}>
            {aTime.hour}:{aTime.minute}
          </p>
          <p style={{ fontSize: "10px", marginTop: "-35%" }}>{to}</p>
        </div>
      </div>
      <div style={styles.footer}>
        <Link href={{ pathname: "/Booking", query: { vesselName } }}>
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
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  header: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "8px",
    marginRight: "20px",
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
    marginLeft: "50px",
    display: "flex",
    flexDirection: "row",
    marginRight: "40px",
  },
  dept: {
    marginRight: "150px",
  },
  duration: {
    marginRight: "150px",
  },
  arr: {
    marginRight: "150px",
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
