import * as React from 'react';
import {Paper,Stack,styled} from '@mui/material'

import classes from './style.module.css'
import sonu from '../pics/sonu.png'
import mayank from '../pics/mayank.png'
import kamal from '../pics/kamal.png'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
  textAlign : 'center',
}));

export default function Feedback() {
  return (
    <div className={classes.container}>
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1, sm: 2, md: 4 }}>
        <Item>
            <img src={sonu} alt="clients img" className={classes.img}></img> <br/>
            <p className={classes.feedback}>
                From the moment I contacted NS07, I was looked after
                with a level of efficiency and professionalism. The team is knowledgeable,
                committed, speedy in their execution of work, and result-oriented.
            </p>
            <footer>Mr Sonu</footer>
        </Item>
        <Item>
            <img src={mayank} alt="clients img" className={classes.img}></img>
            <p className={classes.feedback}>
                The dedication, strong work ethic, low turnaround time and strong commitment 
                exhibited by the group during the construction phase was unmatched
            </p>
            <footer>Shree Mayank Shekhar Lal Patel</footer>
        </Item>
        <Item>
            <img src={kamal} alt="clients img" className={classes.img}></img>
            <p className={classes.feedback}>
                I commend you and your team on the outstanding work you do. 
                Your staff frequently goes above and beyond the scope of work.
            </p>
            <footer>kamal Sharma</footer>
        </Item>
      </Stack>
    </div>
  );
}
