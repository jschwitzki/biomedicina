import React from 'react';
import './styles.css';
import imgFofinha from '../../assets/imagemFofinha.png';

export default function Footer() {
    return (
        <footer className="footerApp" id="contact">
            <h2 className="h2Contact">CONTATO</h2>
            <form>
                <label className="textName">Nome:</label>
                <input type="text" name="name" className="inputName" />
                <label className="textEmail">Email:</label>
                <input type="text" name="email" className="inputEmail" />
                <label className="textMessage">Mensagem:</label>
                <textarea type="text" name="message" className="inputMessage" />   
                <input type="submit" value="ENVIAR" className="btnSend"/>
                <input type="submit" value="APAGAR" className="btnDelete" />
            </form>
            
            
            
            <img src={ imgFofinha } alt="imgFofinha" className="imgFofinha"/>
        </footer>
    );
}

