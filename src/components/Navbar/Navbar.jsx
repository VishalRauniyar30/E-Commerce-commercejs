import React, { useState } from 'react';
import { AppBar, Badge, IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';

import NavbarStyles from './NavbarStyles';
import logo from '../../assets/Mohikart-Logo.png';

function Navbar({ totalItems }) {
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
    const classes = NavbarStyles();
    const location = useLocation();

    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleMobileMenuClose = () => setMobileMoreAnchorEl(null);

    const mobileMenuId = 'primary-search-account-menu-mobile';


    const RenderMobileMenu = () => (
        <Menu 
            anchorEl={mobileMoreAnchorEl} 
            anchorOrigin={{ vertical : 'top', horizontal : 'right' }} 
            id={mobileMenuId} 
            keepMounted 
            transformOrigin={{ vertical : 'top', horizontal : 'right' }} 
            open={isMobileMenuOpen} 
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton component={Link} to='/cart' aria-label='Show cart items' color='inherit'>
                    <Badge badgeContent={totalItems} color='secondary'>
                        <ShoppingCart />
                    </Badge>
                </IconButton>
                <p>Cart</p>
            </MenuItem>
        </Menu>
    );

    return (
        <>
            <AppBar position='static' color='inherit' className={classes.appBar}>
                <Toolbar>
                    <Typography component={Link} to='/' variant='h6' className={classes.title} color='inherit'>
                        <img src={logo} alt="mohikart" height='25px' className={classes.image} />
                        <div style={{ marginRight : '20px' }} >Mohikart</div>
                    </Typography>
                    <div className={classes.grow} />
                    {location.pathname === '/' && (    
                        <div className={classes.button}> 
                            <IconButton component={Link} to='/cart' aria-label='Show Cart Item' color='inherit' >
                                <Badge badgeContent={totalItems} color='warning'>
                                    <ShoppingCart />
                                </Badge>
                            </IconButton>
                        </div>
                    )}
                </Toolbar>
            </AppBar>
            <RenderMobileMenu />
        </>
    );
};

export default Navbar;