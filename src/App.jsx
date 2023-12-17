import "./App.css";
import PrivateRoutes from "./app/routes/PrivateRoutes";
import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';


function App() {
  return (
    <div className="antialiased">
      <PrivateRoutes/>
    </div>
  );
}

export default App;
