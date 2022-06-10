import React from "react";
import Button from "@mui/material/Button";
import { Stack } from "@mui/material";

export default function Button_Here() {
  return (
    <div>
      <Stack
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        spacing={2}
      >
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>
      <Stack>

      </Stack>
    </div>
  );
}
