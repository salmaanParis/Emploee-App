import React,{useState , useEffect} from 'react'
import { TextField, Button, Typography, Box } from '@mui/material';
import { useParams,useNavigate } from 'react-router-dom';
import axios from 'axios';
import axiosInstance from '../axiosinterceptor';

const UpdateEmp = () => {

    const {id} = useParams()
    const [username, setName] = useState();
    const [place, setPlace] = useState();
    const [designation, setDesignation] = useState();
    const [salary, setSalary] = useState();

    const navigate = useNavigate();

    // const inputHandler = (e) => {
    //     setEmployee({ ...employee, [e.target.name]: e.target.value });
    //   };
      
    useEffect(() => {
      axiosInstance.get('http://localhost:5000/employee/'+id)
          .then(response => {
            // setEmployees(response.data);
            console.log(response)
            const { username, place, designation, salary } = response.data;
            setName(username);
            setPlace(place);
            setDesignation(designation);
            setSalary(salary);
          })
          .catch(error => {
            console.error('Error fetching employees:', error);
          });
    },[id]);

   const handleUpdate=(e)=>{
   e.preventDefault()
   axiosInstance.put(`http://localhost:5000/employee/${id}`, { username, place, designation, salary }) 
  .then(response=>{
    console.log(response)
    navigate('/home')
 })
 .catch(err=>console.log(err))
   }

  return (
<Box sx={{ backgroundColor:"#faf0e6",borderColor: 'black', borderWidth: '3px', borderStyle: 'solid', borderRadius: 5, margin: '70px auto', p: 3, maxWidth: '500px', display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
    <Typography variant="h4" align="center">Update</Typography> <br /><br />
    <form >

      <TextField 
        label="Name"
        variant="outlined"
        fullWidth
        // name="username"
        // onChange={inputHandler}
        onChange={(e)=>setName(e.target.value)}
        value={username}
        required
        InputLabelProps={{ shrink: true, style: { textAlign: 'center' } }}
          sx={{ mb: 2 ,'& fieldset': { borderColor: '#352F44 !important' } }}
          style={{backgroundColor:"white"}}           
          color='secondary'
        
      />
      <TextField
        label="place"
        variant="outlined"
        fullWidth
        // name="place"
        // onChange={inputHandler}
        onChange={(e)=>setPlace(e.target.value)}
       value={place}
        required
        InputLabelProps={{ shrink: true, style: { textAlign: 'center' } }}
        sx={{ mb: 2 ,'& fieldset': { borderColor: '#352F44 !important' } }}
        style={{backgroundColor:"white"}}           
        color='secondary'      />
      <TextField
        label="Designation"
        variant="outlined"
        fullWidth
        // name="designation"
        // onChange={inputHandler}
        onChange={(e)=>setDesignation(e.target.value)}
       value={designation}
        required
        InputLabelProps={{ shrink: true, style: { textAlign: 'center' } }}
        sx={{ mb: 2 ,'& fieldset': { borderColor: '#352F44 !important' } }}
        style={{backgroundColor:"white"}}           
        color='secondary'      />
      <TextField
        label="Salary"
        variant="outlined"
        fullWidth
        // name="salary"
        // onChange={inputHandler}
        onChange={(e)=>setSalary(e.target.value)}
        value={salary}
        required
        InputLabelProps={{ shrink: true, style: { textAlign: 'center' } }}
        sx={{ mb: 2 ,'& fieldset': { borderColor: '#352F44 !important' } }}
        style={{backgroundColor:"white"}}           
        color='secondary'
      />
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
      <Button variant='contained'color='success' onClick={handleUpdate} style={{ marginTop: '20px',backgroundColor:"#352f44" }}>Update</Button> 
      {/* <button>Update</button>        */}
      </Box>
    </form>
  </Box>
  )
}

export default UpdateEmp