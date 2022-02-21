import { useRef } from "react";

const SimpleInput = (props) => {
  const nameInputRef = useRef();

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    const enteredvalue = nameInputRef.current.value;
    console.log(enteredvalue);

    nameInputRef.current.value = ""; // Not Ideal, Don't Manipulate the DOM
  };

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input ref={nameInputRef} type="text" id="name" />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
