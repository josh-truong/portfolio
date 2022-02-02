import { makeStyles } from '@material-ui/core';
// import Vietnam from '../../assets/vietnam.svg';

const useStyles = makeStyles((theme) => ({
    root: {
        padding:"50px 0 50px 0",
        width:'100vw',
        height:'auto',
        backgroundColor: "#181a1b",
        // backgroundImage: `url(${Vietnam})`,
        backgroundRepeat:"no-repeat",
        backgroundPosition: '50% 100%'
    },
    h2: {
        color:'#63dedb',

        fontSize:'54px',
        fontWeight:'300',

        margin:'20px 0 20px 0',
    },
    lead: {
        color:'#9e9689',
    },
    svg: {
        position:"absolute",
        margin:"3.5% 0 0 19%",
        width:"10%",
        zIndex:"0",
        '@media (max-width:500px)': {
            width:"20%",
            margin:"5% 0 0 50%",
        }
    },
    timeline: {
        margin: "0 0 0 50px",
        color: "#d1cdc7",
        borderLeft:"6px solid",
        letterSpacing:"1px",
        zIndex:'0',
    },
    timeline_header: {
        color: "#d1cdc7",
        borderBottom:"1px solid",
        width:"60%"
    }
}));

export { useStyles };