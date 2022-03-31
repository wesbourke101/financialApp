import React, {useState} from "react";
import InvestmentCard from "./InvestmentCard"
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

function Investments({savings}) {
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
        <Box>
            <Box sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                alignItems: 'center',
                bgcolor: 'background.paper',
                overflow: 'hidden',
                borderRadius: '12px',
                boxShadow: 24,
                fontWeight: 'bold',
            }}>
                <Grid items xs={3}>
                    <Grid xs={{borderRadius:1, display: "inline", alignItems: 'center'}}>
                        <form onSubmit={savingSubmit}>
                            <TextField id="inputBar" label="Username" variant="outlined" name ="username" onChange={(event)=> setSearch(event.target.value)} type="text" value={search}></TextField>
                            <Button type="submit" value="submit" variant="contained">Submit</Button>
                        </form>
                    </Grid>
                </Grid>
            </Box>    
            <Grid items xs={3}>
                {filteredList.map(saving => {return <InvestmentCard key={saving.id} saving={saving} />})} 
            </Grid>
            <h1>{totals}</h1>
        </Box>
    )
}
export default Investments