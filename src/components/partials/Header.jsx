import React, { useState } from 'react'
import AddNote from './AddNote';

function Header(props) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };



    return (
        <header className="flex p-4 bg-yellow-500 drop-shadow-lg justify-between">
            <h1 className="font-josefin text-5xl text-slate-100 align-middle">Keeper</h1>
            <button onClick={openModal} type="button" className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent ease-in duration-150 font-semibold bg-white text-yellow-500 hover:bg-black">
                New
            </button>
            <AddNote onAdd={props.addNote} isOpen={isModalOpen} onRequestClose={closeModal} />
        </header>
    );
}

export default Header;