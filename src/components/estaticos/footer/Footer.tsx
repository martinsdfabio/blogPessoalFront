import React from "react";
import './Footer.css';
import { Grid } from '@material-ui/core';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedinIcon from '@material-ui/icons/LinkedIn';
import Box from '@mui/material/Box';
import { Typography } from "@mui/material";
import { makeStyles } from '@material-ui/core/styles';

function Footer() {
    return(
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className="box1">
                <Grid item xs={12}>
                    
                    <Box className="box1" paddingTop={'1px'}>
                        <Box>
                            <Box paddingBottom={'1px'}>
                            <Typography variant='subtitle2' align= 'center' gutterBottom className="textos">Siga-me nas redes sociais:</Typography>
                                <Box display={'flex'} justifyContent="center" alignItems="center" paddingTop={'1px'} >
                                    <Box>
                                        <a href="https://github.com/martinsdfabio" target="_blank">
                                        <GitHubIcon className="redes"/>
                                        </a>
                                        
                                    </Box>
                                    <Box>
                                    <a href="https://www.linkedin.com/in/martinsdfabio/" target="_blank">
                                        <LinkedinIcon className="redes"/>
                                        </a>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                            <Box justifyContent={'sp'}>
                            <Typography variant='subtitle2' align= 'center' gutterBottom className="textos">@2023 Copyright</Typography>
                            </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default Footer