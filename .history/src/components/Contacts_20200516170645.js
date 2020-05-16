import React,{Fragment} from 'react';
import emailjs from "emailjs-com";
import {
TextField,
Typography,
Button,
Grid,
Box
}from "@material-ui/core";
import {makeStyles, withStyles} from "@material-ui/core/styles";
import SendIcon from "@material-ui/icons/Send";
import Navbar from "./Navbar";


const useStyles = makeStyles((theme) => ({
  form: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    position: "absolute",
  },
  button: {
    marginTop: "1rem",
    color: "#cfe26f",
    borderColor:"#cfe26f",
  },
}));

const InputField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "#cfe26f",
    },
    "& label": {
      color: "tan",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "tan",
      },
      "&:hover fieldset": {
        borderColor: "#cfe26f",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#cfe26f",
      },
    },
  },
})(TextField);

const Contacts = () => {
    const classes = useStyles();

    return (
      <Fragment>
         <Navbar/>
        <Box component="div" style={{background:"#233", height: "100vh"}}>
          <Grid container justify="center">
            <Box component="form" className={classes.form}>
              <Typography
               variant="h5"
               style= {{
                 color: "#cfe26f",
                   textAlign: "center",
                   textTransform: "uppercase"
               }}
              >Hire or Contact Me
              </Typography>
              <InputField
                fullWidth={true}
                label="Name"
                variant="outlined"
                InputProps={{ style: { color: "white" } }}
                margin="dense"
                size="medium"
              />
              <br />
              <InputField
                fullWidth={true}
                label="Email"
                variant="outlined"
                InputProps={{ style: { color: "white" } }}
                margin="dense"
                size="medium"
              />
              <br />
              <InputField
                fullWidth={true}
                label="Company Name"
                variant="outlined"
                InputProps={{ style: { color: "white" } }}
                margin="dense"
                size="medium"
              />{" "}
              <br />
              <Button
                className={classes.button}
                variant="outlined"
                fullWidth={true}
                endIcon={<SendIcon />}
              >
                Contact Me
              </Button>
            </Box>
          </Grid>
        </Box>
      </Fragment>
    );
}

export default Contacts
