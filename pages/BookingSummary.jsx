import React, { useState } from 'react';

const OrderSummaryCard = () => {
  const containerStyle = {
    height: '100vh',
    background:
      'top/contain url(/pattern-background-desktop.svg) no-repeat, #E1E9FF',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const wrapperStyle = {
    width: '25rem',
    background: 'white',
    fontFamily: 'Red Hat Display, sans-serif',
    boxShadow: '0px 5px 15px 1px rgb(227, 227, 227)',
    overflow: 'hidden',
    borderRadius: '25px',
    padding: '3rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const imgStyle = {
    width: '35vw',
    height: '30vh',
    marginTop: '-3rem',
  };

  const subtitleStyle = {
    textAlign: 'center', // Center the subtitle text
  };

  const imageUrl = './illustration-hero.svg';

  return (
    <main style={containerStyle} className="wrapper">
      <div style={wrapperStyle} className="container">
        <img id="img" src={imageUrl} alt="Illustration" style={imgStyle} />
        <h4 className="subtitle" style={subtitleStyle}>
          Your ferry booking is confirmed! Get ready for a delightful journey on the waves.
        </h4>
        <div style={{ marginBottom: '1rem' }}>
          <strong>Vessel Name:</strong> MV Ocean Ferry
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <strong>Name:</strong> John Doe
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <strong>Age:</strong> 30
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <strong>Email:</strong> johndoe@example.com
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <strong>Amount:</strong> $50.00
        </div>
      </div>
    </main>
  );
};

export default OrderSummaryCard;
