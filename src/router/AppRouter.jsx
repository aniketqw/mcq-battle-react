// import React from "react";
// import { Route, Routes } from "react-router-dom";
// import { Urls } from "../constant/Urls";
// import HomePage from "../pages/home.page";
// import LoginPage from "../pages/login.page";
// import EditMcqPage from "../pages/mcq/EditMcqPage.jsx";
// import McqPage from "../pages/mcq/McqPage.jsx";
// import McqsPage from "../pages/mcq/McqsPages.jsx";
// import NewMcqPage from "../pages/mcq/NewMcqPage.jsx";
// import SignupPage from "../pages/signup.page";
// import ProtectedRoute from "./ProtectedRoute.jsx";
//
// const AppRouter = () => {
//   return (
//     <Routes>
//       <Route path={Urls.Home()} element={<HomePage />} />
//       <Route path={Urls.Signup()} element={<SignupPage />} />
//       <Route path={Urls.Login()} element={<LoginPage />} />
//
//       <Route
//         path={Urls.Mcqs.Mcq()}
//         element={
//           <ProtectedRoute>
//             <McqsPage />
//           </ProtectedRoute>
//         }
//       />
//       <Route
//         path={Urls.Mcqs.Mcq(":id")}
//         element={
//           <ProtectedRoute>
//             <McqPage />
//           </ProtectedRoute>
//         }
//       />
//       <Route
//         path={Urls.Mcqs.NewMcq()}
//         element={
//           <ProtectedRoute>
//             <NewMcqPage />
//           </ProtectedRoute>
//         }
//       />
//       <Route
//         path={Urls.Mcqs.EditMcq(":id")}
//         element={
//           <ProtectedRoute>
//             <EditMcqPage />
//           </ProtectedRoute>
//         }
//       />
//     </Routes>
//   );
// };
//
// export default AppRouter;


// src/router/AppRouter.jsx
import React from "react";
import { Route, Routes } from "react-router-dom";
import { Urls } from "../constant/Urls";
import HomePage from "../pages/home.page";
import LoginPage from "../pages/login.page";
import EditMcqPage from "../pages/mcq/EditMcqPage.jsx";
import McqPage from "../pages/mcq/McqPage.jsx";
import McqsPage from "../pages/mcq/McqsPages.jsx";
import NewMcqPage from "../pages/mcq/NewMcqPage.jsx";
import SignupPage from "../pages/signup.page";
// import Lobby from "../components/game/lobby"; // Import the Lobby component
import LobbyPage from "../pages/game/LobbyPage";
import CreateGamePage from "../pages/game/CreateGamePage";
import ListGamesPage from "../pages/game/ListGamesPage";
import JoinGamePage from "../pages/game/JoinGamePage";
import ProtectedRoute from "./ProtectedRoute.jsx";

const AppRouter = () => {
  return (
    <Routes>
      <Route path={Urls.Home()} element={<HomePage />} />
      <Route path={Urls.Signup()} element={<SignupPage />} />
      <Route path={Urls.Login()} element={<LoginPage />} />

      <Route
        path={Urls.Mcqs.Mcqa()}
        element={
          // <McqsPage />

          <ProtectedRoute>
            <McqsPage />
          </ProtectedRoute>
        }

      />
      <Route
        path={Urls.Mcqs.Mcq(":id")}
        element={
           <McqPage />
          // <ProtectedRoute>
          //   <McqPage />
          // </ProtectedRoute>
        }
      />
      <Route
        path={Urls.Mcqs.NewMcq()}
        element={
           <NewMcqPage />
          // <ProtectedRoute>
          //   <NewMcqPage />
          // </ProtectedRoute>
        }
      />
      <Route
        path={Urls.Mcqs.EditMcq(":id")}
        element={
           <EditMcqPage />
          // <ProtectedRoute>
          //   <EditMcqPage />
          // </ProtectedRoute>
        }
      />
      <Route
        path={Urls.Game.ListGames()}
        element={
          <ProtectedRoute>
          <ListGamesPage />
          </ProtectedRoute>
          // <ProtectedRoute>
          //   <Lobby />
          // </ProtectedRoute>
        }
      />

         <Route
        path={Urls.Game.Lobby()}
        element={
          <LobbyPage/>
          // <ProtectedRoute>
          //   <Lobby />
          // </ProtectedRoute>
        }
      />

         <Route
        path={Urls.Game.CreateGame()}
        element={
             <ProtectedRoute>
          <CreateGamePage />
             </ProtectedRoute>
          // <ProtectedRoute>
          //   <Lobby />
          // </ProtectedRoute>
        }
      />
        <Route
        path={Urls.Game.JoinGame()}
        element={
          <JoinGamePage />
          // <ProtectedRoute>
          //   <Lobby />
          // </ProtectedRoute>
        }
      />

    </Routes>
  );
};

export default AppRouter;
