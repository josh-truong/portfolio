import React, { useEffect, useState } from 'react';
import { useStyles } from './styles';

import ProjectItem from '../../components/ProjectItem/ProjectItem';
import Masonry from 'react-masonry-css';



const octokit = require("@octokit/request");

const ProjectsPage = () => {
    const classes = useStyles();
    const githubUsername = 'josh-truong';

    const breakpointColumnsObj = {
        default: 3,
        1100: 2,
        800: 1,
        };

    const [repos, setRepos] = useState([]);
    useEffect(() => {
        async function onLoad() {
            await octokit.request(
                'GET /users/{username}/repos', {
                    username: githubUsername
            })
            .then(res => setRepos(res.data))
            .catch(err => console.log(err));
        }
        onLoad();
    }, []);
    
    return (
        <div id="projects" className={`${classes.root}`}>
            <div className="container">
                <h2 className={`${classes.h2}`}>Projects / Coding Adventures</h2>
                <Masonry breakpointCols={breakpointColumnsObj} className={`${classes.my_masonry_grid}`}
                        columnClassName={`${classes.my_masonry_grid_column}`}>

                    {
                        repos.map((repo) => {
                            if(!repo.fork) {
                                return (
                                    <div key={`${repo.name}`} className={`${classes.my_masonry_grid_column_div}`}>
                                        <ProjectItem  name={`${repo.name}`}
                                                    description={`${repo.description}`}
                                                    image={`https://raw.githubusercontent.com/${githubUsername}/${repo.name}/main/demo.png`}
                                                    link={`${repo.url}`}
                                                    htmlURL={`${repo.html_url}`}
                                                    createdOn={`${repo.created_at}`}
                                                />
                                    </div>
                                )
                            }
                            return [];
                        })
                    }
                </Masonry>                
            </div>
        </div>
    )
}

export default ProjectsPage
