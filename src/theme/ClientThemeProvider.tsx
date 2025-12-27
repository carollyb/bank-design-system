import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';

export type ClientThemeProviderProps = {
  children: React.ReactNode;
  fontFamily?: string;
};

export default function ClientThemeProvider({
  children,
  fontFamily = 'Roboto, Inter, system-ui, sans-serif',
}: ClientThemeProviderProps) {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#75e299ff',
      },
      secondary: {
        main: '#2b9d27ff',
      },
      text: {
        primary: '#222222',
        secondary: '#000',
        disabled: 'white',
      },
    },
    typography: {
      h1: { fontFamily, fontSize: '48px', fontWeight: 500, lineHeight: '62px' },
      /* demais estilos */
    },
    components: {
      MuiButton: { styleOverrides: { root: { borderRadius: 8 } } },
    },
  });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
