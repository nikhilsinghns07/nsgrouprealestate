import React from 'react'
import { useState } from "react"
import axios from 'axios'
import { ExternalLink } from 'react-external-link';
import classes from './style.module.css'
import {TextField,Button,Stack,styled,Paper} from '@mui/material'
import LanguageIcon from '@mui/icons-material/Language';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import BusinessIcon from '@mui/icons-material/Business';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const Footer = () => {
    const [enteredName , setEnteredName] = useState('')
    const [enteredMessage , setEnteredMessage] = useState('')
    const [enteredContact,setContact] = useState('')

    const submitHandler = async(event) => {
        try{
            await axios.post("/send",{
                name : enteredName,
                message : enteredMessage,
                contact : enteredContact
            })
        }catch(error){
        }
        setEnteredName('')
        setEnteredMessage('')
        setContact('')
    }
    
    return (
        <React.Fragment>
            <footer className={classes.footer}>
            <div>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1, sm: 2, md: 4 }}>
                    <CallIcon color="primary"/>
                    <Item>+919955395131</Item>
                    <Item>+8804058270</Item>
                </Stack>
                <br />
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1, sm: 2, md: 4 }}>
                    <BusinessIcon color="primary"/>
                    <Item>14 Gola Road , Patna 801503</Item>
                </Stack>
            </div>

                <form  className={classes.form} onSubmit={submitHandler} >
                        <div className={classes.control}>
                            <TextField id="filled-basic" label="Name" variant="filled" onChange={(text) => {setEnteredName(text)}}/>
                        </div>

                        <div className={classes.control}>
                            <TextField id="filled-basic" label="Message" variant="filled" onChange={(text) => {setEnteredMessage(text)}}/>
                        </div>

                        <div className={classes.control}>
                            <TextField id="filled-basic" label="Contact Details" variant="filled"  onChange={(text) => {setContact(text)}}/>
                        </div>
                        <Button variant="contained" onPress={() => submitHandler()}>Send</Button>
                </form>
                    
            </footer>

            <div className={classes.developer}>
                
                <p style={{color:'#808080',fontWeight:'bolder',textAlign:'center'}}> Developer Contact </p><br/>
                <div>
                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1, sm: 2, md: 4 }} justifyContent='center'>
                        <Item><ExternalLink href="https://www.linkedin.com/in/nikhilsinghns07/"> <LinkedInIcon color="primary"/> </ExternalLink> </Item>
                        <Item><ExternalLink href="https://github.com/nikhilsinghns07" > <GitHubIcon /> </ExternalLink> </Item>
                        <Item><ExternalLink href="https://nikhilsingh07.herokuapp.com" > <LanguageIcon /> </ExternalLink> </Item>
                        <Item><a href="mailto:nikhilsinghns01@gmail.com" ><EmailIcon/>  </a> </Item>
                    </Stack>
                </div>
                <p style={{color:'#808080',padding:10,textAlign:'center',fontSize:10}}>
                    This is a Real Estate Website created by Nikhil Singh for Project Purpose Only.
                    I do not have any real estate business or the images used are downloaded from internet,
                    i don't claim to be mine. <br />
                </p>
            </div>
        </React.Fragment>
        
    )
}

export default Footer