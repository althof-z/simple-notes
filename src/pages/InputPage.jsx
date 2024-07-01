import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { addNote } from '../utils/api';
import NoteInput from '../components/NoteInput';

function InputPage() {
  const navigate = useNavigate();

  const onAddNoteHandler = async (note) => {
    try {
      await addNote(note);
      navigate('/');
    } catch (error) {
      toast.error('Failed to add note');
    }
  };

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
