import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Dummy data for donation trends
const data = [
  { month: 'Jan', donations: 1200 },
  { month: 'Feb', donations: 2100 },
  { month: 'Mar', donations: 800 },
  { month: 'Apr', donations: 1600 },
  { month: 'May', donations: 2200 },
  { month: 'Jun', donations: 2000 },
];

const DonationTrendsChart = () => (
  <div style={{
    width: '100%',
    maxWidth: '650px',
    background: 'white',
    borderRadius: '14px',
    boxShadow: '0 2px 12px rgba(0,0,0,0.07)',
    padding: '28px 24px'
  }}>
    <h2 style={{ textAlign: 'center', marginBottom: '18px', color: '#4f46e5' }}>Donation Trends</h2>
    <ResponsiveContainer width="100%" height={320}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="4 2" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="donations" fill="#10b981" radius={[7, 7, 0, 0]} barSize={40} />
      </BarChart>
    </ResponsiveContainer>
  </div>
);

export default DonationTrendsChart;
