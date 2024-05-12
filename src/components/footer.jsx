import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <nav className="fixed bottom-0 left-0 w-full bg-gray-900 p-4">
            <div className="flex justify-center text-white item-center">
                <a href="https://github.com/Deveritt96" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} className="mr-2" />
                    GitHub
                </a>
            </div>
        </nav>
    );
}

export default Footer;