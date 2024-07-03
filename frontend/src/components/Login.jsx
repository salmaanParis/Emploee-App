import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Grid, Typography } from '@mui/material';
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});

  const inputHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const addHandler = () => {
    axios.post('http://localhost:5000/api/login', user)
      .then((res) => {
        alert(res.data.message);
        // if (res.data.message === 'login success') {
        //   navigate("/home");
        // } else {
        //   navigate("/");

        // }
        sessionStorage.setItem('userToken', res.data.token);
        navigate("/home");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div style={{ backgroundColor: '', margin:'100px',height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Box
        sx={{
          border: 2.1,
          borderColor: '#1F1B28',
          borderRadius: 4,
          p: 5,
          width: 400,
          margin: 'auto',
          marginTop: '50px',
          backgroundColor: '#faf0e6',

        }}
      >
        <Typography variant='h4' align="center" sx={{marginBottom:"15px"}}>ADMIN LOGIN</Typography>
        <TextField
          sx={{ '& fieldset': { borderColor: '#1F1B28 !important' } }} // 
          style={{backgroundColor:"white"}}
          color='secondary'
          label="Name"
          name='name'
          onChange={inputHandler}
          fullWidth
          margin='normal'

        />
        <TextField
          sx={{ '& fieldset': { borderColor: '#1F1B28 !important' } }} // 
          color='secondary'
          label="Password"
          name='password'
          onChange={inputHandler}
          fullWidth
          margin='normal'
          type="password"
          style={{backgroundColor:"white"}}

        />
        <Button variant='contained' onClick={addHandler} fullWidth style={{ marginTop: '20px',backgroundColor:"#352f44" }}>Login</Button>

        <Grid container justifyContent="center" style={{ marginTop: '20px' }}>
        <Typography>
          <Link to={'/sign'} style={{color:"#1F1B28",textDecoration: "none" }}>Sign Up</Link>
        </Typography>
        <br />
        <Typography >
          <Link to={'/userlogin'} style={{color:"#322D40", textDecoration: "none", marginLeft:'25px' }}>Login as User</Link>
        </Typography>
      </Grid>
      
      </Box>

    </div>
  );
};

export default Login;
