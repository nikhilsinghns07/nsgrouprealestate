import React from 'react'
import { useState } from "react"
import axios from 'axios'
import { FaGithub, FaLinkedin} from "react-icons/fa"
import { ExternalLink } from 'react-external-link';
import classes from './style.module.css'
import {TextField,Button} from '@mui/material'

const Contact = () => {
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
    }
    
    return (
        <React.Fragment>
            <footer className={classes.footer}>
                <span className={classes.intro}>Contact Details <br/><span className={classes.icons}>  
                    <ExternalLink href="https://www.linkedin.com/in/nikhilsinghns07/"> <FaLinkedin/> </ExternalLink>
                    <ExternalLink href="https://github.com/nikhilsinghns07" > <FaGithub /> </ExternalLink> 
                </span></span> 
                
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
                        <Button variant="contained">Send</Button>
                </form>
                    
            </footer>

        </React.Fragment>
        
    )
}

export default Contact