import React, { Fragment } from 'react';
import { useStyles } from '../MainPage/styles';

import { Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import HomePage from "../HomePage/HomePage";
import SkillsPage from "../SkillsPage/SkillsPage";
import Navigation from "../Navigation/Navigation";
import ProfilePage from "../ProfilePage/ProfilePage";
import ProjectsPage from "../ProjectsPage/ProjectsPage";


import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import CodeIcon from '@material-ui/icons/Code';
import DashboardIcon from '@material-ui/icons/Dashboard';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

import Contact from '../Contact/Contact';

const MainPage = () => {
    const classes = useStyles();

    return (
        <div>
            <Fragment>
                <HomePage />
                <ProfilePage />
                <SkillsPage />
                <ProjectsPage />
                <div className={`pos-f-t ${classes.menu}`} style={{textAlign:"center"}}>
                    <Button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                        <MenuIcon className="navbar-toggler-icon" style={{width:"35px", height:"35px", fill:"white"}} />
                    </Button>
                    <div className="collapse" id="navbarToggleExternalContent">
                        <div className="bg-dark p-4">
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
                                <div style={{marginTop:"50px"}}  className="row">
                                    <div className="col">
                                        <div className={classes.header}>contact</div>
                                    </div>
                                    <div className="col">
                                        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/joshua-truong-731a34190" className={classes.a} style={{color:"black", textDecoration:"none"}}>
                                            <LinkedInIcon className={classes.icon} />
                                        </a>
                                        <br />
                                        <a target="_blank" rel="noreferrer" href="https://github.com/josh-truong" className={classes.a} style={{color:"black", textDecoration:"none"}}>
                                            <GitHubIcon className={classes.icon} />
                                        </a>
                                        <br />
                                        <a href="mailto:joshktruong@gmail.com" className={classes.a} style={{color:"black", textDecoration:"none"}}>
                                            <MailOutlineIcon className={classes.icon} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <Navigation />
                <Contact />
            </Fragment>
            <footer style={{textAlign:"center", marginBottom:"5px"}}>
                <small>
                    COPYRIGHT &copy; {new Date().getFullYear()} JOSHUA TRUONG. All Rights Reserved
                </small>
            </footer>
        </div>
    )
}

export default MainPage
