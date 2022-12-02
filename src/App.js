import React, { useState } from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */
  let [ contacts, setContacts ] = useState([]);
  let [ appointments, setAppointments ] = useState([]);
  let [ contactNames, setContactNames ] = useState([]);

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  /*
  Implement functions to add data to
  contacts and appointments
  */
  const addContact = (newName, newPhoneNumber, newEmail) => {
    let newContact = {
      name: newName,
      phoneNumber: newPhoneNumber,
      email: newEmail
    };
    setContacts([...contacts, newContact]);
    setContactNames([...contactNames, newName]);
  }

  const addAppointment = (newTitle, newContact, newDate, newTime) => {
    let newAppointment = {
      title: newTitle,
      contact: newContact,
      date: newDate,
      time: newTime
    };
    setAppointments([...appointments, newAppointment]);
  }

  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to={ROUTES.CONTACTS} />
          </Route>
          <Route path={ROUTES.CONTACTS}>
             {/* Add props to ContactsPage */}
            <ContactsPage contacts={contacts} contactNames={contactNames} addContact={addContact} />
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            {/* Add props to AppointmentsPage */}
            <AppointmentsPage contacts={contacts} contactNames={contactNames} appointments={appointments} addAppointment={addAppointment} />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
