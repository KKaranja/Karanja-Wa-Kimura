import React from "react";
import {makeStyles} from "@material-ui/core";
import { BottomNavigation, BottomNavigationAction} from "@material-ui/core";
import Facebook from "@material-ui/icons/Facebook";
import Twitter from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
// import InstagramIcon from "@material-ui/icons/Instagram";


const useStyles = makeStyles({
  root: {
    "& .MuiBottomNavigationAction-root": {
      minWidth: 0,
      MaxWidth: "250px",
    },
    "& .MuiSvgIcon-root":{
        fill: "tan",
        "&:hover":{
            fill: "tomato",
            fontSize: "1.8rem"
        }
    }
  },
});

const Footer = () => {
    const classes = useStyles();
    return (
        <BottomNavigation width="auto" style={{background: "#222"}}>
            <BottomNavigationAction
            className={classes.root}
            style={{padding: 0}}
            icon={<Facebook/>}
            />
            <BottomNavigationAction
            className={classes.root}
            style={{padding: 0}}
            icon={<Twitter/>}
            />
           {/*  <BottomNavigationAction
            className={classes.root}
            style={{padding: 0}}
            icon={<InstagramIcon/>}
            /> */}
            <BottomNavigationAction
            className={classes.root}
            style={{padding: 0}}
            icon={<GitHubIcon/>}
            />
            
        </BottomNavigation>
    )
}

export default Footer
