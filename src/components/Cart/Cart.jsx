import React from 'react';
import { Button, CircularProgress, Container, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import CartStyles from './CartStyles';
import CartItem from '../CartItem/CartItem';

function Cart({ cart, onEmptyCart, onRemoveFromCart, onUpdateCardQty }) {

    const classes = CartStyles();

    const handleEmptyCart = () => onEmptyCart();
    

    const EmptyCart = () => (
        <Typography variant='subtitle1'>
            You Have No items in Your Shopping Card, 
            <Link to={'/'} className={classes.link}>
                start Adding Some!!
            </Link>
        </Typography>
    );

    if (!cart?.line_items) {
        return <CircularProgress size='7em' style={{ color: 'black', margin: '300px 750px' }} />;
        // return 'Loading';
    };

    const FilledCart = () => (
        <>
            <Grid container spacing={3}>
                {cart.line_items.map((lineitem) => (
                    <Grid item xs={12} sm={4} key={lineitem.id}>
                        <CartItem item={lineitem} onUpdateCardQty={onUpdateCardQty} onRemoveFromCart={onRemoveFromCart} />
                    </Grid>
                ))}
            </Grid>
            <div className={classes.cardDetails}>
                <Typography variant='h4'>
                    Subtotal: {cart.subtotal.formatted_with_symbol}
                </Typography>
                <div>
                    <Button className={classes.emptyButton} size='large' type='button' variant='contained' color='secondary' onClick={handleEmptyCart}>
                        Empty Cart
                    </Button>
                    <Button component={Link} to='/checkout' className={classes.checkoutButton} size='large' type='button' variant='contained' color='primary'>
                        Checkout
                    </Button>
                </div>
            </div>
        </>
    );

    return (
        <Container>
            <Typography className={classes.title} variant='h3' gutterBottom>
                Your Shopping Cart
            </Typography>
            {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
        </Container>
    );
};

export default Cart;