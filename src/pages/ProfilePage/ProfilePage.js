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
        axios.get(`https://raw.githubusercontent.com/${githubUsername}/${repositoryName}/main/src/assets/jsons/experience.json`)
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
                    <Grid item xs={12} md={6} lg={6}>
                        <div className={`${classes.timeline}`}>
                        {
                            Object.keys(contents).map((topicName, topicKeyIndex) => {
                                return (
                                    <>
                                        <div key={topicName} className={`row ${classes.category}`}>{topicName}</div>
                                        <Masonry breakpointCols={breakpointColumnsObj} className={`${classes.my_masonry_grid}`}
                                            columnClassName={`${classes.my_masonry_grid_column}`}>
                                            {
                                                Object.keys(contents[topicName]).map((skillName, skillIndex) => {
                                                    return (
                                                        <Timeline
                                                            date="Aug 2019 - present"
                                                            role="BS, Computer Science"
                                                            company="University of Colorado Boulder">
                                                        </Timeline>
                                                    )
                                                })
                                            }
                                        </Masonry>
                                    </>
                                )
                            })
                        }
                            {/* <div style={{margin:"0 0 0 20px"}}>
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
                            </div> */}
                        </div>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default ProfilePage;







// import React, { useEffect, useState } from 'react';
// import Masonry from 'react-masonry-css';
// import axios from 'axios';

// import SkillBar  from "../../components/SkillBar/SkillBar";
// import { useStyles } from './styles';

// const SkillsPage = () => {
//     const classes = useStyles();
//     const breakpointColumnsObj = {
//         default: 2,
//         1100: 1,
//         };
    
//     const githubUsername = 'josh-truong';
//     const repositoryName = 'portfolio-website'
//     const [contents, setContents] = useState([]);
//     useEffect(() => {
//         axios.get(`https://raw.githubusercontent.com/${githubUsername}/${repositoryName}/main/src/assets/skills.json`)
//             .then(res => {setContents(res.data);})
//             .catch(err => {
//                 console.log("skills.json does not exists!");
//             })
//     }, []);

//     return (
//         <div id='abilities' className={`${classes.root}`}>
//             <div className={`container`}>
//                 <h2 className={`${classes.h2}`}>Skills</h2>

//                 
//             </div>
//         </div>
//     )
// }

// export default SkillsPage