import React from "react";
import {useParams} from "react-router-dom";


export const Details = () => {
  const {id} = useParams();


  return (
    <div>
      <h1>title - ID: {id}</h1>
      <p>synopsis</p>
      <p>year</p>
      <img />
    </div>
  );
};

