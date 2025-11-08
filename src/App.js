import React from 'react';
import DashboardCards from './DashboardCards';
import DonationTrendsChart from './DonationTrendsChart';

// Adjust the path if your image is elsewhere
const bannerImage = require('./banner.jpg');

function App() {
  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(120deg, #e0eafc 0%, #cfdef3 100%)',
        padding: 0,
        margin: 0,
        fontFamily: 'sans-serif'
      }}
    >
      <header style={{
        textAlign: 'center',
        paddingTop: '24px',
        paddingBottom: '0',
      }}>
        <h1 style={{
          fontSize: '2.5rem',
          fontWeight: 700,
          color: '#2d3748',
          margin: '0 0 4px 0',
        }}>
          Donation Tracking Dashboard
        </h1>
        <p style={{
          color: '#4f46e5',
          fontSize: '1.1rem',
          fontWeight: 500,
          maxWidth: 650,
          margin: 'auto',
          marginBottom: '20px',
          lineHeight: 1.4,
        }}>
          Visualize donor impact and monitor donations with clarity. Easily track giving trends and totals in one place.
        </p>
      </header>
      {/* Main content area with full-size background */}
      <div style={{
        position: 'relative',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '25px 0',
        minHeight: '430px'
      }}>
        {/* True full-fit faded background image */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
          opacity: 0.60, // faded look, adjust as needed
          backgroundImage: `url(${bannerImage})`,
          backgroundSize: 'cover', // <--- ensures the image covers the area!
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          pointerEvents: 'none'
        }} />
        {/* Foreground content */}
        <div style={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
          gap: '36px',
        }}>
          <DashboardCards />
          <DonationTrendsChart />
        </div>
      </div>
    </div>
  );
}

export default App;
