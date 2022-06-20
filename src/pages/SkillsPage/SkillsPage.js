import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Chip } from '@material-ui/core';

import { useStyles } from './styles';

const SkillsPage = () => {
    const classes = useStyles();
    
    const githubUsername = 'josh-truong';
    const repositoryName = 'portfolio-website'
    const [contents, setContents] = useState([]);
    useEffect(() => {
        axios.get(`https://raw.githubusercontent.com/${githubUsername}/${repositoryName}/main/src/assets/jsons/skills.json`)
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
                                <div>
                                    {
                                        Object.keys(contents[topicName]).map((skillName, skillIndex) => {
                                            var skill = skillName;
                                            if (contents[topicName][skillName] !== "") {
                                                skill += ` (${contents[topicName][skillName]}%)`
                                            }
                                            return (
                                                <Chip 
                                                    key={skillName}
                                                    label={`${skill}`} 
                                                    style={{
                                                        backgroundColor:'#63dedb',
                                                        color:"white",
                                                        fontSize:'15px',
                                                        fontFamily:'Arial, Helvetica, sans-serif',
                                                        margin:'0 10px 10px 0'
                                                    }}
                                                />
                                            )
                                        })
                                    }
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default SkillsPage




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

//                 {
//                     Object.keys(contents).map((topicName, topicKeyIndex) => {
//                         return (
//                             <>
//                                 <div key={topicName} className={`row ${classes.category}`}>{topicName}</div>
//                                 <Masonry breakpointCols={breakpointColumnsObj} className={`${classes.my_masonry_grid}`}
//                                     columnClassName={`${classes.my_masonry_grid_column}`}>
//                                     {
//                                         Object.keys(contents[topicName]).map((skillName, skillIndex) => {
//                                             return (
//                                                 <SkillBar key={skillName} language={`${skillName}`} percentage={contents[topicName][skillName]} />
//                                             )
//                                         })
//                                     }
//                                 </Masonry>
//                             </>
//                         )
//                     })
//                 }
//             </div>
//         </div>
//     )
// }

// export default SkillsPage