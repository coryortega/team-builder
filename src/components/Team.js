import React from "react";

const Team = props => {
    console.log(props)
  return (
    <div className="team-list">
      {props.teamList.map((team, index) => {
        return (
          <div className="note" key={index}>
            <h2>{team.name}</h2>
            <p>Email: {team.email}</p>
            <p>Role: {team.description}</p>      
          </div>
        );
      })}
    </div>
  );
};
export default Team;