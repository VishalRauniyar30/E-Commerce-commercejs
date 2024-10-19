import React from 'react';
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';

import CartItemStyles from './CartItemStyles';

function CartItem({ item, onUpdateCardQty, onRemoveFromCart }) {
    const classes = CartItemStyles();

    const handleUpdateCardQty = (lineItemId, newQuantity) => onUpdateCardQty(lineItemId, newQuantity);

    const handleRemoveFromCart = (lineItemId) => onRemoveFromCart(lineItemId);

    return (
        <Card className={classes.card}>
            <CardMedia image={item.image.url} alt={item.name} className={classes.media} />
            <CardContent className={classes.cardContent}>
                <Typography variant='h5'>
                    {item.name}
                </Typography>
                <Typography variant='h6'>
                    {item.line_total.formatted_with_symbol}
                </Typography>
            </CardContent>
            <CardActions className={classes.cartActions}>
                <div className={classes.buttons}>
                    <Button type='button' size='small' onClick={() => handleUpdateCardQty(item.id, item.quantity - 1)}>-</Button>
                    <Typography>
                        &nbsp;{item.quantity}&nbsp;
                    </Typography>
                    <Button type='button' size='small' onClick={() => handleUpdateCardQty(item.id, item.quantity + 1)}>+</Button>
                </div>
                <Button variant='contained' type='button' color='secondary' className={classes.remove} onClick={() => handleRemoveFromCart(item.id)}>Remove</Button>
            </CardActions>
        </Card>
    );
};

export default CartItem;