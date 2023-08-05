import React from 'react';
import { useRouter } from 'next/router';

const BookingSummary = () => {
  // Replace the following values with your actual data or use React Router to get the data from the URL query
  const vesselName = 'Vessel Name';
  const name = 'John Doe';
  const age = '30';
  const email = 'john.doe@example.com';
  const phoneNumber = '1234567890';
  const price = '1500';

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundImage: `url('/search-background.jpg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
    }}>
      <h2 style={{
        fontSize: '32px',
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: '16px',
      }}>Booking Summary</h2>
      <div style={{
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        borderRadius: '8px',
        padding: '20px',
        width: '100%',
        maxWidth: '400px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '12px',
            backgroundColor: '#fff',
            borderRadius: '4px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            fontSize: '16px',
            color: '#333',
          }}>
            <span>Vessel Name:</span>
            <span>{vesselName}</span>
          </div>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '12px',
            backgroundColor: '#fff',
            borderRadius: '4px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            fontSize: '16px',
            color: '#333',
          }}>
            <span>Name:</span>
            <span>{name}</span>
          </div>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '12px',
            backgroundColor: '#fff',
            borderRadius: '4px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            fontSize: '16px',
            color: '#333',
          }}>
            <span>Age:</span>
            <span>{age}</span>
          </div>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '12px',
            backgroundColor: '#fff',
            borderRadius: '4px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            fontSize: '16px',
            color: '#333',
          }}>
            <span>Email:</span>
            <span>{email}</span>
          </div>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '12px',
            backgroundColor: '#fff',
            borderRadius: '4px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            fontSize: '16px',
            color: '#333',
          }}>
            <span>Number:</span>
            <span>{phoneNumber}</span>
          </div>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '12px',
            backgroundColor: '#fff',
            borderRadius: '4px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            fontSize: '16px',
            color: '#333',
          }}>
            <span>Price:</span>
            <span>{price}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingSummary;
