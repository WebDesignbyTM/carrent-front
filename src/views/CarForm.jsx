import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {storeToken} from "../App";
import {useEffect, useState} from "react";
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';

export default function CarForm(props) {
    const [token, setToken] = useState("");
    const handleSubmit = (event) => {
        event.preventDefault();
        const headers = {
            Authorization: "Bearer " + token
        };
        const data = new FormData(event.currentTarget);
        console.log(data.get('brand'), data.get('model'));
        axios.post("http://localhost:8080/car", {
            brand: data.get('brand'),
            model: data.get('model')
        }, { headers: headers })
            .then(() => console.log("Car registered"))
            .catch(err => console.log(err))
    };

    useEffect(() => {
        setToken(sessionStorage.getItem("accessToken"));
        if (token === "")
            console.log("This ain't it chief");
    }, []);

    return (
        <ThemeProvider theme={props.theme}>
            <Container component="main" maxWidth="sm">
                <CssBaseline />
                <Paper
                    sx={{
                        p: 5,
                        m: 8,
                    }}
                    elevation={10}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <DirectionsCarIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Create Car
                        </Typography>
                        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="brand"
                                label="Brand"
                                name="brand"
                                autoComplete="brand"
                                autoFocus
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="model"
                                label="Model"
                                type="model"
                                id="model"
                                autoComplete="model"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Create car
                            </Button>
                        </Box>
                    </Box>
                </Paper>
            </Container>
        </ThemeProvider>
    );
}