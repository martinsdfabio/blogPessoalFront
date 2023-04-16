import React from 'react';
import {Typography, Grid, Button} from '@material-ui/core';
import {Box} from '@mui/material';
import './Home.css';

function Home() {
    return (
        <>
            <Grid className='home'container direction="row" justifyContent="center"  style={{height:'100vh', width:'100%'}}>
                <Grid alignItems="center" item xs={12}>
                    <Box paddingX={20} display="flex" justifyContent="center">
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" className='titulo'>Bem vindos Mugiwaras!!</Typography>
                       
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                        <Button variant="outlined" className='botao'>Ver Postagens</Button>
                    </Box>
                </Grid>
                <Grid item xs={12} >
                    
                </Grid>
                <Grid xs={12} className='postagens'>
                </Grid>
            </Grid>
        </>
    );
}

export default Home;