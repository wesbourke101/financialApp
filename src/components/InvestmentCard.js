import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';

function InvestmentCard({saving, eraseData}) {
  const {id,date,username,income,rent,expenses,savings} = saving
  const newIncome = parseInt(income)
  const newRent = parseInt(rent)
  const newExpenses = parseInt(expenses)
  const newSavings = parseInt(savings)

  //add function here
  function handleErase(event) {
    eraseData(parseInt(event.target.id))
    // alert('Clicked Erase')
  }
  function handleEdit() {
    alert('Clicked edit')
  }
  
  return (
        <TableContainer container={Paper} >
          <Table>

            <TableHead>
              <TableRow id="TableRow">
                <TableCell>Name</TableCell>
                <TableCell align="center">Date</TableCell>
                <TableCell align="center">Income</TableCell>
                <TableCell align="center">Rent</TableCell>
                <TableCell align="center">Expenses</TableCell>
                <TableCell align="center">Savings</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              <TableRow style={{backgroundColor: "#712B75" }}>
                <TableCell component="th" scope="row">{username}</TableCell>
                <TableCell align="center">{date}</TableCell>
                <TableCell align="center">{newIncome}</TableCell>
                <TableCell align="center">{newRent}</TableCell>
                <TableCell align="center">{newExpenses}</TableCell>
                <TableCell align="center">{newSavings}</TableCell>
              </TableRow>
            </TableBody>

            <TableBody>
              <TableRow style={{backgroundColor: "#D49B54" }}>
                <TableCell><Button style={{backgroundImage: 'linear-gradient(#712B75, #C74B50, #D49B54)'}} type="submit" value="submit" variant="contained" id={id} onClick={handleErase}>Erase</Button></TableCell>
                <TableCell><Button style={{backgroundImage: 'linear-gradient(#712B75, #C74B50, #D49B54)'}} type="submit" value="submit" variant="contained" onClick={handleEdit}>Edit</Button></TableCell>
              </TableRow>
            </TableBody>

          </Table>
        </TableContainer>
        
  )
}

export default InvestmentCard