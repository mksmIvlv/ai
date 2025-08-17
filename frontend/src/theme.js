// src/theme.js
import { createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        background: {
            default: 'transparent', // убираем сплошной цвет
        },
    },
    customBackground: {
        gradient: 'linear-gradient(to bottom, #353839, #000000)', // красивый тёплый градиент
    },
});

export default darkTheme;
