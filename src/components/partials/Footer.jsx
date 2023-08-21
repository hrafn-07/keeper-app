import React from 'react';

function Footer() {

    const year = new Date().getFullYear();

    return (
        <footer>

            <div className="fixed text-center text-gray-400 bottom-4 left-1/2 transform -translate-x-1/2">
                <span>Copyright © {year} hrafn-07</span>
            </div>
        </footer>
    );
}

export default Footer;