import React, { useEffect, useState } from 'react';
import axios from 'axios';

import About from '../AboutPage/AboutPage'
import Timeline from '../../components/Timeline/Timeline'

import { useStyles } from './styles'
import { Grid } from '@material-ui/core'

const ProfilePage = () => {
    const classes = useStyles();

    const githubUsername = 'josh-truong';
    const repositoryName = 'portfolio-website'
    const [contents, setContents] = useState([]);
    useEffect(() => {
        axios.get(`https://raw.githubusercontent.com/${githubUsername}/${repositoryName}/main/src/assets/jsons/profile.json`)
            .then(res => {setContents(res.data);})
            .catch(err => {
                console.log("skills.json does not exists!");
            })
    }, []);

    return (
        <div id='profile' className={`${classes.root}`}>
            <div className="container" style={{zIndex:"2"}}>
                <h2 className={`${classes.h2}`}>Profile</h2>
                <h3 className={`${classes.lead}`}>"You learn to paint mostly by doing it. Ditto for hacking." -Paul Graham</h3>
                <hr />
                
                <Grid container spacing={3} style={{margin: "5vh 0 0 0"}}>
                    <Grid item xs={12} md={6} lg={6}>
                        <About></About>
                    </Grid>
                    <Grid item xs={12} md={6} lg={6}  style={{paddingLeft:'10vw'}}>
                        <div className={`${classes.timeline}`}>
                        {
                            Object.keys(contents).map((section, sectionIdx) => {
                                return (
                                    <>
                                        <div style={{margin:"0 0 0 20px"}}>
                                            <div key={section} className={`${classes.timeline_header}`}>{section}</div>
                                            <div style={{marginLeft:"10px"}}>
                                                {
                                                    Object.keys(contents[section]).map((experience, experienceIdx) => {
                                                        return (
                                                            <Timeline
                                                                date={contents[section][experience]['tenure']}
                                                                role={contents[section][experience]['position']}
                                                                company={contents[section][experience]['location']}>
                                                            </Timeline>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }
                        </div>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default ProfilePage;