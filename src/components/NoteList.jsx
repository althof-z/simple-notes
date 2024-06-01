import React from "react";
import NoteItem from "./NoteItem";
import NoteEmptyList from "./NoteEmptyList";
import PropTypes from "prop-types";

function NoteList({ notes }) {
  const Notes = notes.filter((note) => note.archived === false);

  if (Notes.length === 0) {
    return <NoteEmptyList />;
  }

  return (
    <div className="notes-list">
      {Notes.map((note) => (
        <NoteItem key={note.id} id={note.id} {...note} />
      ))}
    </div>
  );
}

NoteList.propTypes = {
  notes: PropTypes.array.isRequired,
};

export default NoteList;
