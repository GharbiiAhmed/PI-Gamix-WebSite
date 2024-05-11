import React, { useState } from 'react';
import axios from 'axios';
import "./ajouterPlayer.css"

function AddItem() {
  const [itemName, setItemName] = useState('');
  const [itemType, setItemType] = useState('');
  const [itemRarity, setItemRarity] = useState(''); // Add state for password
  const [itemPrice, setItemPrice] = useState(''); // Add state for password
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/Items', {
        itemName,
        itemType,
        itemRarity,// Include password in the POST request
        itemPrice// Include password in the POST request
      });
      // Clear input fields after submission
      itemName('');
      itemType('');
      itemRarity('');
      itemPrice('');
    } catch (error) {
      console.error('Error adding player:', error);
    }
  };

  return (
    <div className="ajouter-utilisateur">
      <h2>Add Item</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Item Name:</label>
          <input type="text" value={itemName} onChange={(e) => setItemName(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Item Type:</label>
          <input type="text" value={itemType} onChange={(e) => setItemType(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Item Rarity:</label>
          <input type="text" value={itemRarity} onChange={(e) => setItemRarity(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Item Price:</label>
          <input type="text" value={itemPrice} onChange={(e) => setItemPrice(e.target.value)} required />
        </div>
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
}

export default AddItem;