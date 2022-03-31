import React, {useState,useEffect} from 'react';
import { Router, Routes, Route, Link, Outlet, Navigate } from "react-router-dom";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import About from './About'
import Form from "./Form"
import Investments from "./Investments";
import Container from '@mui/material/Container';

function App() {  
  const [savings,setSavings]=useState([])

  useEffect( () => {
    fetch(`http://localhost:3000/user`)
    .then( res => res.json())
    .then( data => setSavings((data)))
    .catch( error => console.log(error.message));
  
  },[])
  
  function postData(formdata){
    //console.log(formdata)
   fetch(`http://localhost:3000/user`, {
       method: "POST",
       headers: {
           "Content-Type": "application/json",
           Accept: "application/json"
       },
       body: JSON.stringify(
           formdata
       )
   })
   .then( res => res.json())
   .then( data => setSavings([...savings, data]))
   .catch( error => console.log(error.message));
  }

  function eraseData(id) {
    console.log(typeof id)
    fetch(`http://localhost:3000/user/${id}`, {
        method: "DELETE"
    })
    .then((res) => res.json())
    .then((newData) => setSavings(savings.filter(saving => saving.id !== id)))
    .catch( error => console.log(error.message));
  }
  

  return (
    <Container>
      <Box margin="dense" sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          typography: 'body1',
          '& > :not(style) + :not(style)': {
            ml: 2,
          },
      }}>
            <Link className='link' to="/financial"> Financial-Form </Link>
            <Link className='link' to="/investments"> Investments </Link>
            <Link className='link' to="/about"> About </Link>
        </Box>
      <Outlet />

      <Routes>
            <Route path='/' element={<Navigate replace to='/financial'/>}/>
            <Route path="financial" element={<Form postData={postData}/>} />
            <Route path="investments" element={<Investments savings={savings} eraseData={eraseData}/>} />
            <Route path="about" element={<About />} />
            <Route
              path="*"
              element={
                <main style={{ padding: "1rem" }}>
                  <p>There's nothing here!</p>
                </main>
            }/>
      </Routes>
    </Container>      
    );
}
export default App;
