import { List, ListItem, ListItemText, Typography } from '@mui/material';
import React from 'react';

function Review({ checkoutToken }) {
    if (!checkoutToken?.live) {
        return <Typography variant='body1'>Loading order summary...</Typography>; // or any other loading message
    }
    return (
        <>
            <Typography variant='h6' gutterBottom>
                Order Summary
            </Typography>
            <List disablePadding>
                {checkoutToken?.live?.line_items.map((product) => (
                    <ListItem style={{ padding : '10px 0' }} key={product?.name}>
                        <ListItemText primary={product?.name} secondary={`Quantity : ${product?.quantity}`} />
                        <Typography variant='body2'>{product?.line_total?.formatted_with_symbol}</Typography>
                    </ListItem>
                ))}
                <ListItem style={{ padding : '10px 0' }}>
                    <ListItemText primary='total' />
                    <Typography variant='subtitle1' style={{ fontWeight : 700 }}>
                        {checkoutToken?.live?.subtotal?.formatted_with_symbol}
                    </Typography>
                </ListItem>
            </List>
        </>
    );
};

export default Review;