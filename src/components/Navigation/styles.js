import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
        position:'fixed',
        top:"60px",
        right:"1%",
        zIndex:"999",
        '@media (max-width:650px)': {
            display:'none'
        }
    },
    a: {
        verticalAlign:"middle",
    },
    icon: {
        "&:hover" : {
            transform:"scale(1.5)",
        },
        width:"50px",
        height:"auto",
        margin:"10px 0 10px 0",
        fill: "#fff",
    }
}));

export { useStyles };