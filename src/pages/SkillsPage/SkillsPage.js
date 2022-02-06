import React, { useEffect, useState } from 'react';
import Masonry from 'react-masonry-css';
import axios from 'axios';

import SkillBar  from "../../components/SkillBar/SkillBar";
import { useStyles } from './styles';

const SkillsPage = () => {
    const classes = useStyles();
    const breakpointColumnsObj = {
        default: 2,
        1100: 1,
        };
    
    const githubUsername = 'josh-truong';
    const repositoryName = 'portfolio-website'
    const [contents, setContents] = useState([]);
    useEffect(() => {
        axios.get(`https://raw.githubusercontent.com/${githubUsername}/${repositoryName}/main/src/pages/SkillsPage/skills.json`)
            .then(res => {setContents(res.data);})
            .catch(err => {
                console.log("skills.json does not exists!");
            })
    }, []);

    return (
        <div id='abilities' className={`${classes.root}`}>
            <div className={`container`}>
                <h2 className={`${classes.h2}`}>Skills</h2>

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
                                                <SkillBar key={skillName} language={`${skillName}`} percentage={contents[topicName][skillName]} />
                                            )
                                        })
                                    }
                                </Masonry>
                            </>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default SkillsPage
