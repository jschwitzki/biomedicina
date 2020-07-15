import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';
import './global.css'

function App() {
    return (
        <main>
            <Header />
            <Home />
            <About />
            <Footer />
        </main>
        
    );
}

export default App