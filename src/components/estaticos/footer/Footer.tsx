import React from "react";
import './Footer.css';
import { Grid } from '@material-ui/core';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedinIcon from '@material-ui/icons/LinkedIn';
import Box from '@mui/material/Box';
import { Typography } from "@mui/material";

function Footer() {
    return(
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className="footer" style={{backgroundColor:'#272A53'}}>
                <Grid>
                    <Box style={{height: '22vh'}} paddingTop={'10px'}>
                        <Box>
                            <Box paddingBottom={'10px'}>
                            <Typography variant='subtitle2' align= 'center' gutterBottom style={{color: 'white', fontSize: 15}}>Siga-me nas redes sociais:</Typography>
                                <Box display={'flex'} justifyContent="center" alignItems="center" paddingTop={'15px'} >
                                    <Box>
                                        <a href="https://github.com/martinsdfabio" target="_blank">
                                        <GitHubIcon style={{ fontSize: 50, color: "white", height: "40px"}}/>
                                        </a>
                                    </Box>
                                    <Box>
                                        <a href="https://www.linkedin.com/in/martinsdfabio/" target="_blank">
                                        <LinkedinIcon style={{ fontSize: 50, color: "white", height: "40px"}}/>
                                        </a>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                            <Box justifyContent={'sp'}>
                            <Typography variant='subtitle2' align= 'center' gutterBottom style={{color: 'white'}}>@2023 Copyright</Typography>
                            </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default Footer