import React, { useState, useEffect } from 'react';
import "./players.css";
import axios from 'axios';
import { Link , useNavigate } from 'react-router-dom';

function Players() {

  const navigate = useNavigate();

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/Players');
      setUsers(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleConsulter = (id) => {
 navigate('/utilisateurDetails/'+id)
  };

  const handleSupprimer = async (id) => {
     try {
      await axios.delete(`http://localhost:3000/Players/${id}`);
      setUsers(users.filter(user => user._id !== id));
    } 
     catch(error) {
      console.error(error);
    }
     
  };

  return (
    <div className="bands-container">
      <button className='button-add'><Link to="/addPlayer" style={{ textDecoration: 'none', color: 'white' }}>Add User</Link></button>
      <div className="utilisateur-container">
        {users.map((user, index) => (
          <div key={index} className="utilisateur-card">
            <div className="utilisateur-field">
              <span className="field-name">UserName: </span>
              <span className="field-value">{user.username}</span>
            </div>
            <div className="utilisateur-field">
              <span className="field-name">Email: </span>
              <span className="field-value">{user.email}</span>
            </div>
            <div className="utilisateur-field">
              <span className="field-name">Coins: </span>
              <span className="field-value">{user.coins}</span>
            </div>
            <div className="utilisateur-field">
              <span className="field-name">Xp: </span>
              <span className="field-value">{user.xp}</span>
            </div>
            <div className="utilisateur-field">
              <span className="field-name">Level: </span>
              <span className="field-value">{user.level}</span>
            </div>
            <div className="utilisateur-field">
              <span className="field-name">Rank: </span>
              <span className="field-value">{user.rank}</span>
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

export default Players;