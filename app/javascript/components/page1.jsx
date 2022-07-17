import React from "react";

import PropTypes from "prop-types";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';

export default function page1() {
    return (
        <div>
           <Typography fontWeight='900' sx={{fontSize:'900'}}>
            DOES IT WORK?
           </Typography>
        </div>
    );
}
