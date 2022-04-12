import React from "react"
import Gallery from '../pics/2.jpg' 
import building from '../pics/4.jpg'
import classes from './style.module.css'
import Galxaxy from '../pics/1.png'
import concept from '../pics/concept.jpg'
import three from '../pics/3.jpg'
import {Carousel,Card} from 'react-bootstrap'

const Projects = () => {
    

    return(
        <React.Fragment>
            <div className={classes.line}/>
            <Card style={{padding:15,margin:20}}>
                <Card.Header style={{textAlign : 'center',fontSize:20,fontWeight:'bolder'}}>Bookings Open</Card.Header>
                <Carousel variant="dark">
                    <Carousel.Item>
                        <img className="d-block w-100" src={building} alt="Building" height={400} width={200}/>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img className="d-block w-100" src={concept} alt="Building" height={500} width={200}/>
                    </Carousel.Item>

                </Carousel>
            </Card>

            <div className={classes.line}/>

            <Card style={{padding:15,margin:20}}>
                <Card.Header style={{textAlign : 'center',fontSize:20,fontWeight:'bolder'}}>Projects we have Delivered</Card.Header>
                <Carousel variant="dark">
                    <Carousel.Item>
                        <img className="d-block w-100" src={Galxaxy} alt="Building" height={400} width={200}/>
                        
                    </Carousel.Item>

                    <Carousel.Item>
                        <img className="d-block w-100" src={Gallery} alt="Building" height={400} width={200}/>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img className="d-block w-100" src={three} alt="Building" height={400} width={200}/>
                    </Carousel.Item>
                    
                </Carousel>
            </Card>
        </React.Fragment>
    )
}

export default Projects 