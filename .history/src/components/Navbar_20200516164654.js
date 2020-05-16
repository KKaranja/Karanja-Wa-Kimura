import React, { Fragment, useState } from 'react';
import {makeStyles} from "@material-ui/core/styles";
import MobilRightMenuSkider from "@material-ui/core/Drawer";
import {Link } from "react-router-dom";
import Footer from "./Footer";
import {
AppBar,
Toolbar,
ListItem,
IconButton,
ListItemText,
Avatar,
Divider,
List,
Typography,
Box, 
ListItemIcon
} from "@material-ui/core";
import {
    ArrowBack,
    AssignmentInd,
    Home,
    Apps,
    ContactMail
} from "@material-ui/icons";
import avatar from "../images/avatar.png";

//  css
const useStyles = makeStyles((theme) => ({
  menuSliderContainer: {
    width: 250,
    background: "",
    height: "100%",
  },
  avatar: {
    display: "block",
    margin: "0.5rem auto",
    width: theme.spacing(13),
    height: theme.spacing(13),
  },
  listItem:{
    color: "#a2c5e5"
  }
}));


const menuItems = [
    {
        listIcon :<Home/>,
        listText: "home",
        listPath: "/"
    },
    {
        listIcon :<AssignmentInd/>,
        listText: "Resume",
        listPath: "/resume"
    },
    {
        listIcon :<Apps/>,
        listText: "Portfolio",
        listPath: "/portfolio"
    },
    {
        listIcon :<ContactMail/>,
        listText: "Contacts",
        listPath: "/contacts"
    }
]

const Navbar = () => {
    const [state, setState] = useState({
        right: false
    })

    const toggleSlider = (slider, open) => () =>{
        setState({...state, [slider]: open})
    }
    const classes = useStyles();

    const sideList = (slider) => (
      <Box
        className={classes.menuSliderContainer}
        onClick={toggleSlider(slider, false)}
        component="div"
      >
        <Avatar
          className={classes.avatar}
          src={avatar}
          alt="isaac karanja kimura"
        />
        <Divider />
        <List>
          {menuItems.map((lsItem, key) => (
            <ListItem button key={key} component={Link} to={lsItem.listPath}>
              <ListItemIcon className={classes.listItem}>
                {lsItem.listIcon}
              </ListItemIcon>
              <ListItemText
                className={classes.listItem}
                primary={lsItem.listText}
              />
            </ListItem>
          ))}
        </List>
      </Box>
    );
    return (
      <Fragment>
        <Box component="nav">
          <AppBar position="fixed" style={{ background: "#173058" }}>
            <Toolbar>
              <IconButton onClick={toggleSlider("right", true)}>
                <ArrowBack style={{ color: "tomato" }} />
              </IconButton>
              <Typography variant="h5" style={{ color: "tan" }}>
                Portfolio
              </Typography>
              <MobilRightMenuSkider
              anchor="right"
              open={state.right}
              onClose={toggleSlider("right", false)}
              >
                {sideList("right")}
                <Footer/>
              </MobilRightMenuSkider>
            </Toolbar>
          </AppBar>
        </Box>
      </Fragment>
    );
}

export default Navbar
