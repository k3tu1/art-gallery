import React from "react";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";

const Copyright = () => {
  return (
    <Typography variant="body2" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://k3tu1.github.io/myPortfolio/">
        Ketul Dave
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};
const useStyles = makeStyles((theme) => ({
  footer: {
    background: theme.palette.primary.main,
    padding: theme.spacing(3),
    marginBottom: "auto",
    color: theme.palette.primary.text,
  },
}));
export const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Typography variant="subtitle1" align="center" component="p"></Typography>
      <Copyright />
    </footer>
  );
};
