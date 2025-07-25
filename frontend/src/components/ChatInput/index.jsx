import React from 'react';
import './styles/main.css';
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';
import Tooltip from '@mui/material/Tooltip';

export default function ChatInput({ input, setInput, sendMessage }) {
    return (
        <div className="input-area">
            <textarea
                rows={1}
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault();
                        sendMessage();
                    }
                }}
                placeholder="Введите запрос..."
            />
            <Tooltip title="Отправить">
                <IconButton color="primary" aria-label="send" onClick={sendMessage}>
                    <SendIcon />
                </IconButton>
            </Tooltip>
        </div>
    );
}
