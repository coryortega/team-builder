import React, { useState } from "react";

const TeamForm = props => {
  const [team, setTeam] = useState({
    name: "",
    description: ""
  });
  const changeHandler = event => {
    setTeam({ ...team, [event.target.name]: event.target.value });
    console.log(event.target.value);
  };
  const submitForm = event => {
    event.preventDefault();
    props.addNewTeam(team);
    setTeam({ name: "", description: "", email: "" });
  };
  return (
    <form className = "form" onSubmit={submitForm}>
      <div className = "input-container">
        <label htmlFor="name">Name:</label>
        <input
            name="name"
            id="name"
            type="text"
            placeholder="Team member name"
            onChange={changeHandler}
            value={team.name}
        />
        <label htmlFor="email">Email:</label>
        <input
            name="email"
            id="email"
            type="text"
            placeholder="email here"
            onChange={changeHandler}
            value={team.email}
        />
        <label htmlFor="description">Role:</label>
        <textarea
            name="description"
            id="description"
            placeHolder="Describe members job here"
            onChange={changeHandler}
            value={team.description}
        />
      </div>
      <button type="submit">Add Member</button>
    </form>
  );
};

export default TeamForm;