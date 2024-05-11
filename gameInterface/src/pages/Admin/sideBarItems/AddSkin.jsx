import React, { useState } from 'react';
import axios from 'axios';
import "./ajouterPlayer.css"

function AddSkin() {
  const [skinName, setSkinName] = useState('');
  const [skinRarity, setSkinRarity] = useState('');
  const [skinPrice, setSkinPrice] = useState(''); // Add state for password
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/Skins', {
        skinName,
        skinRarity,
        skinPrice// Include password in the POST request
      });
      // Clear input fields after submission
      skinName('');
      skinRarity('');
      skinPrice('');
    } catch (error) {
      console.error('Error adding player:', error);
    }
  };

  return (
    <div className="ajouter-utilisateur">
      <h2>Add Skin</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Skin Name:</label>
          <input type="text" value={skinName} onChange={(e) => setSkinName(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Skin Rarity:</label>
          <input type="text" value={skinRarity} onChange={(e) => setSkinRarity(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Skin Price:</label>
          <input type="text" value={skinPrice} onChange={(e) => setSkinPrice(e.target.value)} required />
        </div>
        <button type="submit">Add Skin</button>
      </form>
    </div>
  );
}

export default AddSkin;