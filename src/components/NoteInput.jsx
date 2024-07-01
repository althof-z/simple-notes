import React, { useState } from 'react';
import PropTypes from 'prop-types';

function NoteInput({ addNote }) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const maxChars = 50;

  const onTitleChangeEventHandler = (event) => {
    let inputText = event.target.value;
    if (inputText.length > maxChars) {
      inputText = inputText.slice(0, maxChars);
    }
    setTitle(inputText);
  };

  const onBodyChangeEventHandler = (event) => {
    setBody(event.target.value);
  };

  const onSubmitEventHandler = (event) => {
    event.preventDefault();
    addNote({
      title,
      body,
    });
    setTitle('');
    setBody('');
  };

  const remainingChars = maxChars - title.length;

  return (
    <section className="add-new-page__input">
      <form onSubmit={onSubmitEventHandler}>
        <p className="note-input__title__char-limit">
          Sisa Karakter:
          {remainingChars}
        </p>
        <input
          className="add-new-page__input__title"
          type="text"
          placeholder="Judul"
          value={title}
          onChange={onTitleChangeEventHandler}
        />
        <textarea
          className="add-new-page__input__body"
          placeholder="Catatan"
          value={body}
          onChange={onBodyChangeEventHandler}
        />
        <div className="add-new-page__action">
          <button
            aria-label="Delete"
            className="action"
            title="Hapus"
            type="submit"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" d="M0 0h24v24H0V0z" />
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
            </svg>
          </button>
        </div>
      </form>
    </section>
  );
}

NoteInput.propTypes = {
  addNote: PropTypes.func.isRequired,
};

export default NoteInput;
