import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Divider, IconButton, Typography } from '@mui/material';
import { AddShoppingCart } from '@mui/icons-material';

import ProductStyles from './ProductStyles';


function Product({ product, onAddToCart }) {
    const classes = ProductStyles();

    const handleAddToCart = () =>  onAddToCart(product.id, 1);
    

    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image={product.image.url} title={product.name} />
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography variant='h6' gutterBottom>
                        {product.name}
                    </Typography>
                    <Typography variant='h6'>
                        {product.price.formatted_with_symbol}
                    </Typography>
                </div>
                {/* <Divider /> */}
                <Typography dangerouslySetInnerHTML={{ __html : product.description }} variant='body2' color='textSecondary' />
            </CardContent>
            <CardActions disableSpacing className={classes.cardActions}>
                <IconButton className={classes.icon} aria-label='Add to Cart' onClick={handleAddToCart}>
                    <AddShoppingCart />
                </IconButton>
            </CardActions>
        </Card>
    );
};

export default Product;