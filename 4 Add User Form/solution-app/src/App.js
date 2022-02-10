import React, { useState } from "react";

import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);
  const addUserHandler = (uName, uAge) => {
    setUsersList((prevValue) => {
      return [
        ...prevValue,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <React.Fragment>
      <AddUser onAddUser={addUserHandler} />{" "}
      {/* passing a function as props for lifting the state up */}
      <UserList users={usersList} />
    </React.Fragment>
  );
}

export default App; 
