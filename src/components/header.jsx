import React from 'react';

function Header({ onSelectComponent }) {
    const handleMenuItemClick = (componentName) => {
        onSelectComponent(componentName);
    };

    return (
        <nav className="fixed top-0 left-0 w-full bg-gray-900 p-4">
            <div className='max-w-screen-xl mx-auto'>
                <ul className="flex justify-between text-sm md:text-lg">
                    <li className='text-white' onClick={() => handleMenuItemClick('About')}>Devin Everitt</li>
                    <li className="md:mx-4" onClick={() => handleMenuItemClick('About')}><a href="#about" className="text-white">About Me</a></li>
                    <li className="md:mx-4" onClick={() => handleMenuItemClick('Projects')}><a href="#projects" className="text-white">Projects</a></li>
                    <li className="md:mx-4" onClick={() => handleMenuItemClick('Contact')}><a href="#contact" className="text-white">Contact Me</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;