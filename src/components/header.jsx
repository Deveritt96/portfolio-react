import React from 'react';

function Header() {
    return (
        <nav className="fixed top-0 left-0 w-full  bg-gray-900 p-4">
            <ul className="flex justify-between  text-l">
                <li className='bg-grey-800 text-white'>Devin Everitt</li>
                <li><a href="#about" className="text-white ">About Me</a></li>
                <li><a href="#projects" className="text-white">Projects</a></li>
                <li><a href="#contact" className="text-white">Contact Me</a></li>
            </ul>
        </nav>
    );
}

export default Header;