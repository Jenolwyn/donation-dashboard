import React from 'react';

const DashboardCards = () => {
  // Dummy data
  const totalDonations = 12500;
  const numberOfDonors = 320;

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '22px',
    }}>
      <div style={{
        padding: '20px 32px',
        background: '#4f46e5',
        color: 'white',
        borderRadius: '10px',
        minWidth: '210px',
        textAlign: 'center',
        boxShadow: '0 4px 8px rgba(0,0,0,0.18)'
      }}>
        <h3 style={{ margin: 0, fontWeight: 600 }}>Total Donations</h3>
        <p style={{ fontSize: '1.7rem', fontWeight: 'bold', margin: '12px 0 0 0' }}>${totalDonations.toLocaleString()}</p>
      </div>
      <div style={{
        padding: '20px 32px',
        background: '#10b981',
        color: 'white',
        borderRadius: '10px',
        minWidth: '210px',
        textAlign: 'center',
        boxShadow: '0 4px 8px rgba(0,0,0,0.18)'
      }}>
        <h3 style={{ margin: 0, fontWeight: 600 }}>Number of Donors</h3>
        <p style={{ fontSize: '1.7rem', fontWeight: 'bold', margin: '12px 0 0 0' }}>{numberOfDonors.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default DashboardCards;
