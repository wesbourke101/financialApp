import React, {useState} from "react";
import InvestmentCard from "./InvestmentCard"
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
let defaultList = { 
    homePrice: 0,
    loanTerm: 0,
    interestRate: 0,
    downPayment: 0,
}

function Investments({savings, eraseData}) {
    const [search, setSearch] = useState("")
    const [totals, setTotals] = useState(0)
    const [formState, setFormState] = useState(defaultList)
    const [monthlyPaymentOne, setMonthlyPayment] = useState(0)
    const filteredList = savings.filter(saving => saving.username.toLowerCase().includes(search.toLowerCase()))
    let addition = 0;

    function savingSubmit(event) {
        event.preventDefault()

        if (filteredList.length > 0) {
            const totals = filteredList.map(filter => {
            let something = parseInt(filter.savings)
            addition = addition + something
            return (setTotals(addition))
            })
        }
        else setTotals(0)
    }   

    function PropertyValueInput(event) {
        setFormState({...formState, [event.target.name]: event.target.value})
    }

    function monthlyPayment(event) {
        event.preventDefault()
        
        let principalAmount = formState.homePrice*(1-formState.downPayment)
        console.log(principalAmount)

        let totalInterestOnLoan = principalAmount*formState.interestRate;

        let months = formState.loanTerm * 12;

        let monthlyPayment = Math.floor((totalInterestOnLoan + principalAmount) / months);
        setMonthlyPayment(monthlyPayment)
        
    }

    
    return (
        <Grid container>
            <Grid item xs={7.5}>
                <Paper sx={{m: 1, bgcolor: 'rgba(0,0,0,0.7)'}}>

                    <Typography 
                    variant="h1" 
                    component="div" 
                    gutterBottom
                    sx={{color: "#D49B54", padding: 2}}
                    >
                        Young Money
                    </Typography>

                        <Box  component="form" onSubmit={savingSubmit}>
                            <Stack direction='row'>
                                <TextField label="Name" color="secondary" id="inputBar"  variant="filled" name ="username" margin="normal" onChange={(event)=> setSearch(event.target.value)} type="text" value={search} sx={{width: '20rem', ml: 2}}></TextField>
                                <Button style={{backgroundImage: 'linear-gradient(#712B75, #C74B50, #D49B54)', marginTop: '1.1em', height: '3.5rem' }} type="submit" value="submit" variant="contained" >Submit</Button>
                            </Stack>
                        </Box>   

                        <Box sx={{padding: 2}}>
                            {filteredList.map(saving => {return <InvestmentCard key={saving.id} saving={saving} eraseData={eraseData}/>})} 
                        </Box>  

                </Paper>
            </Grid>

            <Grid>
            <Paper sx={{m: 3.5, bgcolor: 'rgba(0,0,0,0.7)'}}>
                <Typography 
                    variant="h5" 
                    component="div" 
                    gutterBottom
                    sx={{color: "#D49B54", padding: 2}}
                    >
                       Total in savings: $ {totals}
                    </Typography>
            
                    <form onSubmit={monthlyPayment}>

                        <TextField name="homePrice" type="number" label="Property Value" color="secondary" variant="filled" margin="normal" sx={{width: '90%', ml: 2, background: "#D49B54"}} onChange={PropertyValueInput} value={formState.homePrice} ></TextField>

                        <Box>
                            <FormControl fullWidth sx={{ padding: 2}}>
                                <InputLabel>Interest Rate</InputLabel>
                                    <Select
                                        name="interestRate"
                                        sx={{width: '90%', background: '#C74B50'}}
                                        color="secondary"
                                        label="Outlined secondary"
                                        value={formState.interestRate}
                                        onChange={(event) => {setFormState({...formState, interestRate: event.target.value})}}
                                    >
                                        <MenuItem value={.02}>2%</MenuItem>
                                        <MenuItem value={.04}>4%</MenuItem>
                                        <MenuItem value={.06}>6%</MenuItem>
                                    </Select>
                            </FormControl>
                        </Box>

                        <Box>
                            <FormControl fullWidth sx={{ padding: 2}}>
                                <InputLabel>Down Payment</InputLabel>
                                    <Select
                                        name="downPayment"
                                        sx={{width: '90%', background: '#712B75'}}
                                        color="secondary"
                                        label="Outlined secondary"
                                        value={formState.downPayment}
                                        onChange={(event) => {setFormState({...formState, downPayment: event.target.value})}}
                                    >
                                        <MenuItem value={.15}>15%</MenuItem>
                                        <MenuItem value={.20}>20%</MenuItem>
                                        <MenuItem value={.30}>30%</MenuItem>
                                    </Select>
                            </FormControl>
                        </Box>

                        <Box>
                            <FormControl fullWidth sx={{ padding: 2}}>
                                <InputLabel>Mortgage Term</InputLabel>
                                    <Select
                                        name="loanTerm"
                                        sx={{width: '90%', background: '#46244C'}}
                                        color="secondary"
                                        label="Outlined secondary"
                                        value={formState.loanTerm}
                                        onChange={(event) => {setFormState({...formState, loanTerm: event.target.value})}}
                                    >
                                        <MenuItem value={10}>10</MenuItem>
                                        <MenuItem value={15}>15</MenuItem>
                                        <MenuItem value={30}>30</MenuItem>
                                    </Select>
                            </FormControl>
                        </Box>
                        <Button style={{backgroundImage: 'linear-gradient(#712B75, #C74B50, #D49B54)', marginTop: '1.1em', height: '3.5rem' }} type="submit" variant="contained" >Submit</Button>
                    </form>

                    <Box>
                        <Typography 
                            variant="h5" 
                            component="div" 
                            sx={{color: "#D49B54", padding: 2}}
                        >
                            Monthly Payment: $ {monthlyPaymentOne}
                        </Typography>
                    </Box>
                </Paper>
            </Grid>
        </Grid>
    )
}
export default Investments