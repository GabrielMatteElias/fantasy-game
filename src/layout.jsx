import { Outlet } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";
import { Header } from "./components/menuLateral/header";

const theme = createTheme({
  typography: {
    fontFamily: '"Roboto", "Arial", sans-serif',
    h5: {
      fontSize: '1.6rem',
      fontWeight: 700
    },
    body2: {
      fontSize: '1.3rem',
    },
  },
  components: {
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          cursor: 'pointer', // Define o cursor como pointer para todos os ícones
          '&:hover': {
            color: '#1976d2', // Adiciona um efeito de hover (opcional)
          },
        },
      },

    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          fontSize: 'calc(2rem * 1.375)', // Aumento de 37.5% no tamanho da fonte
        },
      },
    },
    MuiDialogContent: {
      styleOverrides: {
        root: {
          fontSize: 'calc(1rem * 1.375)', // Aumento de 37.5% no tamanho da fonte
        },
      },
    },
    MuiDialogActions: {
      styleOverrides: {
        root: {
          fontSize: 'calc(1rem * 1.375)', // Aumento de 37.5% no tamanho da fonte
        },
      },
    },
  },
});

function Layout() {

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <div style={{ background: '#e2e8f0' }}>
        <div style={{ width: '100%', maxWidth: '120rem', margin: '0 auto', padding: '2.4rem 2.4rem 2.4rem 8.4rem' }}>
          <Outlet />
        </div>
      </div>
    </ThemeProvider>
  )
}

export default Layout;
