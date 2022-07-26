import { React, useState } from "react";
import { useNavigate } from "react-router-dom";

import Typography from '@material-ui/core/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import FeedbackInput from "./FeedbackInput"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const Settings = () => {
    let navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };

    return (
        <div className = "App" >
            <Typography className='ordinaryTitle' variant="h4"  style={{ fontWeight: '900', color:"#000000", marginTop: '50px'}} >
                SETTINGS
            </Typography>

           
            <Button className='settingBtn'>
                CONNECT TO CLOUD
            </Button>

            <Button className='settingBtn'>
                LANGUAGE
            </Button>
            
            <Button className='settingBtn' onClick={handleClickOpen}>
                FEEDBACK
            </Button>
        

            <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            sx={{
            maxWidth: 'xs',
            '& .MuiDialog-paper': { borderRadius: 3, width: '60%', p: '1% 1% 3% 1%'}
            }}>
                <DialogActions>
                <Button variant="text" size="small" textalign='left' sx={{ paddingRight: '80%' }} onClick={() => {
                    navigate(-1);
                }}>
                    <ArrowBackIosIcon sx={{ color: "#000000" }} />
                    <Typography className='backBtn' variant="button" fontSize='15' fontWeight='900' >
                    BACK
                    </Typography>
                </Button>
                </DialogActions>

                <DialogTitle textAlign={'center'} variant="h6" color="#000000" component="div" sx={{ fontWeight: 'bold', pt: '5%', textTransform: "uppercase" }}>
                    Feedback
                </DialogTitle>

                <FeedbackInput />

                <DialogActions >
                <Button className='okButton' sx={{borderRadius:3}} onClick={handleClose}>
                    SUBMIT
                </Button>
                </DialogActions>
            </Dialog>

            
        </div>
    )
}


export default Settings;