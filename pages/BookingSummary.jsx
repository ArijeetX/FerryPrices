import React from 'react';

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
    // paddingTop: '2rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const imgStyle = {
    width: '35vw',
    height: '30vh',
    marginTop: "-3rem"
  };

  const annualPlanStyle = {
    color: 'hsl(223, 47%, 23%)',
    fontWeight: 700,
  };

 const subscriptionStyle = {
    display: "flex",
    flexDirection:"row",
    backgroundColor: "hsl(225, 100%, 98%)",
    borderRadius: "12px",
    width: "100%",
    alignItems: "center"
}

  const btnStyle = {
    width: '100%',
    margin: '1.7rem',
    padding: '.8rem',
    backgroundColor: 'hsl(245, 75%, 52%)',
    color: 'white',
    borderRadius: '10px',
    border: 'none',
    fontWeight: 700,
  };

  const subscriptionNotesStyle = {
    width: "auto",
    height: "auto",
    margin: "1.5rem"
  }

  return (
    <main style={containerStyle} className="wrapper">
      <div style={wrapperStyle} className="container">
        <img
          id="img"
          src="/illustration-hero.svg"
          alt=""
          style={imgStyle}
        />
        <h2 className="title">Order Summary</h2>
        <p className="subtitle">
          You can now listen to millions of songs, audiobooks, and podcasts on
          any device anywhere you like!
        </p>
        <div className="subscribtion" style={subscriptionStyle}>
          <img id="notes" style={subscriptionNotesStyle} src="/icon-music.svg" alt="" />
          <div>
            <p className="annualPlan">Annual Plan</p>
            <p className="pricePerYear">$59.99/year</p>
          </div>
          <a className="change" href="#">
            Change
          </a>
        </div>
        <button className="btn" style={btnStyle}>
          Proceed to Payment
        </button>
        <p className="cancel">Cancel Order</p>
      </div>
    </main>
  );
};

export default OrderSummaryCard;
