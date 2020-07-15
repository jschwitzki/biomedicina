import React from 'react';
import './styles.css';
import logoImg from '../../assets/B.png';
import AnchorLink from 'react-anchor-link-smooth-scroll'

const scrollToHome = () => {

}

export default function Header() {
    return (
        <header className="app-header">
            <div className="flex">
                <div>
                    <img src={ logoImg } alt="Logo" className="logo"/>
                    <h1>UNC</h1>
                    <h3>BIOMEDICINA</h3>
                </div>
                <div>
                    <AnchorLink href='#home'>HOME</AnchorLink>
                    <AnchorLink href='#about'>SOBRE</AnchorLink>
                    <AnchorLink href='#contact'>CONTATO</AnchorLink>
                </div>
            </div>
        </header>
    );
}

