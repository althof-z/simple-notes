import React, { useState, useEffect } from 'react'; // Import useState and useEffect
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import NoteDetail from '../components/NoteDetail';
import { getNote, deleteNote, getActiveNotes } from '../utils/api';

function DetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [note, setNote] = useState(null); // Initialize note state with null

  useEffect(() => {
    getNote(id).then(({ data }) => {
      setNote(data);
    });
  }, [id]);

  const onDeleteHandler = async (noteId) => {
    try {
      await deleteNote(noteId);
      // update the Notes state from network.js
      const { data } = await getActiveNotes();
      setNote(data);
      navigate('/');
    } catch (error) {
      toast.error('Failed to delete note');
    }
  };

  if (note === null) {
    // Check if note is null, indicating loading
    return (
      <section className="detail-page">
        <h1>Loading...</h1>
      </section>
    );
  }

  if (note === undefined) {
    // Check if note is undefined, indicating no available note
    return (
      <section className="detail-page">
        <h1>No Available Note</h1>
      </section>
    );
  }

  return (
    <section className="detail-page">
      <NoteDetail
        id={note.id}
        createdAt={note.createdAt}
        body={note.body}
        onDelete={() => onDeleteHandler(note.id)}
      />
    </section>
  );
}

export default DetailPage;
