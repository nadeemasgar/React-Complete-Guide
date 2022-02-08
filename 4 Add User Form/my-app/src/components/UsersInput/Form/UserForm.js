import React, { useState } from "react";
import Card from "../../UI/Card";

import "./UserForm.css";

const UserForm = (props) => {
  const [enteredUsername, setUserName] = useState("");
  const [enteredAge, setUserAge] = useState("");

  const usernameChangeHandler = (event) => {
    // console.log(event.target.value);
    setUserName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    // console.log(event.target.value);
    setUserAge(event.target.value);
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const userObj = {
      username: enteredUsername,
      age: enteredAge
    }

    // console.log(userObj);
    props.onSaveUserData(userObj);
  };

  return (
    <Card>
      <form onSubmit={formSubmitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <div className="form__controls">
              <label>Username</label>
              <input
                type="text"
                value={enteredUsername}
                onChange={usernameChangeHandler}
              />
            </div>

            <div className="form__controls">
              <label>Age (Years)</label>
              <input
                type="text"
                value={enteredAge}
                onChange={ageChangeHandler}
              />
            </div>

            <div className="form__actions">
              <button type="submit">Submit</button>
            </div>
          </div>
        </div>
      </form>
    </Card>
  );
};

export default UserForm;
