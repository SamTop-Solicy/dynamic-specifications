import React, {useState} from 'react';
import {Autocomplete, Box, Button, Input, Modal, Paper, TextField, Typography} from "@mui/material";


export const ConfigurationsForm = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const typeOptions = [
    { label: "Number", id: 1 },
    { label: "Integer", id: 2 },
    { label: "PositiveInteger", id: 3 },
    { label: "Float", id: 4 },
    { label: "PositiveFloat", id: 5 },
    { label: "Option", id: 6 },
  ];
  return (
    <>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>
          <Paper>
            <TextField id="filled-basic" label="Name of the configuration" variant="standard"/>
            <TextField id="filled-basic" label="Filled" variant="standard"/>
            <TextField id="filled-basic" label="Filled" variant="standard"/>
            <TextField id="filled-basic" label="Filled" variant="standard"/>
            <Autocomplete
              options={typeOptions}
              renderInput={(params) => <TextField {...params} label="Type"/>}
            />
          </Paper>
        </Box>
      </Modal>
    </>
  )
}
