import React from 'react';
import './styles/main.css';
import FooterEnum from '../../enums/footer/footerEnum.js';

export default function Footer() {
    return (
        <>
            <footer>
                <p className="information-text">{FooterEnum.informationText}</p>
                <p className="developer-text">{FooterEnum.developerText}</p>
            </footer>
        </>
    );
}
