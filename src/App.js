import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";

function App() {
  const [users, setUsers] = useState([]);

  const addUserHandler = user => {
    setUsers((prevUsers) => {
      return [user, ...prevUsers]
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
    </div>
  );
}

export default App;
