import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import 'chartjs-adapter-date-fns';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend,  registerables } from 'chart.js';
import Table from './Table'


ChartJS.register(...registerables);

const isValidData = (data) => {
  return data && data.period && data.average_value !== undefined;
};


const Dashboard = () => {
  const [data, setData] = useState([]);
  const [period, setPeriod] = useState('hourly');
  // Affichages des données du tableau
  const [data1, setData1] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/sensor");
        setData1(response.data); 
      } catch (error) {
        console.error("Erreur lors de la récupération des données:", error);
      }
    };

    fetchData();
  }, []);

  // Visualisation du graphique
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/sensor/aggregate?period=${period}`);
        const validData = response.data.filter(isValidData);
        if (Array.isArray(response.data)) {
          setData(response.data);
        } else {
          throw new Error('Les données récupérées ne sont pas un tableau');
        }
        setData(validData);
      } catch (error) {
        console.error('Erreur lors de la récupération des données:', error);
      }
    };
    fetchData();
  }, [period]);

  const chartData = {
    labels: data.map(item => item.period),
    datasets: [
      {
        label: 'Valeur Moyenne',
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
      <h1 className='text-3xl font-medium mt-8 ml-10'>Dashboard</h1>
      <p className='mt-4 ml-8 text-xl'> Visualisation des données fournies par la station <span className='text-blue-500 text-shadow ml-2 font-sans'> <a href='https://airqino-api.magentalab.it/getLastValuesRaw/SMART188' target="_blank">SMART188</a> </span> </p>
      <div className='ml-36 mt-12'>
        <button onClick={() => setPeriod('hourly')} className='px-2 py-1 bg-blue-500 rounded text-white mt-4 ml-4 mr-4'>Horaire</button>
        <button onClick={() => setPeriod('daily')} className='px-2 py-1 bg-blue-500 rounded text-white mt-4  mr-4' >Journalier</button>
      </div>
      <div className='w-2/4 mx-auto  mt-6'>
        <Line data={chartData} options={options} />
      </div>
      <div className='w-3/4 mx-auto mt-20 mb-4'>
      <h1 className="text-2xl font-medium text-center mt-4 mb-6">Détails des données issues de la station</h1>
      <Table data={data1} />
      </div>
      
    </div>
  );
};

export default Dashboard;
