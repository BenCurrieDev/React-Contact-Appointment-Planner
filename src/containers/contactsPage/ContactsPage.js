import React, { useState, useEffect } from "react";
import { ContactForm } from '../../components/contactForm/ContactForm';
import { TileList } from '../../components/tileList/TileList';


export const ContactsPage = (props) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  let [ inputName, setInputName ] = useState('');
  let [ inputNumber, setInputNumber ] = useState('');
  let [ inputEmail, setInputEmail ] = useState('');
  let [ isMatch, setIsMatch ] = useState(false);

  // Effect hook that changes isMatch based on whether 
  // current name input is a duplicate
  useEffect(() => {
    if (props.contactNames.includes(inputName)) {
      setIsMatch(true);
    } else { 
      if (isMatch === true) {
        setIsMatch(false);
      }
    }
  }, [props.contactNames, inputName, isMatch]);


  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
   if (isMatch) {
    alert('This name already exists in your contacts. Please choose another name.');
    return
   } else {
    props.addContact(inputName, inputNumber, inputEmail);
    setInputName('');
    setInputNumber('');
    setInputEmail('');
   }
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm 
          inputName={inputName} 
          setInputName={setInputName} 
          inputNumber={inputNumber} 
          setInputNumber={setInputNumber} 
          inputEmail={inputEmail} 
          setInputEmail={setInputEmail} 
          handleSubmit={handleSubmit} 
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList contacts={props.contacts} />
      </section>
    </div>
  );
};
