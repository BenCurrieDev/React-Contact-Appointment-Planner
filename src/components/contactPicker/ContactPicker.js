import React from "react";


export const ContactPicker = (props) => {
  return (
    <select onChange={props.handleContactChange} defaultValue={'No Contact Selected'}>
      <option value='No Contact Selected' >No Contact Selected</option>
      {props.contactNames.map((name, i) => {
        return <option value={name} key={i} >{name}</option>
      })}
    </select>
  );
};
