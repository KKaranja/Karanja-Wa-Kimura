import { makeStyles } from "@material-ui/core";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import Facebook from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Tooltip from "@material-ui/core/Tooltip";

import React from "react";
// import InstagramIcon from "@material-ui/icons/Instagram";

const useStyles = makeStyles({
    root: {
        "&.MuiBottomNavigationAction-root": {
            minWidth: "",
            MaxWidth: "0px",
        },
        "& .MuiSvgIcon-root": {
            fill: "#cfe26f",
            "&:hover": {
                fill: "#df0c81",
                fontSize: "1.8rem",
            },
        },
    },
});

const Footer = () => {
    const classes = useStyles();
    return ( <
        BottomNavigation width = "auto"
        style = {
            { background: "#173058" }
        } >
        <
        Tooltip title = "Follow"
        placement = "top" >
        <
        BottomNavigationAction className = { classes.root }
        style = {
            { padding: 0 }
        }
        href = "https://www.facebook.com/ikaranja2"
        target = "_blank"
        icon = { < Facebook / > }
        /> < /
        Tooltip > <
        Tooltip title = "Connect"
        placement = "top" >
        <
        BottomNavigationAction className = { classes.root }
        style = {
            { padding: 0 }
        }
        href = "https://www.linkedin.com/in/isaac-kimura-a079a4129/"
        target = "_blank"
        icon = { < LinkedInIcon / > }
        /> < /
        Tooltip > <
        Tooltip title = "Connect"
        placement = "top" >
        <
        BottomNavigationAction className = { classes.root }
        style = {
            { padding: 0 }
        }
        href = "https://github.com/KKaranja"
        target = "_blank"
        icon = { < GitHubIcon / > }
        /> < /
        Tooltip > <
        /BottomNavigation>
    );
};

export default Footer;