import React from 'react';
import  { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import Container from '@mui/material/Container';




ReactDOM.render(  
    <BrowserRouter>
      <Container>
        <App/>
      </Container> 
    </BrowserRouter>,
  document.getElementById('root')
);


