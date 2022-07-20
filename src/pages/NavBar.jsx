import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
} from "@material-ui/core";

import HomeIcon from '@mui/icons-material/Home';

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(10),
    display: "flex",
  },
 logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(20),
    "&:hover": {
      color: "white",
      borderBottom: "1px solid white",
    },
  },
}));

function Navbar() {
  const classes = useStyles();
  
  return (
    <div>
      <AppBar position="static">
        <CssBaseline />
        <Toolbar>
          <Typography variant="h4" className={classes.logo}>
            Navbar
          </Typography>
            <div className={classes.navlinks}>

              <Link to="/" className={classes.link}>
                Home
              </Link>
              <HomeIcon />
              <Link to="/ChordRec" className={classes.link}>
                Learn A Song!
              </Link>
              
            </div>
        </Toolbar>
      </AppBar>

    
    </div>
  );
}

export default Navbar;