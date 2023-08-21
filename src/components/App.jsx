import { React, useState } from "react";
import Header from "./partials/Header";
import Footer from './partials/Footer';
import Note from './partials/Note';

function App() {

    const [notes, setNotes] = useState([]);

    const addNote = (newNote) => {
        setNotes(prevNotes => {
            return [
                ...prevNotes,
                newNote];
        });
    }

    function deleteNote(id) {
        setNotes(prevNotes => {
            return prevNotes.filter((noteItem, index) => {
                return index !== id;
            });
        });
    }

    return (
        <div className="App">
            <Header addNote={addNote} />
            <div className="flex flex-wrap">
                {notes.map((note, index) => (
                    <Note
                        key={index}
                        id={index}
                        title={note.title}
                        content={note.content}
                        tags={note.tags}
                        onDelete={deleteNote}
                    />
                ))}
            </div>
            <Footer />
        </div>
    );
};

export default App;