import React from "react";
import NoteAppBody from "./NoteAppBody";
import NoteAppHeader from "./NoteAppHeader";

function NoteApp() {
  return (
    <div className="app-container">
      <NoteAppHeader />
      <NoteAppBody />
    </div>
  );
}

export default NoteApp;
