import React from 'react';
import './styles.css';

export default function About() {
    return (
        <div id="about" className="divAbout">
            <h2 className="h2About">SOBRE</h2>
            <div className="container01">
                <h2 className="title">Objetivo</h2>
                <h5 className="subTitle">Formar um profissional Biomédico com formação humanista, crítica, reflexiva e 
                    capacitado a tomar decisões concisas em todos os níveis de atenção à saúde e ao 
                    exercício das atividades das áreas da atuação biomédica.</h5>
            </div>
            <div className="container02">
                <h2 className="title">Campos de Atuação</h2>
                <h5 className="subTitle">O Biomédico poderá atuar em laboratórios de análises clínicas 
                (patologia clínica), citologia oncótica, análises moleculares, análises ambientais e 
                bromatológicas, produção e análises de bioderivados, bioengenharia, análise por imagem, 
                bancos de sangue, clínicas de estética e de reprodução assistida, em órgãos de 
                regulamentação, fiscalização e de saúde pública, institutos de pesquisa e em instituições 
                de ensino.</h5>
            </div>
            <div className="container03">
                <h2 className="title">Perfil do Profissional</h2>
                <h5 className="subTitle">Profissional biomédico apto a tomar decisões com base nos 
                princípios éticos, científicos, legais e pautado com a compreensão das diferentes 
                realidades econômicas, sociais e culturais para atuar em Análises Clínicas, 
                Saúde Pública, Diagnóstico por imagem, Biomedicina estética, Banco de Sangue e 
                Reprodução Humana Assistida.</h5>
            </div>
        </div>
    
    );
}
