import useForm from "../hooks/use-form";

const BasicForm = (props) => {
  const {
    value: enteredFirstname,
    isValid: isValidFirstName,
    hasError: firstnameHasError,
    inputChangeHandler: firstnameChangeHandler,
    inputBlurHandler: firstnameBlurChange,
    reset: resetFirstname,
  } = useForm((value) => value.trim() !== "");

  const {
    value: enteredLastname,
    isValid: isValidLastName,
    hasError: lastnameHasError,
    inputChangeHandler: lastnameChangeHandler,
    inputBlurHandler: lastnameBlurChange,
    reset: restLastname,
  } = useForm((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: isValidEmail,
    hasError: emailHasError,
    inputChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurChange,
    reset: resetEmail,
  } = useForm((value) => value.includes("@"));

  let formIsValid = false;

  if (isValidFirstName && isValidLastName && isValidEmail) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    // if (!isValidFirstName && !isValidLastName && !isValidEmail) {
    //   return;
    // }

    console.log(enteredFirstname, enteredLastname, enteredEmail);

    resetFirstname();
    restLastname();
    resetEmail();
  };

  const firstnameInputClasses = firstnameHasError
    ? "form-control invalid"
    : "form-control";

  const lastnameInputClasses = lastnameHasError
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="control-group">
        <div className={firstnameInputClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={firstnameChangeHandler}
            onBlur={firstnameBlurChange}
            value={enteredFirstname}
          />
          {firstnameHasError && <p className="error-text">Please enter your first name</p>}
        </div>
        <div className={lastnameInputClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            onChange={lastnameChangeHandler}
            onBlur={lastnameBlurChange}
            value={enteredLastname}
            />
            {lastnameHasError && <p className="error-text">Please enter your last name</p>}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          onChange={emailChangeHandler}
          onBlur={emailBlurChange}
          value={enteredEmail}
          />
          {emailHasError && <p className="error-text">Please enter your valid email address</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
