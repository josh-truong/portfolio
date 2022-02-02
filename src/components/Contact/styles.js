import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
        position:'fixed',
        bottom:"35px",
        right:"1%",
        zIndex:"999",
        '@media (max-width:650px)': {
            display:'none'
        },
        '@media (max-height:650px)': {
            display:'none'
        },
    },
    icon: {
        "&:hover" : {
            transform:"scale(1.5)",
        },
        width:"50px",
        height:"auto",
        margin:"10px 0 10px 0",
        fill: "#fff",
    },
    header: {
        height:"140px",
        margin:"0 50% 10% 30%",
        color:"rgba(209, 205, 199, 0.29);",
        fontSize:"20px",
        fontWeight:"500",
        borderLeft:"3px solid rgba(128, 119, 105, 0.29)",
        writingMode:"vertical-rl",
        textOrientation:"upright",
        '@media (max-height:800px)': {
            display:'none'
        },
    },
}));

export { useStyles };