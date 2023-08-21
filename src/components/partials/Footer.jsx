import React from 'react';

function Footer() {

    const year = new Date().getFullYear();

    return (
        <footer>
            <div className="text-center text-gray-400">
                <span>Copyright © {year} </span>
                
            </div>
        </footer>
    );
}

export default Footer;