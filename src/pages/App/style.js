import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    menu: {
        position:'fixed',
        top:"5px",
        right:"0",
        zIndex:"999",
        '@media (min-width:650px)': {
            display:'none'
        }
    },
    hide: {
        display:"none",
    },
    show: {
        display:"inline",
    },
    icon: {
        width:"35px",
        height:"35px",
        margin:"5px 0 5px 0",
        fill: "#fff",
    },
    a: {
        verticalAlign:"middle",
    },
    header: {
        height:"130px",
        color:"rgba(209, 205, 199, 0.29);",
        fontSize:"18px",
        fontWeight:"500",
        borderLeft:"3px solid rgba(128, 119, 105, 0.29)",
        writingMode:"vertical-rl",
        textOrientation:"upright", 
    },
}));

export { useStyles };