import React from "react";
import Button from "@mui/material/Button";
import { Stack, Typography } from "@mui/material";
import AppleIcon from '@mui/icons-material/Apple';

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
            <Stack my={5} direction="row" spacing={2}>




                <Button variant="contained" color="primary"> Primary </Button>
                <Button variant="contained" color="secondary"> Primary </Button>
                <Button variant="contained" color="error"> Primary </Button>
                <Button variant="contained" color="warning"> Primary </Button>
                <Button variant="contained" color="info"> Primary </Button>
                <Button variant="contained" color="success"> Primary </Button>

            </Stack>

            <Stack my={5} direction="row" spacing={2}>

                <Button variant="contained" color="success" size="small"> Small </Button>
                <Button variant="contained" color="success" size="medium"> Medium </Button>
                <Button variant="contained" color="success" size="large"> Large </Button>

            </Stack>

            <Stack my={5} direction="row" spacing={2}>

                <Button variant="contained" color="success"  startIcon={<AppleIcon/>}> Start Icon </Button>
                <Button variant="contained" color="success"  endIcon={<AppleIcon/>}> End Icon </Button>
               

            </Stack>
        </div>
    );
}
