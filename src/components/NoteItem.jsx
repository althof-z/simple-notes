import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import showFormattedDate from '../utils/index';

function NoteItem({
  title, createdAt, body, id,
}) {
  const formattedDate = showFormattedDate(createdAt);
  return (
    <div className="note-item">
      <h3 className="note-item__title">
        <Link to={`/notes/${id}`}>{title}</Link>
      </h3>
      <p className="note-item__createdAt">{formattedDate}</p>
      <p className="note-item__body">{body}</p>
    </div>
  );
}

NoteItem.propTypes = {
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default NoteItem;
