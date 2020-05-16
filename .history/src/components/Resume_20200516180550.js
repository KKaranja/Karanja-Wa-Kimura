import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Navbar from "./Navbar";
import { Typography, Box } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  mainContainer: {
    background: "#8e9e71",
  },
  timeLine: {
    position: "relative",
    padding: "1rem",
    margin: "0 auto",
    "&:before": {
      content: "''",
      position: "absolute",
      height: "100%",
      border: "1px solid #cfe26f",
      right: "40px",
      top: 0,
    },
    "&:after": {
      content: "''",
      display: "table",
      clear: " both",
    },
    [theme.breakpoints.up("md")]: {
      padding: "2rem",
      "&:before": {
        left: "calc(50% - 1px)",
        right: "auto",
      },
    },
  },
  timeLineItem: {
    padding: "1rem",
    borderBottom: "2px solid #cfe26f",
    position: "relative",
    margin: "1rem 3rem 1rem 1rem",
    clear: "both",
    "&:after": {
      content: "''",
      position: "absolute",
    },
    "&:before": {
      content: "''",
      position: "absolute",
      right: "-0.625rem",
      top: "calc(50% -5px)",
      borderStyle: "solid",
      borderColor: "#df0c81 #df0c81 transparent transparent",
      borderWidth: "0.625rem",
      transform: "rotate(45deg)",
    },
    [theme.breakpoints.up("md")]: {
      width: "44%",
      margin: "1rem",
      "&:nth-of-type(2)": {
        float: "right",
        margin: "1rem",
        borderColor: "#cfe26f",
      },
      "&:nth-of-type(2n):before": {
        right: "auto",
        left: "-0.625rem",
        borderColor: " transparent transparent #df0c81 #df0c81 ",
      },
    },
  },
  timeLineYear: {
    textAlign: "center",
    maxWidth: "9.375rem",
    margin: "0 3rem 0 auto",
    fontSize: "1.8rem",
    background: " #df0c81",
    color: "white",
    lineHeight: 1,
    padding: "0.5rem 0 1rem",
    "&:before": {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      margin: "0 auto",
      "&:nth-of-type(2n)": {
        float: "none",
        margin: "0 auto",
      },
      "&:nth-of-type(2n):before": {
        display: "none",
      },
    },
  },
  heading: {
    color: "#df0c81",
    padding: "6rem 0",
    textTransform: "uppercase",
  },
  subHeading: {
    color: "white",
    padding: 0,
    textTransform: "uppercase",
  },
}));

const Resume = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <Navbar />
      <Box component="header" className={classes.mainContainer}>
        <Typography variant="h4" align="center" className={classes.heading}>
          Working Experience
        </Typography>
        <Box component="div" className={classes.timeLine}>
          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            2017
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              align="center"
              className={classes.subHeading}
            >
              Web Design
            </Typography>
            <Typography
              variant="body1"
              align="center"
              style={{ color: "#df0c81" }}
            >
              Company Name where i worked
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              style={{ color: "#cfe26f" }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              magnam sit praesentium perspiciatis modi cupiditate quam minima
              quibusdam et consequuntur!
            </Typography>
          </Box>
          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            2017
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              align="center"
              className={classes.subHeading}
            >
              Web Design
            </Typography>
            <Typography
              variant="body1"
              align="center"
              style={{ color: "#df0c81" }}
            >
              Company Name where i worked
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              style={{ color: "#cfe26f" }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              magnam sit praesentium perspiciatis modi cupiditate quam minima
              quibusdam et consequuntur!
            </Typography>
          </Box>
          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            2017
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              align="center"
              className={classes.subHeading}
            >
              Web Design
            </Typography>
            <Typography
              variant="body1"
              align="center"
              style={{ color: "#df0c81" }}
            >
              Company Name where i worked
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              style={{ color: "#cfe26f" }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              magnam sit praesentium perspiciatis modi cupiditate quam minima
              quibusdam et consequuntur!
            </Typography>
          </Box>
        </Box>
      </Box>
    </Fragment>
  );
};

export default Resume;
