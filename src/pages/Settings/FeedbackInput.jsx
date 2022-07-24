import { React, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

// import mui
import FormLabel from '@mui/material/FormLabel';
import { Box, Container, Grid, Button, TextField, FormControl, Select, MenuItem } from '@mui/material';

export default function FeedbackInput() {
    return (
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '450px', p:'1% 1% 1% 7%' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" variant="outlined" />
        
      </Box>
    );
  }