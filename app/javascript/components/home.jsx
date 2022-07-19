import React from "react";

import PropTypes from "prop-types";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';

export default function MaterialComponentList() {
    const styles = {
        root: {
          background: "linear-gradient(45deg, green 30%, orange 90%)",
          border: 0,
          borderRadius: 3,
          boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
          color: "white",
          height: 100,
          margin: '10% 10% 10% 10%',
          padding: "20% 20% 0% 10%",
          fontSize: 50
        }
      };
      
    return (
        <div>
            
                {/* Material App Bar */}
                <AppBar position="static">
                <Toolbar>
                    <IconButton color="inherit" aria-label="Menu">
                    <MenuIcon />
                    </IconButton>
                    <Typography variant="title" color="inherit" style={{flex: 1}}>
                    Title
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
                </AppBar>
                
                {/* Material TextField */}
                <TextField
                id="name"
                label="Type here..."
                />

                {/* Material Button */}
                <Button variant="raised" color="primary" style={{ marginLeft: 10 }}>
                Material button
                </Button>
           
        </div>
    );
}
