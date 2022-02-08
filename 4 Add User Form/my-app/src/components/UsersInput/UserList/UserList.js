import React, { useEffect } from "react";
import Card from "../../UI/Card";

import "./UserList.css";

const UserList = (props) => {
  useEffect(()=> {
    <div>
      {props.usersData.map((user) => {
        console.log(user);
        return (
          <Card>
            <div className="userDetails">{user.username}</div>
          </Card>
        );
      })}
    </div>
  }, [props])
  console.log(props);
  return <div></div>
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
