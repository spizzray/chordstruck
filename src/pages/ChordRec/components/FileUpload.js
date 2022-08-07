import React from 'react';

import Button from '@mui/material/Button';
import PlaylistAddRoundedIcon from '@mui/icons-material/PlaylistAddRounded';
// Style the Button component
export default function FileUpload(props) {

  // Create a reference to the hidden file input element
  const hiddenFileInput = React.useRef(null);
  
  // Programatically click the hidden file input element
  // when the Button component is clicked
  const handleClick = event => {
    hiddenFileInput.current.click();
  };
  // Call a function (passed as a prop from the parent component)
  // to handle the user-selected file 
  const handleChange = event => {
    const fileUploaded = event.target.files[0];
    props.handleFile(fileUploaded);
  };
  return (
    <>
      <Button className = 'addBtn' onClick={handleClick}  >
        <PlaylistAddRoundedIcon color='#ffffff' />
            Add
        </Button>
      <input
        type="file"
        ref={hiddenFileInput}
        onChange={handleChange}
        style={{display: 'none'}}
      />
    </>
  )
}
