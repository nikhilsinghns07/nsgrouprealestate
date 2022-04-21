import React,{useState} from 'react'
import {Card} from 'react-bootstrap'
import classes from './style.module.css'
import {Divider} from '@mui/material'
import axios from 'axios'
import Footer from '../components/Footer'

const Contact = () => {
    const [enteredName , setEnteredName] = useState('')
    const [enteredMessage , setEnteredMessage] = useState('')
    const [enteredEmail , setEnteredEmail] = useState('')
    const [enteredContact , setEnteredContact] = useState('')

    const nameHandler = (event) => {
        setEnteredName(event.target.value)
    }

    const emailHandler = (event) => {
        setEnteredEmail(event.target.value)
    }

    const contactHandler = (event) => {
        setEnteredContact(event.target.value)
    }

    const messageHandler = (event) => {
        setEnteredMessage(event.target.value)
    }

    const submitHandler = async(event) => {
        try{
            await axios.post("/send",{
                name : enteredName,
                email : enteredEmail,
                contact : enteredContact,
                message : enteredMessage,

            }).then(res=>{
                console.log(res)
            })
        }catch(error){
            console.log(error)
        }
        setEnteredName('')
        setEnteredMessage('')
    }

    return (
        <React.Fragment>
            <h3 className={classes.headertitle}>
                    <p>
                        <span className={classes.highlight}>CONTACT US</span>
                    </p>
                </h3>
            <Divider variant="middle"/>
            <Card className={classes.card}>
                
                <Card.Header style={{textAlign:'center'}}>
                WE ALWAYS LOVE TO HEAR FROM OUR CUSTOMERS. FEEL FREE TO DROP IN OR CONTACT US DURING OUR BUSINESS HOURS.
                </Card.Header>
                <Card.Body>
                    <form  className={classes.form} onSubmit={submitHandler} >
                            <div className={classes.control}>
                                <label htmlFor='name'>Name</label>
                                <input type='text' id='name' value={enteredName} onChange={nameHandler}/>
                            </div>

                            <div className={classes.control}>
                                <label htmlFor='text'>Email</label>
                                <input type='text' id='email' value={enteredEmail} onChange={emailHandler} />
                            </div>

                            <div className={classes.control}>
                                <label htmlFor='text'>Contact Details</label>
                                <input type='text' id='contact' value={enteredContact} onChange={contactHandler} />
                            </div>

                            <div className={classes.control}>
                                <label htmlFor='text'>Message</label>
                                <input type='text' id='message' value={enteredMessage} onChange={messageHandler} />
                            </div>

                            <div className={classes.actions}>
                            <button className={classes.btn}>Send</button>
                            </div>
                        </form>
                </Card.Body>
            </Card>
            <Footer />
        </React.Fragment>
        
    )
}

export default Contact