import React, { useState, useEffect } from 'react';
import "./ajouterPlayer.css";
import axios from 'axios';
import { Link , useNavigate } from 'react-router-dom';

function Item() {

  const navigate = useNavigate();

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/Items');
      setUsers(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  console.log(users)

  const handleConsulter = (id) => {
 navigate('/Items/'+id)
  };

  const handleSupprimer = async (id) => {
     try {
      await axios.delete(`http://localhost:3000/Items/${id}`);
      setUsers(users.filter(user => user._id !== id));
    } 
     catch(error) {
      console.error(error);
    }
     
  };

  return (
    <div className="bands-container">
      <button className='button-add'><Link to="/additem" style={{ textDecoration: 'none', color: 'white' }}>Add Item</Link></button>
      <div className="utilisateur-container">
        {users.map((user, index) => (
          <div key={index} className="utilisateur-card">
            <div className="utilisateur-field">
              <span className="field-name">ItemName: </span>
              <span className="field-value">{user.itemName}</span>
            </div>
            <div className="utilisateur-field">
              <span className="field-name">ItemType: </span>
              <span className="field-value">{user.itemType}</span>
            </div><div className="utilisateur-field">
              <span className="field-name">ItemRarity: </span>
              <span className="field-value">{user.itemRarity}</span>
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

export default Item;