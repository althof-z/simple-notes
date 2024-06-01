import React from "react";
import NotesList from "../components/NoteList";
import HomePageAction from "../components/HomePageAction";
import {getAllNotes } from "../utils/local-data";

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getAllNotes(),
    };
  }

  render() {
    return (
      <main>
        <section className="homepage">
          <h2>Active Notes</h2>
          <section className="note-list">
            <NotesList notes={this.state.notes} />
          </section>
          <div className="homepage__action">
            <HomePageAction />
          </div>
        </section>
      </main>
    );
  }
}

export default HomePage;
