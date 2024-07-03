import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import axiosInstance from '../axiosinterceptor';

const Home = () => {
  const [employees, setEmployees] = useState([]);
  const navigate=useNavigate()

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = () => {
    axiosInstance.get('http://localhost:5000/employee')
      .then(response => {
        setEmployees(response.data);
      })
      .catch(error => {
        console.error('Error fetching employees:', error);
      });
  };
  
  

  const deleteValue = (id) => {
    axiosInstance.delete("http://localhost:5000/" + id)
      .then((response) => {
        alert("Data deleted");
        setEmployees(prevEmployees => prevEmployees.filter(employee => employee._id !== id));
      })
      .catch((error) => {
        console.error("Error deleting post:", error);
      });
  };

  // const updateValue = (id) => {
  //   navigate('/home');
  //   axios.put('http://localhost:5000/' +id)
  //     .then((response) => {
  //       alert("Employee updated successfully");
  //       fetchEmployees();
  //     })
  //     .catch((error) => {
  //       console.error("Error updating employee:", error);
  //     });
  // };
  
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f0f0f0' ,borderTop:'1px solid #322D40'}}>
      <TableContainer component={Paper} style={{ width: '80%', backgroundColor: '#272231', borderRadius: '10px' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={{ textAlign: 'center',color:"white" }}>Name</TableCell>
              <TableCell style={{ textAlign: 'center',color:"white" }}>Place</TableCell>
              <TableCell style={{ textAlign: 'center',color:"white" }}>Designation</TableCell>
              <TableCell style={{ textAlign: 'center',color:"white" }}>Salary</TableCell>
              <TableCell style={{ textAlign: 'center',color:"white" }}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {employees.map((employee, index) => (
              <TableRow key={employee._id} style={{ backgroundColor:'#b9b4c7' }}>
                <TableCell style={{ textAlign: 'center', paddingLeft: '50px' }}>{employee.username}</TableCell>
                <TableCell style={{ textAlign: 'center' }}>{employee.place}</TableCell>
                <TableCell style={{ textAlign: 'center' }}>{employee.designation}</TableCell>
                <TableCell style={{ textAlign: 'center' }}>{employee.salary}</TableCell>
                <TableCell style={{ textAlign: 'center' }}>
                  {/* <Button variant="contained" color="success" style={{ marginRight: '10px',backgroundColor:"#433C56" }}>
                    View
                  </Button> */}
                  <Button variant="contained" color="error" style={{ marginRight: '10px' ,backgroundColor:"#352F44"}} onClick={() => deleteValue(employee._id)}>
                    Delete
                  </Button>
                  <Button variant="contained" color="secondary" style={{marginLeft: '10px' , backgroundColor:"#322D40"}}><Link to={`/update/${employee._id}`} style={{color:'white',textDecoration:"none"}}> Update </Link></Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Home;

















// import React, { useState, useEffect } from 'react';
// import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import Button from '@mui/material/Button';
// import axios from 'axios';

// const DenseTable = styled(Table)(({ theme }) => ({
//   '& .MuiTableCell-root': {
//     padding: theme.spacing(1),
//   },
// }));

// const Home = () => {
//   const [employees, setEmployees] = useState([]);

//   useEffect(() => {
//     // Fetch employee data from the server on component mount
//     fetchEmployees();
//   }, []);

  

//   const fetchEmployees = () => {
//     // Fetch employee data from the server
//     axios.get('/')
//     .then((response) => {
//       if (Array.isArray(response.data)) {
//         // Update the state with the fetched data if it's an array
//         setEmployees(response.data);
//       } else {
//         console.error('Invalid response data:', response.data);
//       }
//     })
//     .catch((error) => {
//       console.error('Error fetching employees:', error);
//     });
//   };

//   const handleUpdate = (employeeId) => {
//     // Implement update functionality here
//     console.log('Update employee:', employeeId);
//   };

//   const handleDelete = (employeeId) => {
//     // Implement delete functionality here
//     axios.delete("/" + employeeId)
//       .then((response) => {
//         alert(response.data.message);
//         setEmployees(prevEmployees => prevEmployees.filter(employee => employee._id !== employeeId));
//       })
//       .catch((error) => {
//         console.error("Error deleting post:", error);
//       });
//     console.log('Delete employee:', employeeId);
//   };
  

//   return (
//     <Box sx={{ marginTop: 4 }}>
//       <TableContainer component={Paper}>
//         <DenseTable size="small">
//           <TableHead>
//             <TableRow>
//               <TableCell>Name</TableCell>
//               <TableCell>Email</TableCell>
//               <TableCell>Designation</TableCell>
//               <TableCell>Salary</TableCell>
//               <TableCell align="right">Actions</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {employees.map((employee) => (
//               <TableRow key={employee._id}>
//                 <TableCell>{employee.name}</TableCell>
//                 <TableCell>{employee.email}</TableCell>
//                 <TableCell>{employee.designation}</TableCell>
//                 <TableCell>{employee.salary}</TableCell>
//                 <TableCell align="right">
//                   <Button onClick={() => handleUpdate(employee._id)} variant="outlined" color="primary" sx={{ marginRight: 1 }}>
//                     Update
//                   </Button>
//                   <Button onClick={() => handleDelete(employee._id)} variant="outlined" color="error">
//                     Delete
//                   </Button>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </DenseTable>
//       </TableContainer>
//     </Box>
//   );
// };

// export default Home;

//
