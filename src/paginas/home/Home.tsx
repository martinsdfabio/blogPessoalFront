import React from 'react';
import { Typography, Grid, Button } from '@material-ui/core';
import { Box } from '@mui/material';
import './Home.css'
import ListaPostagens from '../../components/postagens/listaPostagens/ListaPostagens';
import TabPostagens from '../../components/postagens/tabPostagens/TabPostagens';

function Home() {
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        
        className='img'
      >
        <Grid item xs={6}>
          <Box paddingX={20} p={3}>
            <Typography
              variant="h4"
              gutterBottom
              color="textPrimary"
              component="p"
              align="center"
              className='titulo'
            >
              Seja bem vindos Mugiwaras!
            </Typography>
            <Typography
              variant="h5"
              gutterBottom
              color="textPrimary"
              component="h5"
              align="center"
              style={{ color: 'white', fontWeight: 'bold' }}
            >
              
            </Typography>
          </Box>
          <Box display="flex" justifyContent="center">
            <Box marginRight={1}></Box>
            <Button
              variant="outlined"
              style={{
                borderColor: 'white',
                backgroundColor: 'var(--blue-600)',
                color: 'white',
              }}
            >
              Ver Postagens
            </Button>
          </Box>
        </Grid>
        <Grid xs={12} style={{ backgroundColor: 'white' }}>
          <TabPostagens />
        </Grid>
      </Grid>
    </>
  );
}

export default Home;