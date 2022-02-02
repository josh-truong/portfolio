import React from 'react';
import SkillBar  from '../SkillBar/SkillBar';

import { useStyles } from './styles';
import Masonry from 'react-masonry-css';

const SkillsPage = () => {
    const classes = useStyles();
    const breakpointColumnsObj = {
        default: 2,
        1100: 1,
        };

    return (
        <div id='abilities' className={`${classes.root}`}>
            <div className={`container`}>
                <h2 className={`${classes.h2}`}>Skills</h2>
                <div className={`row ${classes.category}`}>High-Level Programming Languages</div>
                <Masonry breakpointCols={breakpointColumnsObj} className={`${classes.my_masonry_grid}`}
                        columnClassName={`${classes.my_masonry_grid_column}`}>
                    <SkillBar language='C' percentage={25} />
                    <SkillBar language='C++' percentage={70} />
                    <SkillBar language='C#' percentage={30} />
                    <SkillBar language="JavaScript" percentage={70} />
                    <SkillBar language="Octave" percentage={50} />
                    <SkillBar language='Python' percentage={70} />                    
                </Masonry>

                <div className={`row ${classes.category}`}>Web Development</div>
                <Masonry breakpointCols={breakpointColumnsObj} className={`${classes.my_masonry_grid}`}
                        columnClassName={`${classes.my_masonry_grid_column}`}>
                        <SkillBar language="CSS" percentage={90} />
                        <SkillBar language="Docker" percentage={60} />
                        <SkillBar language="HTML(5)" percentage={90} />
                        <SkillBar language="JSON" percentage={90} />
                        <SkillBar language="MySQL" percentage={60} />
                        <SkillBar language="Node js" percentage={65} />
                        <SkillBar language="PostgreSQL" percentage={60} />
                        <SkillBar language="React js" percentage={90} />
                        <SkillBar language="Rest API" percentage={85} />
                </Masonry>
                
                <div className={`row ${classes.category}`}>Frameworks</div>
                <Masonry breakpointCols={breakpointColumnsObj} className={`${classes.my_masonry_grid}`}
                        columnClassName={`${classes.my_masonry_grid_column}`}>
                        <SkillBar language="Bootstrap Framework" percentage={90} />
                        <SkillBar language="Express" percentage={70} />
                        <SkillBar language="Material-UI" percentage={90} />
                        <SkillBar language="WinForm" percentage={25} />
                </Masonry>

                <div className={`row ${classes.category}`}>Tools</div>
                <Masonry breakpointCols={breakpointColumnsObj} className={`${classes.my_masonry_grid}`}
                        columnClassName={`${classes.my_masonry_grid_column}`}>
                        <SkillBar language="Agile" percentage={60} />
                        <SkillBar language="Atlassian/Jira" percentage={80} />
                        <SkillBar language="Figma" percentage={50} />
                        <SkillBar language="Github" percentage={100} />
                        <SkillBar language="Git" percentage={100} />
                        <SkillBar language="Insomnia" percentage={80} />
                        <SkillBar language="MySQL Workbench" percentage={60} />
                        <SkillBar language="Scrum" percentage={80} />
                        <SkillBar language="VS Code" percentage={100} />
                </Masonry>

                <div className={`row ${classes.category}`}>Miscellaneous</div>
                <Masonry breakpointCols={breakpointColumnsObj} className={`${classes.my_masonry_grid}`}
                        columnClassName={`${classes.my_masonry_grid_column}`}>
                        <SkillBar language="Data Analysis" percentage={70} />
                        <SkillBar language="FFmpeg" percentage={70} />
                        <SkillBar language="Img Process" percentage={50} />
                        <SkillBar language="ML" percentage={45} />
                        <SkillBar language="OpenCV" percentage={30} />
                        <SkillBar language="OpenGl" percentage={60} />
                </Masonry>
            </div>
        </div>
    )
}

export default SkillsPage
