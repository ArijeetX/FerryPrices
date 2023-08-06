import React, { useEffect, useState } from "react";
import FerryCard from "../components/ferrycard";
import axios from "axios";
import styles from "./index.module.css";

const HomePage = () => {
  const [arrival, setArrival] = useState('Port Blair');
  const [destination, setDestination] = useState('Shaheed Dweep');
  const [selectedLocation, setselectedLocation] = useState(false);
  const [filteredTrips, setfilteredTrips] = useState([]);
  const [ferryTrips, setferryTrips] = useState([]);
  const [selectedDate, setSelectedDate] = useState("");

    const handleSearch = () => {
    // Filter the data based on the selected arrival and destination
    const trips = []
    // Update the filtered data state
      for (const trip of ferryTrips) {
        console.log(trip.from === arrival);
        if (trip.from === arrival && trip.to === destination) {
          trips.push(trip)
       }
      }
      console.log(trips)
    setfilteredTrips(trips);
    console.log(filteredTrips);
    // Perform the search action here with arrival and destination values
    setselectedLocation(true)
  };

  useEffect(() => {
    const currTime = Date.now() / 1000;
    const laterTime = currTime + 86400;
    let body = {
      fromTS: currTime,
      toTS: laterTime,
    }
    let data = JSON.stringify(body);

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://pgdb.in:8005/getTrips",
      headers: {
        "Content-Type": "text/plain",
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        setferryTrips(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

  }, []);

  return (
    <div className={styles.container} style={{ backgroundImage: "url('/titanic.jpg')" }}>
      <h1 className={styles.heading}>Ferry Trip Search</h1>
      <div className={styles.inputContainer}>
        <div className={styles.formGroup}>
          <label htmlFor="fromSelect">From:</label>
          <select
            id="fromSelect"
            value={arrival}
            onChange={(e) => setArrival(e.target.value)}
            className={styles.fromSelect}
          >
            <option value="Port Blair">Port Blair</option>
            <option value="Shaheed Dweep">Shaheed Dweep</option>
            <option value="Swaraj Dweep">Swaraj Dweep</option>
          </select>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="toSelect">To:</label>
          <select
            id="toSelect"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className={styles.toSelect}
          >
            <option value="Port Blair">Port Blair</option>
            <option value="Shaheed Dweep">Shaheed Dweep</option>
            <option value="Swaraj Dweep">Swaraj Dweep</option>
          </select>
        </div>
        <div className={styles.formGroup}>

          <label htmlFor="dateSelect">Date:</label>
          <input
            required
            type="date"
            id="dateSelect"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className={styles.dateSelect}
          />
        </div>
        <button className={styles.searchButton} onClick={handleSearch}>
          Search
        </button>
      </div>
      {selectedLocation && (filteredTrips.length > 0 ? (
        <div className={styles.tripContainer}>
          {filteredTrips.map((ferrydata) => (
            <FerryCard key={ferrydata.id} ferrydata={ferrydata} />
          ))}
        </div>
      ) : (
        <h1>No trips found</h1>
      ))}
    </div>
  );
};
export default HomePage;
