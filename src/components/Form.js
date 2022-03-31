import React,{useState}from 'react'
import PieChart from './PieChart'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
 let start = {
    date:"yyyy-mm-dd",
    username:"",
    income:0,
    rent:0,
    expenses:0,
    savings:0,
 }



function Form({postData}) {
    const[formData,SetFormData]=useState(start)

    const {date,username,income,rent,expenses,savings} = formData
  
    function handleChange(e){
        const name = e.target.name
        let value = e.target.value
        
        SetFormData({...formData,
            [name]:value
        
        })
    }
    function handleSubmit(e){
        e.preventDefault()
        postData(formData)
        SetFormData(start)
    }
        
  return (
    <Container>
        <Paper sx={{ width: '100', padding: 1, }}>
            <form onSubmit={handleSubmit}>
                <Stack spacing={2} className="new-saving-form">
                    <input onChange={handleChange} type="date" name ="date" placeholder="date" value={date}></input>
                    <TextField id="outlined-basic" label="Username" variant="outlined" onChange={handleChange}name ="username" value={username}/>
                    <TextField id="outlined-number" label="Income" type="number" InputLabelProps={{shrink: true,}} onChange={handleChange} name ="income" value={income}/>
                    <TextField id="outlined-number" label="Expenses" type="number" InputLabelProps={{shrink: true,}} onChange={handleChange} name ="expenses" value={expenses}/>
                    <TextField id="outlined-number" label="Rent" type="number" InputLabelProps={{shrink: true,}} onChange={handleChange} name ="rent" value={rent}/>
                    <TextField id="outlined-number" label="Savings" type="number" InputLabelProps={{shrink: true,}} onChange={handleChange} name ="savings" value={savings}/>
                    <Button type="submit" value="submit" variant="contained">Submit</Button>
                </Stack>
            </form>    
        </Paper>
        <PieChart formData={formData} />
    </Container>
  )
}

export default Form