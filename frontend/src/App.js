import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import 'chartjs-adapter-date-fns';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend,  registerables } from 'chart.js';


ChartJS.register(...registerables);

const isValidData = (data) => {
  return data && data.period && data.average_value !== undefined;
};

const App = () => {
  const [data, setData] = useState([]);
  const [period, setPeriod] = useState('hourly');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/sensor/aggregate?period=${period}`);
        const validData = response.data.filter(isValidData);
        setData(validData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [period]);

  const chartData = {
    labels: data.map(item => item.period),
    datasets: [
      {
        label: 'Average Value',
        data: data.map(item => item.average_value),
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  const options = {
    scales: {
      x: {
        type: 'time',
        time: {
          unit: period === 'hourly' ? 'hour' : 'day',
        },
      },
    },
  };

  return (
    <div>
      <h1>Sensor Data Visualization</h1>
      <div>
        <button onClick={() => setPeriod('hourly')} className='px-2 py-1 bg-blue-500 rounded text-white mt-4 ml-4 mr-4'>Horaire</button>
        <button onClick={() => setPeriod('daily')} className='px-2 py-1 bg-blue-500 rounded text-white mt-4  mr-4' >Journalier</button>
      </div>
      <div className='w-2/4 mx-auto my-[40%] mt-6'>
        <Line data={chartData} options={options} />
      </div>
      
    </div>
  );
};

export default App;
