import React from 'react';
import './styles.css';
import backgroundImg1 from '../../assets/background1.png';

export default function Home() {
    return (
        <div id="home" className="divHome">
            <img src={ backgroundImg1 } alt="background" className="backgroundImg"/>
            <h2 className="h2Home">Biomedicina</h2>
            <h4>Lorem ipsum dolor sit amet</h4>
        </div>
    
    );
}