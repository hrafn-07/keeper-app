import React, { useState } from 'react';


function Counter() {

    const [count, setCount] = useState(0);

    function increase() {
        setCount(count + 1);
    }
    function decrease() {
        setCount((count) => {
            if (count > 0) {
                return count - 1;
            } else {
                return 0;
            }
        });

    }

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg m-6 bg-slate-100 h-auto">
            <div>
                <div className="px-6 py-4 text-center">
                    <div className="font-bold text-3xl text-gray-800"> Counter </div>
                </div>
                <div className="px-6 py-4 text-center">
                    <div className="font-bold text-6xl text-gray-800"> {count} </div>
                </div>
                <div className="flex justify-center px-6 py-4">
                    <button onClick={decrease} className="text-lg bg-yellow-400 m-1 p-2 w-28">-</button>
                    <button onClick={increase} className="text-lg bg-yellow-400 m-1 p-2 w-28">+</button>
                </div>
            </div>
        </div>
    );
}

export default Counter;