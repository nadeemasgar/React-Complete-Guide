import React from "react";
import Card from "../../UI/Card";

import "./UserList.css";

const UserList = (props) => {
  console.log(props);
  return (
    <div>
      {props.usersData.map((user) => {
        return (
          <Card key={Math.random()}>
            <div className="userDetails">{`${user.username} - ${user.age}`}</div>
          </Card>
        );
      })}
    </div>
  );
};

export default UserList;

/* 
<Card>  {/* <Card style={{border: "1px solid black"}}> }
<div className="userDetails">dsasfdf</div>
</Card> useEffect sideEffect
<Card>
  <div className="userDetails">dsdaff</div>
</Card>
<Card>
  <div className="userDetails">dsFASdf</div>
</Card>

*/
