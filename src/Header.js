import React from "react";
import AppBar from "@material-ui/core/AppBar";
import BrushIcon from "@material-ui/icons/Brush";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/styles";
import Button from "@material-ui/core/Button";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import { IconButton } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  button: {
    color: theme.palette.primary.main,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  cIcon: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
}));

export default function Header(props) {
  const classes = useStyles();
  return (
    <AppBar position="relative">
      <Toolbar>
        <BrushIcon className={classes.icon} />
        <Typography
          variant="h5"
          color="inherit"
          className={classes.title}
          noWrap
        >
          Sanderzz Wood Art
        </Typography>
        <Button
          variant="contained"
          size="medium"
          color="inherit"
          startIcon={<ContactMailIcon />}
          className={classes.button}
          onClick={props.modalHandler}
        >
          Contact Me!
        </Button>
        <IconButton color="inherit" onClick={props.modalHandler}>
          <ContactMailIcon className={classes.cIcon} />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
