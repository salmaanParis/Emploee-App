import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Link, useNavigate } from 'react-router-dom';
import { Button, TextField, Typography } from '@mui/material';
import axios from 'axios';

const StyledBox = styled(Box)({
  border: '1px solid #ccc',
  borderRadius: '10px',
  padding: '20px',
});

const Signup = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState({});

  const inputHandler = (e) => {
    setUsers({ ...users, [e.target.name]: e.target.value });
    console.log(users);
  };

  const addHandler = () => {
    console.log('clicked', users);
    axios.post('http://localhost:5000/api/new', users)
      .then((res) => {
        console.log(res);
        alert(res.data.message);
        navigate('/home');
      })
      .catch((err) => {
        alert("Error detected",err);
      });
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '70px' }}>
      <StyledBox sx={{ width: '400px',border:'2px solid black',backgroundColor:"#faf0e6" }}>
        <TextField 
          sx={{ '& fieldset': { borderColor: '#352F44 !important' } }} // 
          style={{backgroundColor:"white"}}                 color='secondary'
          fullWidth label="Name" name="name" onChange={inputHandler} /> <br /><br />
        <TextField 
                  sx={{ '& fieldset': { borderColor: '#352F44 !important' } }} // 
                  style={{backgroundColor:"white"}}           color='secondary'
                  fullWidth label="Email" name="email" onChange={inputHandler} /> <br /><br />
        <TextField
                  sx={{ '& fieldset': { borderColor: '#352F44 !important' } }} // 
                  style={{backgroundColor:"white"}}           color='secondary'
                  fullWidth label="Address" multiline rows={4} name="address" onChange={inputHandler} /><br /><br />
        <TextField 
                  sx={{ '& fieldset': { borderColor: '#352F44 !important' } }} // 
                  style={{backgroundColor:"white"}}           color='secondary'
                  fullWidth label="Password" type="password" name="password" onChange={inputHandler} /><br /><br />
        <Box sx={{ textAlign: 'center', marginTop: '20px' }}><br />
          <Button variant="contained" color="secondary" onClick={addHandler} style={{backgroundColor:"#352f44" }}>
            Submit
          </Button>
        </Box>
        <Box sx={{ textAlign: 'center', marginTop: '20px' }}>
          <Typography>
            <Link to={'/'} style={{ color:"#1F1B28",textDecoration: 'none' }}>
              Back to login
            </Link>
          </Typography>
        </Box>
      </StyledBox>
    </Box>
  );
};

export default Signup;
