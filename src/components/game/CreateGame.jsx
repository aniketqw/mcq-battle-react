// // src/components/game/CreateGame.js
// import React, { useState } from 'react';
// import axios from 'axios';
// import {Urls} from "../../constant/Urls.js";
//
// const CreateGame = (name,gameId,playerId,adminId,mcqIds) => {
//   // const [name, setName] = useState('');
//   // const [gameId, setGameId] = useState('');
//   // const [playerId, setPlayerId] = useState('');
//   // const [adminId, setAdminId] = useState('');
//
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     // try {
//     //   const response = await axios.post('http://localhost:8000/game/create-game/', {
//     //     name,
//     //     gameId,
//     //     playerId,
//     //     adminId,
//     //     mcqs,
//     //   });
//     //   console.log('Game created:', response.data);
//     // } catch (error) {
//     //   console.error('Error creating game:', error);
//     // }
//        try {
//       const response = await axios.post('http://localhost:8000/game/create-game/', {
//         name,
//         gameId,
//         playerId,
//         adminId,
//         mcqIds,
//       });
//       console.log('Game created:', response.data);
//      // navigate(Urls.Game.ListGames());
//     } catch (error) {
//       console.error('Error creating game:', error);
//     }
//   };
//
// //   return (
// //     <div>
// //       <h1>Create a New Game</h1>
// //       <form onSubmit={handleSubmit}>
// //         <div>
// //           <label>Game Name:</label>
// //           <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
// //         </div>
// //         <div>
// //           <label>Game ID:</label>
// //           <input type="text" value={gameId} onChange={(e) => setGameId(e.target.value)} required />
// //         </div>
// //         <div>
// //           <label>Player ID:</label>
// //           <input type="text" value={playerId} onChange={(e) => setPlayerId(e.target.value)} required />
// //         </div>
// //         <div>
// //           <label>Admin ID:</label>
// //           <input type="text" value={adminId} onChange={(e) => setAdminId(e.target.value)} required />
// //         </div>
// //         <button type="submit">Create Game</button>
// //       </form>
// //     </div>
// //   );
// };
//
// export default CreateGame;
import React from 'react';
import axios from 'axios';
import { Urls } from "../../constant/Urls.js";

const CreateGame = ({ name, gameId, playerId, adminId, mcqIds }) => {

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/game/create-game/', {
        name:name,
        gameId:gameId,
        playerId:playerId,
        adminId:adminId,
        mcqs:  mcqIds.split(',').map(id => id.trim()), // Ensure this matches the expected field name in the backend
      });
      console.log('Game created:', response.data);
      // navigate(Urls.Game.ListGames());
    } catch (error) {
      console.error('Error creating game:', error);
    }
  };

  return (
    <div>
      <h1>Create a New Game</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Game Name:</label>
          <input type="text" value={name} required />
        </div>
        <div>
          <label>Game ID:</label>
          <input type="text" value={gameId} required />
        </div>
        <div>
          <label>Player ID:</label>
          <input type="text" value={playerId} required />
        </div>
        <div>
          <label>Admin ID:</label>
          <input type="text" value={adminId} required />
        </div>
        <button type="submit">Create Game</button>
      </form>
    </div>
  );
};

export default CreateGame;
