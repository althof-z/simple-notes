import React from "react";
import { Link } from "react-router-dom";

const NoteAppHeader = () => {
  return (
    <header>
      <h1>
        <Link to="/">Personal Notes</Link>
      </h1>
    </header>
  );
};

export default NoteAppHeader;
