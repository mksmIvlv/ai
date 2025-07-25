import React from 'react';
import { useChat } from './hooks/useChat';
import ChatMessages from '../ChatMessages';
import ChatInput from '../ChatInput';
import './styles/main.css';
import './styles/animations.css';
import WelcomeMessage from "../WelcomeMessage";

export default function Chat() {
    const { messages, isTyping, chatRef, input, setInput, sendMessage, isStartScreen } = useChat();

    return (
        <>
            {isStartScreen && (
                <WelcomeMessage text='Привет! С чего сегодня начнем?' speed={100} />
            )}
            <div className={`chat-wrapper ${isStartScreen ? '' : 'expanded'}`}>
                <div className="chat-messages-container" ref={chatRef}>
                    <ChatMessages messages={messages} isTyping={isTyping} />
                </div>
            </div>
            <div className={`chat-input-container ${isStartScreen ? '' : 'expanded'}`}>
                <ChatInput input={input} setInput={setInput} sendMessage={sendMessage} />
            </div>
        </>
    );
}

