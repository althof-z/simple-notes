import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import DetailPage from "../pages/DetailPage";
import InputPage from "../pages/InputPage";

class NoteAppBody extends React.Component {
  render() {
    return (
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/notes/:id" element={<DetailPage />} />
          <Route path="/input" element={<InputPage />} />
        </Routes>
      </main>
    );
  }
}

export default NoteAppBody;
