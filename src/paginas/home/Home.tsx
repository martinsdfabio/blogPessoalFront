import React from 'react'
import Grid from '@material-ui/core/Grid/Grid'
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import './Home.css';

function Home() {
    return(
        <>
            <Grid className='home'container direction="row" justifyContent="center"  style={{height:'100vh', width:'100%'}}>
                <Box>
                    <Typography variant="h3" gutterBottom color="textPrimary" paddingTop={10} component="h3" style={{ color: "#000000", fontWeight: "bold" }}>Bem vindos Mugiwaras!!</Typography>
                </Box>
            </Grid>
        </>
    )
}

export default Home