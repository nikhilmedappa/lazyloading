import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import { Avatar, Grid, Paper, Button, TextField } from '@mui/material';
import LockOutlinedIcon  from '@mui/icons-material/LockOutlined';

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: 20,
        height: '70vh',
        width: 280,
        margin:'20px auto'
    },
}));


const Login = () => {

    const classes = useStyles();

    const [ username, setUsername] = useState("");
    const [ password, setPassword] = useState("");

    const handleUsername = (e) => {
        console.log("Username", e)
        const value = e.target.value
        setUsername(value);
    };

    const handlePassword = (e) => {
        const value = e.target.value
        setPassword(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username, password)
        if(username === "foo" && password === "bar"){
            localStorage.setItem('authToken', true)
            alert('Logged In Succesfully')
            window.location.href = "/";
        } else {
            alert("Username and Password didn't match!")
        }
    }

    return (
        <Grid>
            <Paper elevation={10} className={classes.paper}>
                <Grid align="center">
                    <Avatar sx={{ bgcolor: "#1d3557"}}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <h2>Login</h2>
                    <form onSubmit={handleSubmit}>
                        <TextField label="Username" name="username" placeholder="Enter Username" onChange={handleUsername} variant="standard"  />
                        <TextField label="Password" name="password" type="password" placeholder="Enter Password" onChange={handlePassword} variant="standard"  />
                        <Button type="submit" color="primary" className={classes.submit} fullWidth>
                            Login
                        </Button>   
                    </form>
                </Grid>
            </Paper>
        </Grid>
    )
}

export default Login;