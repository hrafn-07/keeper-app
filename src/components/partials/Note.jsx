import React from 'react';
import { FaTrash, FaPen } from "react-icons/fa6";

function Note(props) {
    return (
        <div className="max-w-xs rounded overflow-hidden shadow-lg m-6 bg-slate-100 h-min">
            <div className="px-3 m-1">
                <div className="font-bold text-xl mb-2">
                    {props.title}
                </div>
                <p className="text-gray-700 text-base">
                    {props.content}
                </p>
            </div>
            <div className='flex justify-end px-4 py-2 w-100'>
                <button className='p-2 text-yellow-600 hover:text-yellow-400 ease-in duration-100'>
                    <FaPen />
                </button>
                <button className='p-2 text-red-600 hover:text-red-400 ease-in duration-100'>
                    <FaTrash />
                </button>
            </div>
        </div>
    );
}

export default Note;