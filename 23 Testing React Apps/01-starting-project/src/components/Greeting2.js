import React, { useState } from "react";

import Output from "./Output";

const Greeting2 = () => {
  const [changedText, setChangedText] = useState(false);

  const changeTextHandler = () => {
    console.log("nadeem");
    setChangedText(true);
  };

  return (
    <div>
      <div>How are you?</div>
      {!changedText && <Output>It's good to see you!</Output>}
      {changedText && <Output>Changed!</Output>}
      <button onClick={changeTextHandler}>Change Text!</button>
    </div>
  );
};

export default Greeting2;
