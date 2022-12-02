import React from "react";
import { act } from "react-dom/test-utils";

export const ContactForm = (props) => {

  const handleNameChange = ({ target }) => {
    props.setInputName(target.value);
  }

  const handleNumberChange = ({ target }) => {
    props.setInputNumber(target.value);
  }

  const handleEmailChange = ({ target }) => {
    props.setInputEmail(target.value);
  }

  return (
    <form onSubmit={props.handleSubmit} >
      <label>
        Name:
        <input type='text' value={props.inputName} onChange={handleNameChange} ></input>
      </label>
      <label>
        Phone Number:
        <input type='tel' pattern='[0][0-9]{10}' value={props.inputNumber} onChange={handleNumberChange} ></input>
      </label>
      <label>
        Email Address:
        <input type='email' value={props.inputEmail} onChange={handleEmailChange} ></input>
      </label>
      <input type='submit' value='Submit' ></input>
    </form>
  );
};
