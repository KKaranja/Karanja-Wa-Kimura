import React from 'react';
import Typed from "react-typed";
import {makeStyles} from "@material-ui/core/styles";
import {
    Typography,
    Avatar,
    Grid,
    Box
} from "@material-ui/core";
import avatar from "../images/avatar.png"
import ava from "../images/Isaac Karanja Kimura.jpg";



const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(1),
  },
  title:{
      color: "tomato"
  },
  subTitle :{
      color:"tan",
      marginBottom: "3rem"
  },
  typeContainer:{
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50% ,-50%)",
      width: "100vw",
      textAlign: "center",
      zIndex: 1
  }
}));

const Header = () => {
    const classes = useStyles();
    return (
      <Box className={classes.typeContainer}>
        <Grid container justify="center">
          <Avatar
            className={classes.avatar}
            src={ava}
            alt="isaac karanja kimura"
          />
        </Grid>
        <Typography className={classes.title} variant="h4">
          <Typed strings={["Isaac Karanja Kimura"]} typeSpeed={40} />
        </Typography>
        <br />
        <Typography className={classes.subTitle} variant="h5">
          <Typed
            strings={["Web Design", "Web Development", "SEO Services"]}
            typeSpeed={40}
            backSpeed={60}
            loop
          />
        </Typography>
      </Box>
    );
}

export default Header
