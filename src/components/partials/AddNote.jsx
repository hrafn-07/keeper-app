import React, { useState } from 'react';
import { FaRegCircleXmark } from "react-icons/fa6";

function AddNote(props) {

    const [note, setNote] = useState({
        title: "",
        content: "",
    });

    function handleChange(event) {
        const { name, value } = event.target;

        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            };
        });
    }

    function submitForm(event) {
        props.onAdd(note);
        setNote({
            title: "",
            content: "",
        });
        event.preventDefault();
    }

    function submitAndClose(event) {
        submitForm(event);
        props.onRequestClose();
    }

    return (
        <div className={`${props.isOpen ? "flex" : "hidden"} min-w-screen h-screen animated fadeIn faster fixed left-0 top-0 justify-center items-center inset-0 z-50 outline-none focus:outline-none`} id="modal-id" >
            <div className="absolute bg-black opacity-50 inset-0 z-0"></div>
            <div className="w-full  max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white ">
                <div className='w-full flex justify-end'>
                    <button onClick={props.onRequestClose} className='text-yellow-500 hover:text-black ease-in duration-100 text-2xl'>
                        <FaRegCircleXmark />
                    </button>
                </div>
                <form>
                    <label className="block  tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-title">
                        Title
                    </label>
                    <input onChange={handleChange}
                        name='title'
                        value={note.title}
                        className="appearance-none block w-full  border-yellow-500 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-yellow-700"
                        id="grid-title"
                        type="text"
                        placeholder="Title" />
                    <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-note">
                        Note
                    </label>
                    <textarea onChange={handleChange}
                        name='content'
                        value={note.content}
                        height='36'
                        className="appearance-none block w-full border-yellow-500 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-yellow-700"
                        id="grid-note"
                        type="text"
                        placeholder="Note" />
                    <button onClick={submitAndClose} className='appearance-none block w-full bg-yellow-500  text-black border rounded-md py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-yellow-700'>Add</button>
                </form>
            </div>
        </div >
    );
}

export default AddNote;