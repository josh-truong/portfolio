import React from 'react';
import { useStyles } from './styles';


import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import CodeIcon from '@material-ui/icons/Code';
import DashboardIcon from '@material-ui/icons/Dashboard';
import Airplay from '@material-ui/icons/Airplay';

const Navigation = () => {
    const classes = useStyles();

    return (
        <div id='navigation'>
            <div className={`${classes.root}`}>
                <a href="#home" className={classes.a} style={{color:"black", textDecoration:"none"}}>
                    <HomeIcon className={classes.icon} />
                </a>
                <br />
                <a href="#profile" className={classes.a} style={{color:"black", textDecoration:"none"}}>
                    <PersonIcon className={classes.icon} />
                </a>
                <br />
                <a href="#abilities" className={classes.a} style={{color:"black", textDecoration:"none"}}>
                    <CodeIcon className={classes.icon} />
                </a>
                <br />
                <a href="#projects" className={classes.a} style={{color:"black", textDecoration:"none"}}>
                    <DashboardIcon className={classes.icon} />
                </a>
                <br />
                <a href="" className={classes.a} style={{color:"black", textDecoration:"none"}}>
                    <Airplay className={classes.icon} />
                </a>
            </div>
        </div>
    )
}

export default Navigation
