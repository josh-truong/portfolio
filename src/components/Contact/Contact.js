import React from 'react';
import { useStyles } from './styles';

import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import TwitterIcon from '@material-ui/icons/Twitter';

const Contact = () => {
    const classes = useStyles();
    return (
        <div id="contact" className={classes.root}>
            <div className={classes.header}>contact</div>
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/joshua-truong-731a34190" className={classes.a} style={{color:"black", textDecoration:"none"}}>
                <LinkedInIcon className={classes.icon} />
            </a>
            <br />
            <a target="_blank" rel="noreferrer" href="https://github.com/josh-truong" className={classes.a} style={{color:"black", textDecoration:"none"}}>
                <GitHubIcon className={classes.icon} />
            </a>
            <br />
                <a target="_blank" rel="noreferrer" href="https://twitter.com/joshktruong" className={classes.a} style={{color:"white", textDecoration:"none"}}>
                    <TwitterIcon className={classes.icon} />
                </a>
            <br />
            <a href="mailto:joshktruong@gmail.com" className={classes.a} style={{color:"black", textDecoration:"none"}}>
                <MailOutlineIcon className={classes.icon} />
            </a>
        </div>
    )
}

export default Contact
