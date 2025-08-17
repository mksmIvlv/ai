// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider, CssBaseline, GlobalStyles } from '@mui/material';
import darkTheme from './theme';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ThemeProvider theme={darkTheme}>
            <GlobalStyles
                styles={{
                    body: {
                        background: darkTheme.customBackground.gradient,
                        margin: 0,
                        padding: 0,
                        minHeight: '100vh',
                        overflow: 'hidden',
                    },
                }}
            />
            <CssBaseline />
            <App />
        </ThemeProvider>
    </React.StrictMode>
);
