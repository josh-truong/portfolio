import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100vw',
        padding:"40px 0 50px 0",
        backgroundColor:'#181a1b'
    },
    h2: {
        color:'#63dedb',

        fontSize:'54px',
        fontWeight:'300',

        margin:'20px 0 20px 0',
    },
    my_masonry_grid: {
        // display: "-webkit-box", /* Not needed if autoprefixing */
        // display: "-ms-flexbox", /* Not needed if autoprefixing */
        display: "flex",
        marginLeft: "-30px", /* gutter size offset */
        width: "auto",
    },
    my_masonry_grid_column: {
        paddingLeft: "30px", /* gutter size */
        backgroundClip: "padding-box",
    },
}));

export { useStyles };