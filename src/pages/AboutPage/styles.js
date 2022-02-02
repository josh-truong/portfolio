import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        width:'100vw'
    },
    intro: {
        color:'#9e9689',
        textAlign:'center',
        fontSize:'20pt',
        fontWeight:'900',
    },
    svg: {
        display:"block",
        margin:"auto",

        width:'70%',
        maxWidth:"300px",

        height:'auto',
    },
    lead: {
        textAlign:'center',
        fontSize:'12pt',
        color: '#d1cdc7',
        fontFamily: "Roboto, Helvetica, Arial, sans-serif",
        fontWeight: 400,
        lineHeight: 1.43,
        letterSpacing: "0.01071em"
    }
}));

export { useStyles };