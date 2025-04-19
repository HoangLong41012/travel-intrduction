import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    body1: {
      fontSize: '0.75rem',
      lineHeight: '1rem',
      fontWeight: 400,
    },
    body2: {
      fontSize: '0.625rem',
      lineHeight: '0.875rem',
      fontWeight: 400,
    },
    head2: {
      fontSize: '1.5rem',
      lineHeight: '1.75rem',
      fontWeight: 700,
    },
    head3: {
      fontSize: '1.375rem',
      lineHeight: '1.75rem',
      fontWeight: 600,
    },
    head4: {
      fontSize: '1.25rem',
      lineHeight: '1.75rem',
      fontWeight: 500,
    },
    head5: {
      fontSize: '1.125rem',
      lineHeight: '1.5rem',
      fontWeight: 700,
    },
    head6: {
      fontSize: '1rem',
      fontWeight: 500,
      lineHeight: '1.5rem',
    },
    title: {
      fontSize: '1rem',
      lineHeight: '1.5rem',
      fontWeight: 500,
    },
    info: {
      fontSize: '0.875rem',
      lineHeight: '1.25rem',
    },
    subtitle: {
      fontSize: '0.75rem',
      lineHeight: '1.125rem',
      fontWeight: 400,
    },
    caption: {
      fontSize: '0.625rem',
      lineHeight: '1rem',
      fontWeight: 400,
    },
    menu: {
      fontSize: '0.875rem',
      lineHeight: '1.25rem',
      fontWeight: 500,
    },
  },
  palette: {
    theme: {
      main: '#00A800',
      light: '#4caf50',
    },
    green: {
      main: '#03AC13',
      light: '4caf50',
    },
    orange: {
      main: '#FFCC00',
      light: '#FFD600',
    },
    black: {
      main: '#000000',
      light: 'rgba(0, 0, 0, 0.7)',
    },
    blue: {
      main: '#2f76bb',
      light: '#1E90FF',
    },
    white1: {
      main: '#ffffff',
      light: 'rgba(255, 255, 255, 0.7)',
    },
  },
});
export default theme;
