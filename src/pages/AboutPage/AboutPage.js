import profile_pic from '../../assets/profile_pic.jpg';
import { useStyles } from './styles';

import { Grid } from '@material-ui/core';
import { Typography } from '@material-ui/core';

const AboutPage = () => {
    const classes = useStyles();

    return (
        <div id='about'>
            <Grid container spacing={3}>
                <Grid item xs={12} md={12} lg={12}>
                    <svg className={`${classes.svg}`} viewBox="0 0 100 100">
                        <defs>
                            <pattern id="img" patternUnits="userSpaceOnUse" width="100" height="100">
                                <image href={profile_pic} x="-25" width="150" height="100" />
                            </pattern>
                        </defs>
                        <polygon points="50 1 95 25 95 75 50 99 5 75 5 25" fill="url(#img)"/>
                    </svg>
                </Grid>
                <Grid item xs={12} md={12} lg={12} className={`${classes.root}`} style={{borderBottom:"3px solid"}}>
                    <Typography className={`${classes.intro}`} gutterBottom variant="h5" component="h2">
                        Who's this guy?
                    </Typography>
                    <Typography className={`${classes.lead}`} gutterBottom variant="body2" component="p" style={{marginRight:"5%"}}>
                        Well hello there, fellow traveler! I'm Joshua, but my preferred name is Josh! 
                    </Typography>
                    <Typography className={`${classes.lead}`} gutterBottom variant="body2" component="p" style={{marginRight:"5%"}}>
                        I'm currently an undergrad at the <a style={{textDecoration:"none", color:"#63dedb"}} target="_blank" rel="noreferrer" href="https://www.google.com/search?q=university+of+colorado+boulder">
                        University of Colorado Boulder</a>, where I'm pursuing my Bachelor's degree in Computer Science.
                    </Typography>
                    <Typography className={`${classes.lead}`} gutterBottom variant="body2" component="p" style={{marginRight:"5%"}}>
                        Learning is a never ending journey. From acquiring various <a href="#abilities" style={{textDecoration:"none", color:"#63dedb"}}>skills/abilities</a> to reaching 
                        into several disciplines in CS, you might say it's quite 
                        the <a href="#projects" style={{textDecoration:"none", color:"#63dedb"}}>coding adventure</a>. 
                    </Typography>
                </Grid>
            </Grid>
        </div>
    )
}

export default AboutPage
