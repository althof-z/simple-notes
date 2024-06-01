import React from "react";
import { addNote } from "../utils/local-data";
import PropTypes from "prop-types";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
    };
    this.maxChars = 50;

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    let inputText = event.target.value;
    if (inputText.length > this.maxChars) {
      inputText = inputText.slice(0, this.maxChars);
    }
    this.setState({
      title: inputText,
    });
  }

  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
  }

  render() {
    const remainingChars = this.maxChars - this.state.title.length;
    return (
      <section className="add-new-page__input">
        <form onSubmit={this.onSubmitEventHandler}>
          <p className="note-input__title__char-limit">Sisa Karakter: {remainingChars}</p>
          <input className="add-new-page__input__title" type="text" placeholder="Judul" value={this.state.title} onChange={this.onTitleChangeEventHandler} />
          <textarea className="add-new-page__input__body" placeholder="Catatan" value={this.state.body} onChange={this.onBodyChangeEventHandler} />
          <div className="add-new-page__action">
            <button className="action" title="Hapus" type="submit">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path fill="none" d="M0 0h24v24H0V0z"></path>
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"></path>
              </svg>
            </button>
          </div>
        </form>
      </section>
    );
  }
}

NoteInput.propTypes = {
  addNote: PropTypes.func.isRequired,
};

export default NoteInput;
