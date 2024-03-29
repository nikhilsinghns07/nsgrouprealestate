import React from 'react'
import classes from './style.module.css'
import building from '../pics/pic1.png'
import {Carousel,Card} from 'react-bootstrap'
import FeedBack from '../components/Feedback'
import Footer from '../components/Footer'
import b1 from '../pics/b1.jpg'
import b2 from '../pics/b2.jpg'
import b3 from '../pics/b3.png'
import { Divider } from '@mui/material'
import Chairman from '../components/Chairman'
import Header from '../components/Header'

const Home = () => {
    return (
        <React.Fragment>
            <Header />
            <div className={classes.intro}>
                <img src={building} className={classes.building} alt='buildng'></img>       
            </div>
            <h3 className={classes.headertitle}>
                <p>
                    <span className={classes.highlight}>CHAIRMAN'S DESK</span>
                </p>
            </h3>
            <Chairman />
            <Carousel fade className={classes.carousel}>
                <Carousel.Item>
                    <img className="d-block w-100" src={b1} height={650} alt="First slide"/> 
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={b2}  height={650} alt="First slide"/> 
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={b3}  height={650}  alt="First slide"/> 
                </Carousel.Item>
            </Carousel>

            <Card className={classes.card}>
                <Card.Header style={{textAlign:'center'}}>Blended with luxury and affordability</Card.Header>
                <Card.Body >
                        In 4 years Under the leadership of Mr Nikhil Singh we have became top rated and most trusted real Estate in Patna with a
                        wide range of portfolio like Office,Resedential Apartments,Commercial Complex and more to come yet.
                        With RERA approved we trust in building with ecology and luxury blended with affordability.
                        Being a premier privately-owned real estate company in Patna, we are able to operate with freedom
                        and flexibility, and duly ensure that we meet our delivery timelines, every single time.
                </Card.Body>
                <Card.Body>
                    We help our clients to identify their underlying goals for buying or selling, and diligently 
                    manage the process from start to finish, so you can remain clear-headed.
                </Card.Body>
            </Card>
            <h3 className={classes.headertitle}>
                <p>
                    <span className={classes.highlight}>Our Happy Clients</span>
                </p>
            </h3>
            <Divider variant='middle'/>
            <FeedBack />
            
            
            <Footer />
        </React.Fragment>
    )
}

export default Home