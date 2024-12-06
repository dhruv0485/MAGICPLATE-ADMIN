import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const CategoryDistributionChart = ({ products }) => {
  const [chartData, setChartData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      if (!Array.isArray(products)) {
        throw new Error('Products data is not an array');
      }
      const categories = ['Cake', 'Macrons', 'Cookies', 'Donuts','Pastries'];
      const categoryCounts = categories.map(category => ({
        category,
        count: products.filter(productive => 
          productive.category && productive.category.toLowerCase() === category.toLowerCase()
        ).length
      }));
      setChartData(categoryCounts);
    } catch (err) {
      console.error("Error processing chart data:", err);
      setError(err.message);
    }
  }, [products]);

  if (error) {
    return <div>Error loading chart: {error}</div>;
  }

  if (chartData.length === 0) {
    return <div>Loading chart data...</div>;
  }

  return (
    <div className="chart-container">
      <h3 className="chart-title">Category Distribution</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="category" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CategoryDistributionChart;