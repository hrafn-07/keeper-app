import { React, useState } from "react";
import Header from "./partials/Header";
import Footer from './partials/Footer';
import Note from './partials/Note';
import uuid from 'react-uuid';
function App() {

    const [notes, setNotes] = useState([]);

    const addNote = (newNote) => {
        setNotes(prevNotes => {
            return [
                ...prevNotes,
                newNote];
        });
    }

    return (
        <div className="App">
            <Header addNote={addNote} />
            <div className="flex flex-wrap">
                {notes.map((note) => (
                    <Note
                        key={uuid()}
                        title={note.title}
                        content={note.content}
                        tags={note.tags}
                    />
                ))}
            </div>
            <Footer />
        </div>
    );
};

export default App;