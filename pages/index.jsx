import React, { useEffect, useState } from "react";
import FerryCard from "../components/ferrycard";
import apiData from "../apiData";
import axios from "axios";

const HomePage = () => {
  const [arrival, setArrival] = useState('Port Blair');
  const [destination, setDestination] = useState('Shaheed Dweep');
  const [selectedLocation, setselectedLocation] = useState(false);
  const [filteredTrips, setfilteredTrips] = useState([]);
    const handleSearch = () => {
    // Filter the data based on the selected arrival and destination
    const trips = []
    // Update the filtered data state
      for (const trip of apiData) {
        console.log(trip.from === arrival);
        if (trip.from === arrival && trip.to === destination) {
         console.log("gg")
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
    // Your useEffect code for fetching API data...
  }, []);

  return (
    <>
      <select value={arrival} onChange={(e) => setArrival(e.target.value)}>
        <option value="Port Blair">Port Blair</option>
        <option value="Shaheed Dweep">Shaheed Dweep</option>
        <option value="Swaraj Dweep">Swaraj Dweep</option>
      </select>
      <select value={destination} onChange={(e) => setDestination(e.target.value)}>
        <option value="Port Blair">Port Blair</option>
        <option value="Shaheed Dweep">Shaheed Dweep</option>
        <option value="Swaraj Dweep">Swaraj Dweep</option>
      </select>
      <button onClick={handleSearch}>Search</button>
      {
        selectedLocation && 
        filteredTrips.map((ferrydata) => { 
          return <FerryCard ferrydata={ferrydata} />
        })
      }
      {
        selectedLocation && filteredTrips.length === 0 && <h1>No trips found</h1>
      }
    </>
  );
};

export default HomePage;
