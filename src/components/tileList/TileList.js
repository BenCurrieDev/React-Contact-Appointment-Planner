import React from "react";
import { Tile } from '../tile/Tile';

export const TileList = (props) => {
  
  let propObjects = [];
  if (props.contacts) {
    propObjects = props.contacts;
  }

  if (props.appointments) {
    propObjects = props.appointments;
  }

  return (
    <div>
      {propObjects.map((propObject, i) => {return <Tile propObject={propObject} key={i} />})}
    </div>
  );
};
