import React, { useState, useEffect } from 'react';
import "./ajouterPlayer.css";
import axios from 'axios';
import { Link , useNavigate } from 'react-router-dom';

function BattlePass() {

  const navigate = useNavigate();

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/battlepasses');
      setUsers(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  console.log(users)

  const handleConsulter = (id) => {
 navigate('/battlepasses/'+id)
  };

  const handleSupprimer = async (id) => {
     try {
      await axios.delete(`http://localhost:3000/battlepasses/${id}`);
      setUsers(users.filter(user => user._id !== id));
    } 
     catch(error) {
      console.error(error);
    }
     
  };

  return (
    <div className="bands-container">
      <button className='button-add'><Link to="/addbattlepasses" style={{ textDecoration: 'none', color: 'white' }}>Add Battlepass</Link></button>
      <div className="utilisateur-container">
        {users.map((user, index) => (
          <div key={index} className="utilisateur-card">
            <div className="utilisateur-field">
              <span className="field-name">battlepass name: </span>
              <span className="field-value">{user.name}</span>
            </div>
            <div className="utilisateur-field">
              <span className="field-name">start date: </span>
              <span className="field-value">{user.startDate}</span>
            </div>
            <div className="utilisateur-field">
              <span className="field-name">end date: </span>
              <span className="field-value">{user.endDate}</span>
            </div>
            <div className="utilisateur-field">
              <span className="field-name">status: </span>
              <span className="field-value">{user.status}</span>
            </div>
            <div className="utilisateur-field">
              <span className="field-name">price: </span>
              <span className="field-value">{user.price}</span>
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

export default BattlePass;