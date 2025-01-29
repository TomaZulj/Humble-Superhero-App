import React, { useState } from 'react';
import axios from 'axios';

const SuperheroForm = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [superpower, setSuperpower] = useState('');
  const [humilityScore, setHumilityScore] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newSuperhero = { name, superpower, humilityScore: Number(humilityScore) };
    // URL should be put in .env file, but for showcase purposes, I left it here
    await axios.post('http://localhost:3000/superheroes', newSuperhero);
    onAdd();
    setName('');
    setSuperpower('');
    setHumilityScore('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Superpower"
        value={superpower}
        onChange={(e) => setSuperpower(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Humility Score"
        value={humilityScore}
        onChange={(e) => setHumilityScore(e.target.value)}
        required
        min="1"
        max="10"
      />
      <button type="submit">Add Superhero</button>
    </form>
  );
};

export default SuperheroForm;