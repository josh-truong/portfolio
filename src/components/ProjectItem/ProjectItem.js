import React, { useEffect, useState } from 'react';
import { Chip, Collapse, Button, Typography } from '@material-ui/core';
import { Card, CardActions, CardContent, CardMedia, IconButton } from '@material-ui/core';

import CodeIcon from '@material-ui/icons/Code';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import default_img from '../../assets/default_img.png';
import { useStyles } from './styles';

import axios from 'axios';
const octokit = require("@octokit/request");


const ProjectItem = ({ name, description, image, link, htmlURL, createdOn}) => {
    const classes = useStyles();
    const [liked, setLiked] = useState(false);
    const [imageExists, setImageExists] = useState(true);
    const [expanded, setExpanded] = useState(false);

    const handleLikeClick = () => {
        setLiked(!liked);
    };
    
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const [tags, setTags] = useState([]);
    useEffect(() => {
        async function onLoad() {
            await octokit.request(
                `GET ${link}/languages`, {
            })
            .then(res => setTags(Object.keys(res.data)))
            .catch(err => console.log(err));
        }
        axios.get(`${image}`)
            .catch(err => {
                setImageExists(false);
            })
        onLoad();
    }, [image, link]);

    return (
        <div>
            <Card className={`${classes.root}`}>
                <CardMedia 
                        component="img"
                        src={imageExists ? image : default_img}
                        title="Project Card"
                        onClick={handleLikeClick} onDoubleClick={handleLikeClick}
                    />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        <a className={classes.h2} href={htmlURL} target="_blank" rel="noreferrer">
                        {name}
                        </a>
                    </Typography>
                    <Typography gutterBottom variant="body2" color="textSecondary" component="h2" style={{color:"#e8e6e3"}}>
                        Created on {(createdOn.split('T'))[0]}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="h2" style={{color:"#808080"}}>
                        {description === 'null' ? "" : description}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing style={{alignItems:"right"}}>
                        <Typography variant="body2" color="textSecondary" style={{color:"#d1cdc7"}} component="h2" onClick={handleExpandClick}>{!expanded ? "Show More" : "Show Less"}</Typography>
                        <IconButton className={!expanded ? classes.expand : classes.expandOpen}
                                    onClick={handleExpandClick}
                                    aria-expanded={expanded}
                                    aria-label="show more"
                        >
                            <ExpandMoreIcon style={{fill:"#fff"}} />
                        </IconButton>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    { tags.length !== 0 &&
                        <CardContent style={{textAlign:"center"}}>
                            {
                                tags.map((tag) => (
                                    <Chip key={`${tag}`} label={`${tag}`} style={{backgroundColor:'#2a2d2f', color:"white"}}/>
                                ))
                            }
                        </CardContent>
                    }
                    <CardContent>
                        <Button target="_blank" href={htmlURL} style={{color:"#d1cdc7"}} >
                            <CodeIcon />
                            <Typography variant="body2" color="textSecondary" component="h2" style={{marginLeft:"10px", color:"#d1cdc7"}}>View Source Code</Typography>
                        </Button>
                    </CardContent>
                </Collapse>
            </Card>
        </div>
    )
}

export default ProjectItem;
