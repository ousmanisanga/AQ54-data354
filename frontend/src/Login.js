import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import RegisterModal from './RegisterModal'



const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Appel API
      const response = await axios.post('http://localhost:3000/auth/login', { email, password });
      console.log('API response:', response.data)

      if (response.data.access_token) {
        login(response.data.access_token); 
        navigate('/Dashboard');
      } else {
        setErrorMessage('mot de passe ou email invalide');
      }
    } catch (error) {
      setErrorMessage('mot de passe ou email invalide');
      console.error('Erreur durant authentication:', error);
    }
  };

  return (
    <div>
     <div className="w-full h-24 shadow-xl flex justify-between items-center">
      <h1 className="text-3xl text-blue-500 font-medium font-serif ml-2">
        AQ54
      </h1>
      <div className="flex items-center">
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xl px-4 py-2 mr-4 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Connexion
        </button>
        <RegisterModal />
      </div>
   </div>

      <div className='w-[40%] mx-auto mt-32 bg-gray-100 py-6 rounded shadow-lg'>
        <h2 className='text-3xl text-center mt-4'>CONNEXION</h2>
        {errorMessage && <p className='text-blue-300 text-2xl'>{errorMessage}</p>}
        <form onSubmit={handleSubmit} className='w-full'>
          <div className='ml-8 mb-2 mt-8'>
            <label className='text-xl font-medium'>Email :</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className='px-14 py-3 ml-16 rounded-lg focus:ring-blue-500 focus:border-blue-500 border border-sky-500 font-medium' required />
          </div>
          <div className='ml-8 mb-2 mt-8'>
            <label className='text-xl font-medium'>Password :</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className='px-14 py-3 ml-8 rounded-lg focus:ring-blue-500 focus:border-blue-500 border border-sky-500 font-medium' required />
          </div>
          <div className='w-full flex items-center justify-center'>
            <button type="submit" className="text-white bg-blue-700 mt-8 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xl text-center mb-4 px-10 py-2.5 me-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Connexion</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
