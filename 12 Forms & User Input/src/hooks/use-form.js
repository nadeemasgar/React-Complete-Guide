import { useState } from "react";

const useForm = (validateValue) => {
  const [inputValue, setInputValue] = useState("");
  const [isInputBlur, setInputBlur] = useState(false); // isInputBlur - true that means something is wrong

  const valueIsValid = validateValue(inputValue);
  const hasError = !valueIsValid && isInputBlur;

  const inputChangeHandler = (event) => {
    setInputValue(event.target.value);
  };

  const inputBlurHandler = (event) => {
    setInputBlur(true);
  };

  const reset = () => {
    setInputValue("");
    setInputBlur(false);
  };

  return {
    value: inputValue,
    isValid: valueIsValid,
    hasError,
    inputChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useForm;
