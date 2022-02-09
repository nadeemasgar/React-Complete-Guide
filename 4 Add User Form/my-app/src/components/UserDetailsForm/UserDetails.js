import React, { useState } from "react";
import UserForm from "../UsersInput/Form/UserForm";
import UserList from "../UsersInput/UserList/UserList";

import "./UserDetails.css";
const UserDetails = (props) => {
  const usersData = [
    {
      username: "Tokopedia",
      age: 12,
    },
  ];

  const [value, setValue] = useState(usersData);

  const onSaveUserData = (userObj) => {
    setValue((prevValue) => {
      return [userObj, ...prevValue];
    });

    console.log(value);
  };

  return (
    <div>
      <div className="new-expense">
        <UserForm onSaveUserData={onSaveUserData} />
      </div>
      <UserList usersData={value} />
    </div>
  );
};

export default UserDetails;
