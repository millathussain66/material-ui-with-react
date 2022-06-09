import { Typography } from "@mui/material";

import React from "react";

function Typographye() {
  return (
    <div>
      <Typography variant="div" align="center" color="initial">
        <Typography variant="h1">Hello World</Typography>
        <Typography variant="h2">Hello World</Typography>
        <Typography variant="h3">Hello World</Typography>
        <Typography variant="h4" component='h1' gutterBottom >Hello World H4</Typography>
        <Typography variant="h5">Hello World</Typography>
        <Typography variant="h6">Hello World</Typography>
        <Typography variant="subtitle1">Hello World</Typography>
        <Typography variant="subtitle2">Hello World</Typography>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis numquam
          corporis minus culpa! Suscipit ea itaque enim animi distinctio
          repudiandae?
        </Typography>
        <Typography variant="body2">Hello World</Typography>
        <Typography variant="bold">Hi I am Good Buy</Typography>
        <Typography variant="inherit" align="center">
          Just Wow Hi's
        </Typography>
      </Typography>
    </div>
  );
}
export default Typographye;
