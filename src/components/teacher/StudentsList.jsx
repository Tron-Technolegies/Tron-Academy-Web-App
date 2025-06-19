import React from 'react';
import "../teacher/StudentsList.css";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';

const rows = [
  { Name: 'Students 1', MobileNumber: '9123456780', Email: 'students@gmail.com', avatar: 'https://i.pravatar.cc/40?img=1' },
  { Name: 'Students 2', MobileNumber: '9123456780', Email: 'students@gmail.com', avatar: 'https://i.pravatar.cc/40?img=2' },
  { Name: 'Students 3', MobileNumber: '9123456780', Email: 'students@gmail.com', avatar: 'https://i.pravatar.cc/40?img=3' },
  { Name: 'Students 4', MobileNumber: '9123456780', Email: 'students@gmail.com', avatar: 'https://i.pravatar.cc/40?img=4' },
  { Name: 'Students 5', MobileNumber: '9123456780', Email: 'students@gmail.com', avatar: 'https://i.pravatar.cc/40?img=5' },
  { Name: 'Students 1', MobileNumber: '9123456780', Email: 'students@gmail.com', avatar: 'https://i.pravatar.cc/40?img=1' },
  { Name: 'Students 1', MobileNumber: '9123456780', Email: 'students@gmail.com', avatar: 'https://i.pravatar.cc/40?img=1' },
  { Name: 'Students 1', MobileNumber: '9123456780', Email: 'students@gmail.com', avatar: 'https://i.pravatar.cc/40?img=1' },
  { Name: 'Students 1', MobileNumber: '9123456780', Email: 'students@gmail.com', avatar: 'https://i.pravatar.cc/40?img=1' },
  { Name: 'Students 1', MobileNumber: '9123456780', Email: 'students@gmail.com', avatar: 'https://i.pravatar.cc/40?img=1' }
];

const StudentsList = () => {
  return (
    <div className="students-list-wrapper">
      <h2>Enrolled Students</h2>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Mobile number</TableCell>
              <TableCell>E-mail</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={index}>
                <TableCell>
                  <div className="custom-avatar-cell">
                    <Avatar src={row.avatar} alt={row.Name} />
                    {row.Name}
                  </div>
                </TableCell>
                <TableCell>{row.MobileNumber}</TableCell>
                <TableCell>{row.Email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default StudentsList;
