// // src/components/game/Lobby.js
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Pusher from 'pusher-js';
//
// const pusher = new Pusher('07b5115d8e4deb7d61ba', {
//   cluster: 'ap2'
// });
//
// const Lobby = () => {
//   const [games, setGames] = useState([]);
//
//   useEffect(() => {
//     fetchGames();
//
//     const channel = pusher.subscribe('natural-badlands-505');
//     channel.bind('join-request', function(data) {
//       alert(`Player ${data.playerId} requested to join game ${data.gameId}`);
//     });
//
//     return () => {
//       pusher.unsubscribe('natural-badlands-505');
//     };
//   }, []);
//
//   const fetchGames = async () => {
//     try {
//       const response = await axios.get('http://localhost:8000/game/list-games/');
//       setGames(response.data);
//     } catch (error) {
//       console.error('Error fetching games:', error);
//     }
//   };
//
//   const handleJoinRequest = async (gameId) => {
//     try {
//       await axios.post('http://localhost:8000/game/join-game/', {
//         gameId: gameId,
//         playerId:playerId // Replace with the actual player ID
//       });
//       console.log(`Request to join game with ID: ${gameId}`);
//     } catch (error) {
//       console.error('Error sending join request:', error);
//     }
//   };
//
//   return (
//     <div>
//       <h1>Available Games</h1>
//       <ul>
//         {games.map((game) => (
//             <li key={game.id}>
//               <h2>{game.name}</h2>
//               <p>Game ID: {game.gameId}</p>
//               <p>Player ID: {game.playerId}</p>
//               <p>Owner ID: {game.adminId}</p>
//               <button onClick={() => handleJoinRequest(game.gameId)}>Request to Join</button>
//             </li>
//         ))}
//       </ul>
//     </div>
//   );
// };
//
// export default Lobby;

// src/components/game/Lobby.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Pusher from 'pusher-js';

const Lobby = () => {
  const [gameId, setGameId] = useState('');
  const [playerId, setPlayerId] = useState('');
  const [adminId, setAdminId] = useState('');
  const [games, setGames] = useState([]);
  const [joined, setJoined] = useState(false);

  useEffect(() => {
    if (joined) {
      const pusher = new Pusher('07b5115d8e4deb7d61ba', {
        cluster: 'ap2'
      });
      const channel = pusher.subscribe(`game-${gameId}`);
      channel.bind('join-request', function(data) {
        alert(`Player ${data.playerId} requested to join game ${data.gameId}`);
      });

      return () => {
        pusher.unsubscribe(`game-${gameId}`);
      };
    }
  }, [joined, gameId]);

  const fetchGames = async () => {
    try {
      const response = await axios.get('http://localhost:8000/game/list-games/');
      setGames(response.data.filter(game => game.gameId === parseInt(gameId)));
    } catch (error) {
      console.error('Error fetching games:', error);
    }
  };

  const handleJoinRequest = async (gameId) => {
    try {
      await axios.post('http://localhost:8000/game/join-game/', {
        gameId: gameId,
        playerId: playerId
      });
      console.log(`Request to join game with ID: ${gameId}`);
    } catch (error) {
      console.error('Error sending join request:', error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setJoined(true);
    fetchGames();
  };

  return (
    <div>
      {!joined ? (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Game ID: </label>
            <input type="text" value={gameId} onChange={(e) => setGameId(e.target.value)} required />
          </div>
          <div>
            <label>Player ID: </label>
            <input type="text" value={playerId} onChange={(e) => setPlayerId(e.target.value)} required />
          </div>
          <div>
            <label>Admin ID: </label>
            <input type="text" value={adminId} onChange={(e) => setAdminId(e.target.value)} required />
          </div>
          <button type="submit">Join Lobby</button>
        </form>
      ) : (
        <div>
          <h1>Available Games</h1>
          <ul>
            {games.map((game) => (
              <li key={game.id}>
                <h2>{game.name}</h2>
                <p>Game ID: {game.gameId}</p>
                <p>Owner ID: {game.adminId}</p>
                <button onClick={() => handleJoinRequest(game.gameId)}>Request to Join</button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Lobby;
