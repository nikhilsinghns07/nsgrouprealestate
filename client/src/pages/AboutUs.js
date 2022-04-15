import classes from './style.module.css'
import React from "react"
import Footer from '../components/Footer'


const AboutUs = () => {
    return (
        <React.Fragment>
            <section id="aboutus" >
                <div className={classes.img}>
                    <div className={classes.container}>
                        <p className={classes.head}>About NS07 Group</p>
                        <p className={classes.details}>
                            NS07 Group was formed with a motive of "luxury with affordability" and admired to become most trusted brand in Real Estate.
                            Its been 5 years and we have delivered quality with roots spread all over Bihar,the group kept its promise and contributed
                            to the real estate in Bihar,giving people a little beyond what normal expectations are.
                        </p>
                        <p className={classes.services}>
                            
                        </p>
                    </div> 
                </div>
            </section>
            <Footer />
        </React.Fragment>
    )
}

export default AboutUs
