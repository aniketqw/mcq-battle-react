// src/components/game/JoinGame.js
import React, { useState } from 'react';
import axios from 'axios';

const JoinGame = () => {
  const [gameId, setGameId] = useState('');
  const [playerId, setPlayerId] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8000/game/join-game/', {
        gameId,
        playerId,
      });
      console.log(`Request to join game with ID: ${gameId}`);
    } catch (error) {
      console.error('Error joining game:', error);
    }
  };

  return (
    <div>
      <h1>Join a Game</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Game ID:</label>
          <input type="text" value={gameId} onChange={(e) => setGameId(e.target.value)} required />
        </div>
        <div>
          <label>Player ID:</label>
          <input type="text" value={playerId} onChange={(e) => setPlayerId(e.target.value)} required />
        </div>
        <button type="submit">Join Game</button>
      </form>
    </div>
  );
};

export default JoinGame;
