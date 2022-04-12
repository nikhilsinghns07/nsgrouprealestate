import React from "react"
import pic2 from '../pics/pic2.jpg'
import classes from './style.module.css'

const AboutUs = () => {
    return (
        <React.Fragment>
            <h1 className={classes.heading}>"Blended with luxury and affordability".</h1>
            
            <div>
                <img src={pic2} align="left" className={classes.estateImg} alt='building'></img>
                <p className={classes.process}>
                In 15 years Under the leadership of Mr Abc we have became top rated and most trusted real Estate in XYZ with a
                wide range of portfolio like Office,Resedential Apartments,Commercial Complex and more to come yet.
                <br/> <br/>
                With RERA approved we trust in building with ecology and luxury blended with affordability.
                Being a premier privately-owned real estate company in XYZ, we are able to operate with freedom
                and flexibility, and duly ensure that we meet our delivery timelines, every single time.
                </p>
            </div>
            <br/> <br/>
            <h1 className={classes.heading}> Clients Testinomial will be shown here 👇</h1>
        </React.Fragment>
    )
}

export default AboutUs
