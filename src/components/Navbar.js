import React, { Fragment, useState } from 'react';
import { Link } from "react-router-dom";
import {makeStyles} from "@material-ui/core/styles";
import MobilRightMenuSlider from "@material-ui/core/Drawer";

import {
 AppBar,
 Toolbar,
 List,
 ListItem,
 Box,
 IconButton,
 ListItemText,
 Avatar,
 Divider,
 Typography,
 ListItemIcon,
 Slider,
} from "@material-ui/core";
import{
    ArrowBack,
    AssignmentInd,
    Home,
    Apps,
    ContactMail
} from "@material-ui/icons";

import avatar from "../images/avatar.png";

//  CSS Styles
const useStyles = makeStyles( theme =>({
  menuSliderContainer: {
    width: 250,
    background: "#511",
    height:"100%"
  },
  avatar:{
    display: "block",
    margin:"0.5rem auto",
    width: theme.spacing(13),
    height: theme.spacing(13), 
  },
  listItems:{
    color: "tan"
  }
}));

const menuItems = [
  {
    listIcon: <Home />,
    listText: "Home",
    listPath: "/",
  },
  {
    listIcon: <AssignmentInd />,
    listText: "Resume",
    listPath: "/resume",
  },
  {
    listIcon: <Apps />,
    listText: "Portfolio",
    listPath: "/portfolio",
  },
  {
    listIcon: <ContactMail />,
    listText: "Contacts",
  },
];


const Navbar = () => {

  const [state, setState] = useState({
    right: false
  })

  const toggleSlider = (Slider, open) => () => {
    setState({ ...state, [Slider]: open });
  };

  const classes = useStyles()
  

  const slideList = (Slider) => (
    <Box
      className={classes.menuSliderContainer}
      component="div"
      onClick={toggleSlider(Slider, false)}
    >
      <Avatar
        className={classes.avatar}
        src={avatar}
        alt="isaac karanja kimura - SEO Specialist and Lead software Engineer at Denstu Aegis"
      />
      <Divider />
      <List>
        {menuItems.map((LsItem, key) => (
          <ListItem button key={key} component={Link} to={LsItem.listPath}>
            <ListItemIcon className={classes.listItems}>
              {LsItem.listIcon}
            </ListItemIcon>
            <ListItemText
              className={classes.listItems}
              primary={LsItem.listText}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
    return (
      <Fragment>
      
      <Box component="nav">
        <AppBar position="static" style={{background: "#222"}}>
          <Toolbar>
            <IconButton onClick={toggleSlider("right", true)}>
              <ArrowBack style={{color: "tomato"}}/> 
            </IconButton>
            <Typography variant="h5" style={{color: "tan"}}>
              Portfolio
            </Typography>
            <MobilRightMenuSlider 
              anchor="right"
              open={state.right}
              onClose={toggleSlider("right",false)}
              >
              {slideList("right")}
            </MobilRightMenuSlider>
          </Toolbar>
        </AppBar>
      </Box>
      </Fragment>
    );
}

export default Navbar
