import { createTheme, responsiveFontSizes } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            main: '#000000',
        },
        secondary: {
            main: 'rgb(220, 0, 78)',
        },
        background: {
            default: '#F9FAFC',
            paper: '#FFFFFF'
        }
    },
    typography: {
        h3: {
            fontWeight: 600,
        },
        h5: {
            fontWeight: 500,
        },
    },
});

export default responsiveFontSizes(theme);