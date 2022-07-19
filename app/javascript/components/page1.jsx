// import React from "react";
// import "./App.css";
// import { StylesProvider } from "@material-ui/core/styles";

// import PropTypes from "prop-types";
// import TextField from '@material-ui/core/TextField';
// import Button from '@material-ui/core/Button';
// import AppBar from '@material-ui/core/AppBar';
// import IconButton from '@material-ui/core/IconButton';
// import Toolbar from '@material-ui/core/Toolbar';
// import MenuIcon from '@material-ui/icons/Menu';
// import Typography from '@material-ui/core/Typography';

// const page1 = () => {
//   return (
//     <div >
//         <Typography  >
//             DOES IT WORK?
//         </Typography>
        
//         {/* <Button>Hook</Button> */}
//     </div>
      
//   );
// }
// export default page1;

import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";


const styles = {
  root: {
    background: "linear-gradient(45deg, green 30%, orange 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 100,
    margin: '2% 2% 2% 2%',
    padding: "10% 10% 0% 10%",
    fontSize: 50
  }
};

function App({ classes }) {
  return (
  <div>
    
    <Button className={classes.root}>
    hook
    </Button>;
  </div>
  )
}
export default withStyles(styles)(App);