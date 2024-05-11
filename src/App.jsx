// App.jsx
import React from 'react';
import About from './components/about';
import Header from './components/Header';
import Footer from './components/footer';

function App() {
    return (
        <div className='bg-slate-800'>
          <Header/>
          <About/>
          <Footer/>
        </div>
    );
}

export default App;
