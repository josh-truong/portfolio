import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        position: "relative",
        width: "95%",
        height: "28px",
        margin: "0 0 15px 0",
        alignItems: "flex-end",

        boxSizing: "border-box",
        fontSize: "13pt",
        
        backgroundColor: "#2b2f31",
    },
    fill: {
        position: "absolute",
        backgroundColor: "#008186",
    },
    tag: {
        whiteSpace:"nowrap",
        overflow:"hidden",
        textOverflow:"ellipsis",

        textAlign: "center",
        color: "#fff",

        backgroundColor: "#039ba1",
        width: "110px",
        height: "100%",
        
    },
    percentage: {
        position: "relative",
        margin: "0 15px 0 0",
        zIndex: "1",

        textAlign: "right",
        color: "#666",
    }
}));

export { useStyles };