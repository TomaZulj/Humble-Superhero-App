import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SuperheroList = () => {
  const [superheroes, setSuperheroes] = useState([]);

  const fetchSuperheroes = async () => {
    // URL should be put in .env file, but for showcase purposes, I left it here
    const response = await axios.get('http://localhost:3000/superheroes');
    setSuperheroes(response.data);
  };

  useEffect(() => {
    fetchSuperheroes();
  }, []);

  return (
    <div>
      <h2>Superheroes</h2>
      <ul>
        {superheroes.map((hero, index) => (
          <li key={index}>
            {hero.name} - {hero.superpower} - Humility: {hero.humilityScore}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SuperheroList;