import React, { useState, useEffect } from 'react';

function Time() {
    const [time, setTime] = useState(new Date().toLocaleTimeString("tr-TR"));

    /*   function set() {
      let time = new Date().toLocaleTimeString("tr-TR");
      setTime(time);
    } */
    useEffect(() => {
        setTimeout(() => {
            let time = new Date().toLocaleTimeString("tr-TR");
            setTime(time);
        }, 1000);
    });

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg m-6 bg-slate-100 h-auto place-content-center">
            <div>
                <div className="px-6 py-4 text-center font-bold text-6xl text-gray-800">
                    {time}
                </div>
            </div>
        </div>
    );
}

export default Time;