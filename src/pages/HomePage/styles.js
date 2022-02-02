import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        position:"relative",
        width: '100vw',
        height: '100vh',
        padding:"0 0 50px 0",
        background: 'linear-gradient(#04c2c9, #004e52)'
    },
    tagbox: {
        color:"white",
        backgroundColor:"rgba(75, 82, 85, 0.7)",

        position:"relative",
        top:"60%",
        left:"5%",
        zIndex:"1",
        
        width:"45vw",
        textAlign:"center",
        padding:"30px 6px 30px 6px",
        wordWrap:"break-word",

        '@media (max-width:650px)': {
            left:"0",
            zIndex:"1",
            width:"100%",
        }
    },
    text: {
        fontFamily:`"Poppins", sans-serif`,
        letterSpacing:"10px",
        lineHeight:"150%"
    }
}));

export { useStyles };