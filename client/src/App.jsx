import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useState, useMemo } from 'react';

// Pages
import Home from './pages/Home';
import Collections from './pages/Collections';
import NewArrivals from './pages/NewArrivals';
import Sale from './pages/Sale';
import ProductDetails from './pages/ProductDetails';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  const [mode, setMode] = useState('light');

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: mode === 'light' ? '#2c3e50' : '#1a1a2e',
            light: mode === 'light' ? '#34495e' : '#16213e',
            dark: mode === 'light' ? '#1a252f' : '#0f3460',
            contrastText: '#ffffff',
          },
          secondary: {
            main: mode === 'light' ? '#e74c3c' : '#ff6b6b',
            light: mode === 'light' ? '#ff7675' : '#ff8787',
            dark: mode === 'light' ? '#c0392b' : '#fa5252',
            contrastText: '#ffffff',
          },
          background: {
            default: mode === 'light' ? '#f5f6fa' : '#0a1929',
            paper: mode === 'light' ? '#ffffff' : '#1a1a2e',
          },
          text: {
            primary: mode === 'light' ? '#2c3e50' : '#e4e6eb',
            secondary: mode === 'light' ? '#7f8c8d' : '#b0b3b8',
          },
          divider: mode === 'light' ? 'rgba(0, 0, 0, 0.12)' : 'rgba(255, 255, 255, 0.12)',
        },
        typography: {
          fontFamily: '"Poppins", "Roboto", "Arial", sans-serif',
          h1: {
            fontWeight: 600,
          },
          h2: {
            fontWeight: 600,
          },
          h3: {
            fontWeight: 600,
          },
          h4: {
            fontWeight: 600,
          },
          h5: {
            fontWeight: 600,
          },
          h6: {
            fontWeight: 600,
          },
        },
        components: {
          MuiCard: {
            styleOverrides: {
              root: {
                backgroundColor: mode === 'light' ? '#ffffff' : '#1a1a2e',
                borderRadius: 8,
                transition: 'all 0.3s ease-in-out',
              },
            },
          },
          MuiButton: {
            styleOverrides: {
              root: {
                borderRadius: 8,
                textTransform: 'none',
                fontWeight: 500,
              },
            },
          },
          MuiAppBar: {
            styleOverrides: {
              root: {
                backgroundColor: mode === 'light' ? '#2c3e50' : '#1a1a2e',
              },
            },
          },
        },
      }),
    [mode]
  );

  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          minHeight: '100vh',
          backgroundColor: theme.palette.background.default 
        }}>
          <Navbar toggleColorMode={toggleColorMode} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/collections" element={<Collections />} />
            <Route path="/new-arrivals" element={<NewArrivals />} />
            <Route path="/sale" element={<Sale />} />
            <Route path="/product/:id" element={<ProductDetails />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
