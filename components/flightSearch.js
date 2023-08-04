import React, { useState } from 'react';
import axios from 'axios';

const FlightSearch = () => {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [flights, setFlights] = useState([]);

  const handleSearch = async () => {
    try {
      // Replace 'YOUR_API_ENDPOINT' with the actual API endpoint that provides flight data
      const response = await axios.get(YOUR_API_ENDPOINT, {
        params: {
          origin,
          destination,
          departureDate,
        },
      });

      setFlights(response.data); // Assuming the API returns an array of flight data
    } catch (error) {
      console.error('Error fetching flight data:', error);
    }
  };

  return (
    <div>
      <h1>MakeMyTrip Flight Search</h1>
      <div>
        <input
          type="text"
          placeholder="Origin"
          value={origin}
          onChange={(e) => setOrigin(e.target.value)}
        />
        <input
          type="text"
          placeholder="Destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />
        <input
          type="date"
          value={departureDate}
          onChange={(e) => setDepartureDate(e.target.value)}
        />
        <button onClick={handleSearch}>Search Flights</button>
      </div>
      <ul>
        {flights.map((flight, index) => (
          <li key={index}>
            {/* Display flight details here */}
            {flight.origin} to {flight.destination} - {flight.departureTime} to {flight.arrivalTime}, Price: {flight.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FlightSearch;