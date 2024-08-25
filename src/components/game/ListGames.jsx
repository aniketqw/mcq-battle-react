// src/components/game/ListGames.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ListGames = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetchGames();
  }, []);

  const fetchGames = async () => {
    try {
      const response = await axios.get('http://localhost:8000/game/list-games/');
      setGames(response.data);
    } catch (error) {
      console.error('Error fetching games:', error);
    }
  };

  return (
    <div>
      <h1>Available Games</h1>
      <ul>
        {games.map((game) => (
          <li key={game.id}>
            <h2>{game.name}</h2>
            <p>Game ID: {game.gameId}</p>
            <p>Owner ID: {game.adminId}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListGames;
