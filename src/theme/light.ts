import theme from './theme';
import { Theme } from './types';



const lightTheme: Theme = {
    ...theme,
    palette: {
        ...theme.palette,
        primary: {
            highlight: theme.colors.blue[300],
            main: theme.colors.blue[500],
            lowlight: theme.colors.blue[1000],
            contrast: theme.colors.alpha[50],
        },
        secondary: {
            highlight: theme.colors.salmon[300],
            main: theme.colors.salmon[500],
            lowlight: theme.colors.salmon[700],
            contrast: theme.colors.alpha[50],
        },
        error: {
            highlight: theme.colors.red[300],
            main: theme.colors.red[500],
            lowlight: theme.colors.red[700],
            contrast: theme.colors.alpha[50],
        },
        success: {
            highlight: theme.colors.green[300],
            main: theme.colors.green[500],
            lowlight: theme.colors.green[700],
            contrast: theme.colors.alpha[50],
        },
        alpha: {
            ...theme.colors.alpha,
        },
        text: theme.colors.alpha[900],
    },
};

export default lightTheme;