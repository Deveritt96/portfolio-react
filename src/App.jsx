import React, { useState } from 'react';
import About from './components/about';
import Header from './components/header';
import Footer from './components/footer';
import ProjectBoxes from './components/projects';
import Contact from './components/contact';

function App() {
    const [selectedComponent, setSelectedComponent] = useState('About');

    const renderComponent = () => {
        switch (selectedComponent) {
            case 'About':
                return <About />;
            case 'Projects':
                return <ProjectBoxes />;
            case 'Contact':
                return <Contact />;
            default:
                return <About />;
        }
    };

    return (
        <div className='bg-slate-800 min-h-screen w-full'>
            <Header onSelectComponent={setSelectedComponent} />
            {renderComponent()}
            <Footer/>
        </div>
    );
}

export default App;