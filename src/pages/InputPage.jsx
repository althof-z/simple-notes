import React from "react";
import { addNote } from "../utils/api";
import NoteInput from "../components/NoteInput";
import { useNavigate } from "react-router-dom";

function InputPage() {
  const navigate = useNavigate();

  async function onAddNoteHandler(note) {
    await addNote(note);
    navigate("/");
  }

  return (
    <main>
      <section className="add-new-page">
        <h2>New Note</h2>
        <NoteInput addNote={onAddNoteHandler} />
      </section>
    </main>
  );
}

export default InputPage;
