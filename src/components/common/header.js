import React, { useState } from 'react';
import { AppBar, Box, Toolbar } from '@mui/material/';
import { makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
 
const authToken = localStorage.getItem('authToken');

const useStyles = makeStyles((theme) => ({
    link: {
        textDecoration: 'none',
        color: '#f1faee',
        fontSize: '16px',
        fontWeight: 600,
        marginLeft: theme.spacing(16),
        '&:hover': {
            color: '#a8dadc',
        },
    },
}));

const Header = (props) => {
    const [authorized, setAuthorized] = useState(authToken ? true : false)
    const classes = useStyles()

    const logout = () => {
        localStorage.removeItem('authToken')
        setAuthorized(false);
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" style={{ background: "#1d3557"}}>
                <Toolbar variant="regular">
                    <Link to="/" className={classes.link}>
                        Home
                    </Link>
                    <Link to="/login" className={classes.link} onClick={authorized ? logout : null}>
                        {authorized ? 'Logout' : 'Login'}
                    </Link>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Header;
