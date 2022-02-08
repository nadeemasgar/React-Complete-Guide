import React, {useState} from "react";
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

  const [value, setValue] = useState(usersData)

  const onSaveUserData = (userObj) => {


    usersData.push(userObj);

    // let newValue = value;

    // newValue.push(userObj);

    // setValue(newValue);

    // console.log(usersData);
  };

  return (
    <div>
      <div className="new-expense">
        <UserForm onSaveUserData={onSaveUserData} />
      </div>
      <UserList usersData={usersData}/>
    </div>
  );
};

export default UserDetails;
