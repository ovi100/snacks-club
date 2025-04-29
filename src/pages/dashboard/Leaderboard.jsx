import React from 'react';
import { sortArray } from '../../utils';
import Chart from 'react-apexcharts';

const Leaderboard = () => {
  const members = [
    { name: 'aquib', date: new Date().toISOString(), amount: 210 },
    { name: 'khawja', date: new Date().toISOString(), amount: 300 },
    { name: 'sayed', date: new Date().toISOString(), amount: 310 },
    { name: 'upol', date: new Date().toISOString(), amount: 342 },
    { name: 'gazi', date: new Date().toISOString(), amount: 321 },
    { name: 'rifat', date: new Date().toISOString(), amount: 300 },
    { name: 'prima', date: new Date().toISOString(), amount: 200 },
    { name: 'siam', date: new Date().toISOString(), amount: 100 },
    { name: 'sadia', date: new Date().toISOString(), amount: 300 },
    { name: 'rezwan', date: new Date().toISOString(), amount: 290 },
  ];

  const sortedData = sortArray(members, { key: 'amount', order: 'desc' });

  const labels = sortedData.map(item => item.name);
  const numbers = sortedData.map(item => item.amount);

  const chartData = {
    series: [{
      data: numbers
    }],
    options: {
      chart: {
        height: 350,
        type: 'bar',
      },
      plotOptions: {
        bar: {
          columnWidth: '45%',
          distributed: true,
        }
      },
      dataLabels: {
        enabled: false
      },
      legend: {
        show: false
      },
      xaxis: {
        categories: labels,
        labels: {
          style: {
            fontSize: '12px'
          }
        }
      }
    },
  };

  return (
    <div><Chart options={chartData.options} series={chartData.series} type="bar" height={350} /></div>
  )
}

export default Leaderboard;