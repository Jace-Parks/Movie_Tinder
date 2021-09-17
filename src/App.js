import logo from './logo.svg';
import './App.css';
import React from 'react'
import { Box } from '@material-ui/core';

const App = () => {
  return (
    <div style={{marginLeft: '40%', marginTop: '60px', width: '30%' }}>
      <Box color="White" bgcolor="palevioletred" p={1}>
        Hello!
      </Box>
    </div>

  );
}

export default App;
