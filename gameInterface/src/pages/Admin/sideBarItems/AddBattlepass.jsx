import React, { useState } from 'react';
import axios from 'axios';
import "./ajouterPlayer.css"

function AddBattlepass() {
  const [name, setName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState(''); 
  const [status, setStatus] = useState(''); 
  const [price, setPrice] = useState(''); 
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/battlepasses', {
        name,
        startDate,
        endDate,
        status,
        price// Include password in the POST request
      });
      // Clear input fields after submission
      name('');
      startDate('');
      endDate('');
      status('');
      price('');
    } catch (error) {
      console.error('Error adding Battlepass:', error);
      console.error('AxiosError:', error);
    }
  };

  return (
    <div className="ajouter-utilisateur">
      <h2>Add Battlepass</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Start Date:</label>
          <input type="Date" value={startDate} onChange={(e) => setStartDate(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>End Date:</label>
          <input type="Date" value={endDate} onChange={(e) => setEndDate(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Status:</label>
          <input type="text" value={status} onChange={(e) => setStatus(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Price:</label>
          <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} required />
        </div>
        <button type="submit">Add BattlePass</button>
      </form>
    </div>
  );
}

export default AddBattlepass;