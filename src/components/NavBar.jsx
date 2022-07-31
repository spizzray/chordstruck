import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
} from "@material-ui/core";

import HomeIcon from '@mui/icons-material/Home';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import Fab from '@mui/material/Fab';

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
  let navigate = useNavigate();
  const classes = useStyles();
  
  return (
    <div>
      <Fab aria-label="add" className='homeBtn' onClick={() => {navigate('/')}}>
          <HomeIcon className="add-icon" style={{  fill: "#8f83a5" }} />
      </Fab>

      <Fab aria-label="add" className='soundBtn'>
          <VolumeUpIcon className="add-icon" style={{ fill: "#8f83a5" }} />
      </Fab>

      {/* <AppBar position="static">
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
      </AppBar> */}

    
    </div>
  );
}

export default Navbar;