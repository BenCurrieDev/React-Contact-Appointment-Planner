import React, { useState } from "react";
import { AppointmentForm } from '../../components/appointmentForm/AppointmentForm';
import { TileList } from '../../components/tileList/TileList';

export const AppointmentsPage = (props) => {
  /*
  Define state variables for 
  appointment info
  */
 let [ inputTitle, setInputTitle ] = useState('');
 let [ inputContact, setInputContact ] = useState('');
 let [ inputDate, setInputDate ] = useState('');
 let [ inputTime, setInputTime ] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data  
    */
    props.addAppointment(inputTitle, inputContact, inputDate, inputTime);
    setInputTitle('');
    setInputContact('');
    setInputDate('');
    setInputTime('');
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm 
          inputTitle={inputTitle} 
          inputContact={inputContact} 
          inputDate={inputDate} 
          inputTime={inputTime} 
          setInputTitle={setInputTitle} 
          setInputContact={setInputContact} 
          setInputDate={setInputDate} 
          setInputTime={setInputTime} 
          handleSubmit={handleSubmit} 
          contactNames={props.contactNames} 
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList appointments={props.appointments} />
      </section>
    </div>
  );
};
