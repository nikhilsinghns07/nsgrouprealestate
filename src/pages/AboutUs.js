import classes from './style.module.css'
import React from "react"
import Footer from '../components/Footer'
import ApartmentIcon from '@mui/icons-material/Apartment';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import BuildIcon from '@mui/icons-material/Build';
import ArchitectureIcon from '@mui/icons-material/Architecture';
import { Divider } from '@mui/material';
import Whyus from '../components/Whyus';
import Header from '../components/Header'

const AboutUs = () => {
    return (
        <React.Fragment>
            <Header />
            <section id="aboutus" >
                <div className={classes.img}>
                    <div className={classes.container}>
                        <p className={classes.services}>
                            <span style={{color:'yellow',fontWeight:'bolder',fontSize:20}}>Services we provide</span> <br/>
                            <ApartmentIcon />  Apartments & Office Construction <br/>
                            <CorporateFareIcon /> Selling & Renting of Home and Office <br/>
                            <BuildIcon /> Repairing of Buildings <br/>
                            <ArchitectureIcon /> Custom Design
                        </p>
                        <p className={classes.details}>
                            NS07 Group was formed with a motive of "luxury with affordability" and admired to become most trusted brand in Real Estate.
                            Its been 5 years and we have delivered quality with roots spread all over Bihar,the group kept its promise and contributed
                            to the real estate in Bihar,giving people a little beyond what normal expectations are.
                        </p>
                    </div> 
                </div>
            
            </section>
            <section id="about"> 
                <h3 className={classes.headertitle}>
                    <p>
                        <span className={classes.highlight}>ABOUT US</span>
                    </p>
                </h3>
                <Divider variant="middle"/>
            <p className={classes.para}>
                NS07 Group has sustained a steady growth to become the leading real estate developer in the region boasting of outstanding 
                quality, consistency, economy, and creativity. <br/>
                With more than a 4-year track record of sustained growth, customer satisfaction, and innovation, the group has completed over 3 
                residential properties in Bihar comprising more than 50+ flats. Currently, the group has 2 ongoing projects and 1 planned projects. <br/><br/>

                Optimum utilization of interior space is an important feature for the group as it is for prospective buyers, giving them the innate 
                feeling that the living space is not just their place of residence but that it opens up a myriad of opportunities. <br/> <br/>

                Unlike other reputed builders in Patna, NS07 Group pays equal attention to the surroundings, and beautifully landscaped 
                gardens always adorn our projects. All projects by NS07 Group are completed with a view to creating a healthy and clean 
                family atmosphere. That’s the reason our projects have received an overwhelming response from our customers even at the startup. 
                The group has forever believed in the credo of contributing to the real estate in Bihar and giving people a little beyond what 
                normal expectations are. NS07 Group has a strong management team, capable technical experts, and proud owners of 
                residential flats as their unpaid brand ambassadors. <br/> <br/>

                The Group’s strength is the delivery of its promises through scrupulous planning, emphasizing essential requirements, and the 
                importance of location, connectivity, and convenience, budget limitation of the customer, backed by quality material, workmanship, 
                and after-sales service. The value for money approach makes it the most reputed builder in Patna. <br/> <br/>

                For NS07 Group, the belief has always been to do something different, to accomplish something meaningful not just by 
                contributing to the real estate in Bihar, but also as one of the highest forms of social commitment initiative to improve
                people’s lives. Today the Group has emerged as one of the most preferred builders in Patna with bigger and more challenging 
                projects being added each year. <br/> <br/>

                The Group also provides both elite and economical residential complexes across prime locations at Patna. <br/> <br/>

                The key factors behind the success of NS07 Group are always Good Quality; Time-bound project completion and the faith of its
                customers. The respect that NS07 Group has earned in due course of time has been tremendous; the respect has been 
                overwhelming, giving every Indian customer room for their dreams. Luxury finds a new significance in NS07 Group, 
                and that is not something beyond the limitations of an average Indian buyer. <br/> <br/>
            </p>
            </section>
            <h3 className={classes.headertitle}>
                    <p>
                        <span className={classes.highlight}>WHY US ?</span>
                    </p>
                </h3>
            <Divider variant="middle"/>
            <Whyus />
            <Footer />
        </React.Fragment>
    )
}

export default AboutUs
