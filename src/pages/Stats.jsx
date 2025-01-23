import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';

const Stats = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    chrome.storage.local.get(['activity'], (result) => {
      const activity = result.activity || {};
      const chartData = Object.entries(activity).map(([domain, count]) => ({
        domain,
        count,
      }));
      setData(chartData);
    });
  }, []);

  return (
    <div>
      <h1>Productivity Stats</h1>
      <BarChart width={500} height={300} data={data}>
        <XAxis dataKey="domain" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="count" fill="#8884d8" />
      </BarChart>
    </div>
  );
};

export default Stats;
