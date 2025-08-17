import React, {useState} from 'react';
import { useChat } from './hooks/useChat';
import ChatMessages from '../ChatMessages';
import ChatInput from '../ChatInput';
import './styles/main.css';
import WelcomeMessage from '../WelcomeMessage';
import {getRandomWelcomeMessage} from '../WelcomeMessage/scripts/getRandomWelcomeMessage.js';

export default function Chat() {
    const { messages, isTyping, chatRef, input, setInput, sendMessage, isStartScreen } = useChat();
    const [welcomeMessage] = useState(getRandomWelcomeMessage);

    return (
        <>
            {isStartScreen && (
                <WelcomeMessage text={welcomeMessage} speed={100} />
            )}
            <div className={`chat-wrapper`}>
                <div className="chat-messages-container" ref={chatRef}>
                    <ChatMessages messages={messages} isTyping={isTyping} />
                </div>
            </div>
            <div className={`chat-input-container`}>
                <ChatInput input={input} setInput={setInput} sendMessage={sendMessage} />
            </div>
        </>
    );
}

