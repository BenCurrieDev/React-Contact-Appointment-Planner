import React from "react";
import { ContactPicker } from '../../components/contactPicker/ContactPicker';

export const AppointmentForm = (props) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  const handleTitleChange = ({ target }) => {
    props.setInputTitle(target.value);
  }

  const handleDateChange = ({ target }) => {
    props.setInputDate(target.value);
  }

  const handleTimeChange = ({ target }) => {
    props.setInputTime(target.value);
  }

  const handleContactChange = ({ target }) => {
    props.setInputContact(target.value);
  }

  return (
    <form onSubmit={props.handleSubmit}>
      <label>
        Title:
        <input type='text' value={props.inputTitle} onChange={handleTitleChange}></input>
      </label>
      <label>
        Date:
        <input type='date' value={props.inputDate} min={getTodayString()} onChange={handleDateChange}></input>
      </label>
      <label>
        Time:
        <input type='time' value={props.inputTime} onChange={handleTimeChange}></input>
      </label>
      <label>
        Invite: 
        <ContactPicker contactNames={props.contactNames} handleContactChange={handleContactChange} />
      </label>
      <input type='submit' value='Submit' ></input>
    </form>
  );
};
