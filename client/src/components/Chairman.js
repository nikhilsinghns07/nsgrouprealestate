import React from 'react'
import classes from './style.module.css'
import { Image } from 'react-bootstrap'
import ns from '../pics/ns.jpg'

const Chairman = () => {
    return (
        <React.Fragment>
            <div className={classes.chairmanContainer}>
                <Image src={ns} className={classes.img}/>
                <p className={classes.message}>
                    We started over five years ago with a simple mission – ” To deliver reliable and 
                    high-quality housing and commercials thereby making a difference in the life of 
                    every person and uplifting society benchmarks.” <br/> <br/>

                    NS07 Group is not just about putting up tangible structures and collecting
                    money. It’s about shouldering a much larger corporate conscientiousness.  <br/> <br/>

                    Therefore, we aim at constructing buildings with feelings – buildings that are more 
                    than four walls and which encapsulate the essence of our society. We cater to all strata of 
                    society providing housing opportunities to the lower and middle-income groups as well as the
                    elite.
                    <p style={{textAlign:'right',fontWeight:'bold',margin:2}}>
                        Nikhil Singh
                    </p>
                </p>
            </div>
        </React.Fragment>
    )
}

export default Chairman