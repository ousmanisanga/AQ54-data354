import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

function RegisterModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const response = await axios.post("http://localhost:3000/auth/register", {
        name,
        email,
        password,
      });
      console.log('API response:', response.data)

      if (response.data.access_token) {
        console.log("success", response.data.access_token);
        login(response.data.access_token)
        navigate('/Dashboard');
        toggleModal();
      }
    } catch (error) {
      console.error("Erreur durant l'enregistrement user", error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <button
        className="text-black mt-4 bg-white hover:bg-blue-800 hover:text-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xl text-center mb-4 px-4 py-2 me-2 mr-6"
        onClick={toggleModal}
      >
        Créer un Compte
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
          <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
            <div className="mt-3 text-center">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Créer un Compte
              </h3>
              <div className="mt-2">
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <input
                      type="text"
                      placeholder="Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                      required
                    />
                  </div>
                  <div className="flex justify-center mt-4">
                    <button
                        type="submit"
                        className=" bg-blue-500 text-white py-2 w-1/3 px-4 rounded-md hover:bg-blue-600 mr-4"
                    >
                        Créer
                    </button>
                    <button
                        className="px-4 py-2 bg-red-500 w-1/3 text-white rounded hover:bg-red-600"
                        onClick={toggleModal}
                    >
                        Annuler
                    </button>
                  </div>
                 
                </form>
              </div>
              
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default RegisterModal;
