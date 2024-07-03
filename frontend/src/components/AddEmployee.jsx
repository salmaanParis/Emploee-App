import React, { useState } from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../axiosinterceptor';

function AddEmployee() {
  const [employee, setEmployee] = useState({});
  const navigate = useNavigate();

  const inputHandler = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const addData = ()=>{
    
    console.log(employee)
    axiosInstance.post('http://localhost:5000/addemployee',employee)
     .then((res)=>{
      // alert(res.data.message)
      alert('Employee added successfully');
      navigate('/home');

    }).catch((err)=>{
      console.error('Error adding employee:', err);
    })
  };
  return (
    <Box sx={{ backgroundColor:"#faf0e6",borderColor: 'black', borderWidth: '3px', borderStyle: 'solid', borderRadius: 5, margin: '70px', p: 3 }}>
      <Typography variant="h4" align="center">Add Employee</Typography> <br /><br />
      <form >
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          name="username"
          onChange={inputHandler}
          required
          sx={{ mb: 2 ,'& fieldset': { borderColor: '#352F44 !important' } }}
          style={{backgroundColor:"white"}}           
          color='secondary'
        />
        <TextField
          label="place"
          variant="outlined"
          fullWidth
          name="place"
          onChange={inputHandler}
          required
          sx={{ mb: 2 ,'& fieldset': { borderColor: '#352F44 !important' } }}
          style={{backgroundColor:"white"}}           
          color='secondary'
        />
        <TextField
          label="Designation"
          variant="outlined"
          fullWidth
          name="designation"
          onChange={inputHandler}
          required
          sx={{ mb: 2 ,'& fieldset': { borderColor: '#352F44 !important' } }}
          style={{backgroundColor:"white"}}           
          color='secondary'
        />
        <TextField
          label="Salary"
          variant="outlined"
          fullWidth
          name="salary"
          onChange={inputHandler}
          required
          sx={{ mb: 2 ,'& fieldset': { borderColor: '#352F44 !important' } }}
          style={{backgroundColor:"white"}}           
          color='secondary'
        />
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
        <Button variant='contained'
            color='secondary'
            onClick={addData} sx={{backgroundColor:"#352F44"}}>Submit</Button>        </Box>
      </form>
    </Box>
  );
}

export default AddEmployee;


















// import React, { useState } from 'react';
// import { TextField, Button, Typography, Box } from '@mui/material';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// function AddEmployee() {
//   // const [name, setName] = useState('');
//   // const [place, setPlace] = useState('');
//   // const [designation, setDesignation] = useState('');
//   // const [salary, setSalary] = useState('');

//   // const handleSubmit = (event) => {
//   //   event.preventDefault();
//   //   // Logic to handle form submission, e.g., send data to server
    
//   //   console.log('Form submitted:', { name, place, designation, salary });
//   //   // Clear form fields after submission
//   //   setName('');
//   //   setPlace('');
//   //   setDesignation('');
//   //   setSalary('');
//   // };


//   const [employee,setEmployee]=useState()
//   const navigate=useNavigate()
  
//     const inputHandler = (e)=>{
  
//       setEmployee({ ...employee, [e.target.name]: e.target.value });
  
//     }
//     const addData = ()=>{
  
//       console.log(employee)
//       axios.post('/',employee).then((res)=>{
//         alert(res.data.message)
//         navigate('/home');
  
//       }).catch((err)=>{
//         console.log(err)
//       })
  
//     }




//   // const handleUpdate = () => {
//   //   // Logic to handle update action
//   //   console.log('Update employee');
//   // };

//   // const handleDelete = () => {
//   //   // Logic to handle delete action
//   //   console.log('Delete employee');
//   // };

//   return (
// <Box sx={{ borderColor: 'black', borderWidth: '3px', borderStyle: 'solid', borderRadius: 5, margin: '70px', p: 3 }}>
//       <Typography variant="h4" align="center">Add Employee</Typography> <br /><br />
//       <form >
//         <TextField
//           label="Name"
//           variant="outlined"
//           fullWidth
//           name='username'
//           // value={name}
//           // onChange={(e) => setName(e.target.value)}
//           onChange={inputHandler}
//           required
//           sx={{ mb: 2 }}
//         />
//         <TextField
//           label="Place"
//           variant="outlined"
//           fullWidth
//           name='place'
//           onChange={inputHandler}
//           required
//           sx={{ mb: 2 }}
//         />
//         <TextField
//           label="Designation"
//           variant="outlined"
//           fullWidth
//           name='designation'
//           onChange={inputHandler}
//           required
//           sx={{ mb: 2 }}
//         />
//         <TextField
//           label="Salary"
//           variant="outlined"
//           fullWidth
//           name='salary'
//           onChange={inputHandler}
//           required
//           sx={{ mb: 2 }}
//         />
//         <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
//           <Button type="submit" variant="contained" color="primary" onClick={addData} >Submit</Button>
//           <Button type="button" variant="contained" color="primary" >Update</Button>
//           {/* onClick={handleUpdate} */}
//           <Button type="button" variant="contained" color="error" >Delete</Button>
//           {/* onClick={handleDelete} */}
//         </Box>
//       </form>
//     </Box>
//   );
// }

// export default AddEmployee;


//



