import React, { useState, useEffect } from 'react';
import "./ajouterPlayer.css";
import axios from 'axios';
import { Link , useNavigate } from 'react-router-dom';

function Skin() {

  const navigate = useNavigate();

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/Skins');
      setUsers(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  console.log(users)

  const handleConsulter = (id) => {
 navigate('/Skins/'+id)
  };

  const handleSupprimer = async (id) => {
     try {
      await axios.delete(`http://localhost:3000/Skins/${id}`);
      setUsers(users.filter(user => user._id !== id));
    } 
     catch(error) {
      console.error(error);
    }
     
  };

  return (
    <div className="bands-container">
      <button className='button-add'><Link to="/addskin" style={{ textDecoration: 'none', color: 'white' }}>Add Skin</Link></button>
      <div className="utilisateur-container">
        {users.map((user, index) => (
          <div key={index} className="utilisateur-card">
            <div className="utilisateur-field">
              <span className="field-name">SkinName: </span>
              <span className="field-value">{user.skinName}</span>
            </div>
            <div className="utilisateur-field">
              <span className="field-name">SkinRarity: </span>
              <span className="field-value">{user.skinRarity}</span>
            </div>
            <div className="utilisateur-field">
              <span className="field-name">skinPrice: </span>
              <span className="field-value">{user.skinPrice}</span>
            </div>
          
            <div className="button-container">
              <button onClick={() => handleConsulter(user._id)}>View Details</button>
              <button onClick={() => handleSupprimer(user._id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
      </div>
    
  );
}

export default Skin;