import React from 'react';
import './styles/main.css';
import { useWelcomeMessage } from './hooks/useWelcomeMessage.js';

export default function WelcomeMessage({ text, speed = 100 }) {
    const displayedText = useWelcomeMessage(text, speed);

    return <div className="welcome-message-overlay">{displayedText}</div>;
}
