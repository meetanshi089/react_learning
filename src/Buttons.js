import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import SimplePopper from "./SimplePopper";

const Buttons = () => {
  return (
    /*<Stack spacing={2} direction="row">
      <Button variant="text" size="small" color="primary">
        Button1
      </Button>
      <Button variant="contained">Button2</Button>
      <Button variant="outlined">Button3</Button>
      <Button href="#" target="_blank" variant="contained">
        Link
      </Button>
      <Button
        variant="outlined"
        size="large"
        color="secondary"
        endIcon
        onClick={() => alert("Button clicked!")}
      >
        Click
      </Button>
    </Stack>*/
    <div>
      {/*<SendIcon />*/}
      <ButtonGroup variant="outlined" aria-label="Basic button group">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      <ButtonGroup variant="text" aria-label="Basic button group">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      <SimplePopper />
    </div>
  );
};
export default Buttons;
