
import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

import React from 'react'

export const Header = () => {


export const Header = () => {
  const title = "FlixView";
  return (
    <header className="header">
      <h1 className="title">
        <Link to={"/"} className="link">
        {title}
        </Link>
        </h1>
    </header>
  );
};
