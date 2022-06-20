import About from '../AboutPage/AboutPage'
import Timeline from '../../components/Timeline/Timeline'

import { useStyles } from './styles'
import { Grid } from '@material-ui/core'

const ProfilePage = () => {
    const classes = useStyles();

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
                    <Grid item xs={12} md={6} lg={6}>
                        <div className={`${classes.timeline}`}>
                            
                        
                            <div style={{margin:"0 0 0 20px"}}>
                                <div className={`${classes.timeline_header}`}>BRIEF HISTORY IN TIME</div>
                                <div>
                                    <Timeline
                                        date="Aug 2019 - present"
                                        role="BS, Computer Science"
                                        company="University of Colorado Boulder">
                                    </Timeline>
                                    <Timeline
                                        date="Aug 2015 to May 2019"
                                        role="High School Diploma"
                                        company="Standley Lake High School">
                                    </Timeline>
                                </div>
                            </div>
                            <div style={{margin:"0 0 0 20px"}}>
                                <div className={classes.timeline_header}>EXPERIENCE</div>
                                <div>
                                    <Timeline
                                        date="Jan 2022 - present"
                                        role="Intermediate Student Assistant"
                                        company="Department of Computer Science - CU Boulder">
                                    </Timeline>
                                    <Timeline
                                        date="Aug 2021 to Jan 2022"
                                        role="Sales Floor Associate"
                                        company="CU Bookstore - CU Boulder">
                                    </Timeline>
                                    <Timeline
                                        date="Aug 2020 to Dec 2020"
                                        role="Solar Flare Analyst"
                                        company="Department of Physics - CU Boulder">
                                    </Timeline>
                                </div>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default ProfilePage;
