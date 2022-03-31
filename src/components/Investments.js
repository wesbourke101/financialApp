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

function Investments({savings, eraseData}) {
    const [search, setSearch] = useState("")
    const [totals, setTotals] = useState(0)
    const filteredList = savings.filter(saving => saving.username.toLowerCase().includes(search.toLowerCase()))
    let addition = 0;

    function savingSubmit(event) {
        event.preventDefault()
        const totals = filteredList.map(filter => {
            let something = parseInt(filter.savings)
            addition = addition + something
            return (setTotals(addition))
        })
    }   
    return (
        <Grid container>
            <Grid item xs={8}>
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
                                <TextField label="Outlined secondary" color="secondary" id="inputBar"  variant="filled" name ="username" margin="normal" onChange={(event)=> setSearch(event.target.value)} type="text" value={search} sx={{width: '20rem', ml: 2}}></TextField>
                                <Button style={{backgroundImage: 'linear-gradient(#712B75, #C74B50, #D49B54)', marginTop: '1.1em', height: '3.5rem' }} type="submit" value="submit" variant="contained" >Submit</Button>
                            </Stack>
                        </Box>   

                        <Box sx={{padding: 2}}>
                            {filteredList.map(saving => {return <InvestmentCard key={saving.id} saving={saving} eraseData={eraseData}/>})} 
                        </Box>  

                </Paper>
            </Grid>

            <Grid item xs={4}>
                <Paper sx={{m: 3, bgcolor: 'rgba(0,0,0,0.7)'}}>

                    <Typography 
                        variant="h4" 
                        component="div" 
                        gutterBottom
                        sx={{color: "#D49B54", padding: 2}}
                    >
                        Total Savings: {totals}
                    </Typography>

                    <Typography 
                        variant="h4" 
                        component="div" 
                        gutterBottom
                        sx={{color: "#D49B54", padding: 2}}
                    >
                        Total Savings: {totals}
                    </Typography>

                    <Typography 
                        variant="h4" 
                        component="div" 
                        gutterBottom
                        sx={{color: "#D49B54", padding: 2}}
                    >
                        Total Savings: {totals}
                    </Typography>

                    <Typography 
                        variant="h4" 
                        component="div" 
                        gutterBottom
                        sx={{color: "#D49B54", padding: 2}}
                    >
                        Total Savings: {totals}
                    </Typography>

                </Paper>
            </Grid>
        </Grid>
    )
}
export default Investments