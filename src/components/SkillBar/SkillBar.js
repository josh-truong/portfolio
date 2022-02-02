import React from 'react';
import { useStyles } from './style';


const SkillBar = (Props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.fill} style={{width: `${(Props.percentage > 90) ? 90 : Props.percentage}%`}}>
                <div className={classes.tag} style={{}}>{Props.language}</div>
            </div>
            <div className={classes.percentage}>{(Props.percentage > 90) ? 90 : Props.percentage}%</div>
        </div>
    )
}

export default SkillBar