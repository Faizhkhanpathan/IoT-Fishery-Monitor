import React, { useEffect, useState } from 'react';
import { getAllData } from '../services/api';
import DataChart from './DataChart';

const Dashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getAllData();
      setData(result);
    };
    fetchData();
    const interval = setInterval(fetchData, 60000); // Refresh every minute
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>Fishery Water Quality Dashboard</h1>
      {data.length > 0 && (
        <>
          <h2>Latest Data</h2>
          <p>Temperature: {data[0].temperature} °C</p>
          <p>pH: {data[0].ph}</p>
          <p>Turbidity: {data[0].turbidity} NTU</p>
          <DataChart data={data} />
        </>
      )}
    </div>
  );
};

export default Dashboard;