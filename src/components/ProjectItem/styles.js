import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '300',
        margin:'20px 0 0 0',
        boxShadow:"0 3px 3px 0 #808080",
        backgroundColor: '#232627',
    },
    h2: {
        '&:hover': {
            color:"#04c2c9",
        },
        color:'#63dedb',
        fontWeight:'400',
    },
    media: {
        height:'0',
        padding: '56.25% 0 0 0',
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
        marginLeft: 'auto',
    },
}));

export { useStyles };