import React from 'react'
import styles from './styles.module.css'

const Timeline = (Props) => {
    return (
        <div style={{margin:"20px 0 20px 0"}}>
            <div className={styles.date}>{Props.date}</div>
            <div className={styles.role}><b>{Props.role}</b></div>
            <div className={styles.company}>{Props.company}</div>
        </div>
    )
}

export default Timeline
