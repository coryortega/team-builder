import React, { useState } from 'react';
import Team from "./components/Team";
import TeamForm from "./components/TeamForm";
import data from "./Data";
import './App.css';

function App() {
  const [teams, setTeams] = useState(data)
  console.log(data)

  const addNewTeam = team => {
    setTeams([...teams, team])
  }
  return (
    <div className="App">
      <h1>My Team</h1>
      <TeamForm addNewTeam={addNewTeam}/>
      <Team teamList={teams}/>
    </div>
  );
}

export default App;
