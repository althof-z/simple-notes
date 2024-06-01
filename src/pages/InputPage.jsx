import React from "react";
import { addNote } from '../utils/local-data';
import NoteInput from "../components/NoteInput";
import { useNavigate } from 'react-router-dom';

function InputPage() {
    const navigate = useNavigate()

    function onAddNoteHandler(note) {
        addNote(note)
        navigate('/');
    }

    return (
        <section className="add-new-page">
            <h2>New Note</h2>
            <NoteInput addNote={onAddNoteHandler}/>
        </section>
    )
}

export default InputPage;