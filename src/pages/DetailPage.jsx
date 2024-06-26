import React, { useState, useEffect } from "react"; // Import useState and useEffect
import { useParams } from "react-router-dom";
import NoteDetail from "../components/NoteDetail";
import { getNote, deleteNote, getActiveNotes} from "../utils/api";
import { useNavigate } from "react-router-dom";

function DetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [note, setNote] = useState(null); // Initialize note state with null

  useEffect(() => {
    getNote(id).then(({ data }) => {
      setNote(data);
    });
  }, [id]);

  React.useEffect(() => {
    getNote(id).then(({ data }) => {
      setNote(data);
    });
  }, []);

  if (note === null) { // Check if note is null, indicating loading
    return <h1>Loading...</h1>;
  }

  if (note === undefined) { // Check if note is undefined, indicating no available note
    return <h1>No Available Note</h1>;
  }

  async function onDeleteHandler(id) {
    try {
      await deleteNote(id);
      // update the Notes state from network.js
      const { data } = await getActiveNotes();
      setNote(data);
      navigate("/");
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  }

  return (
    <section>
      <NoteDetail {...note} onDelete={onDeleteHandler} />
    </section>
  );
}


export default DetailPage;
