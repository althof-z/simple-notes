import React from 'react';
import PropTypes from 'prop-types';
import NoteItem from './NoteItem';
import NoteEmptyList from './NoteEmptyList';

function NoteList({ notes }) {
  if (notes.length === 0) {
    return <NoteEmptyList />;
  }

  return (
    <div className="notes-list">
      {notes.map((note) => (
        <NoteItem key={note.id} id={note.id} {...note} />
      ))}
    </div>
  );
}

NoteList.propTypes = {
  notes: PropTypes.array.isRequired,
};

export default NoteList;
