import React, { useState } from 'react';
import axios from 'axios';
import "./ajouterPlayer.css"

function AjouterUtilisateur() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [passwordHash, setPassword] = useState(''); // Add state for password
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/Players', {
        username,
        email,
        passwordHash// Include password in the POST request
      });
      // Clear input fields after submission
      setEmail('');
      setUsername('');
      setPassword('');
    } catch (error) {
      console.error('Error adding player:', error);
    }
  };

  return (
    <div className="ajouter-utilisateur">
      <h2>Add Player</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username:</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" value={passwordHash} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit">Add Player</button>
      </form>
    </div>
  );
}

export default AjouterUtilisateur;