import React, { useState } from 'react';
import './styles.css';

const App = () => {
  const [users, setUsers] = useState([]);

  const loadUsers = async () => 
  {
    const response = await fetch("https://reqres.in/api/users?page=1");
    const jsonResponse = await response.json();
    const details = [...jsonResponse.data];
    setUsers(details);
  };

  return (
    <div className="App">
      <h1><u>A User card grid layout having a navbar showing any brand name:</u></h1>
      <button onClick={loadUsers}>Get Users</button>
      <h2>Data: </h2>
      <ul>
        {users.map(({ id, first_name, last_name, avatar }) => (
          <li key={id}>
            Name: {first_name} {last_name}
            <br />
            Avatar: <img src={avatar} alt="no"/>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;