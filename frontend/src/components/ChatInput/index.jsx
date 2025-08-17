import React from 'react';
import './styles/main.css';
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';
import Tooltip from '@mui/material/Tooltip';
import ChatInputEnum from '../../enums/chatInput/chatInputEnum.js';
import useChatInput from './hooks/useChatInput.js';

export default function ChatInput({ input, setInput, sendMessage }) {
    const { textareaRef, handleInputChange, handleSendMessage } = useChatInput(setInput, sendMessage);

    return (
        <div className="input-area">
            <textarea
                ref={textareaRef}
                rows={1}
                value={input}
                onChange={handleInputChange}
                onKeyDown={e => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault();
                        handleSendMessage();
                    }
                }}
                placeholder={ChatInputEnum.placeholderText}
            />
            <Tooltip title={ChatInputEnum.tooltipTitle}>
                <IconButton color="primary" aria-label="send" onClick={handleSendMessage}>
                    <SendIcon />
                </IconButton>
            </Tooltip>
        </div>
    );
}
