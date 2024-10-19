import React from 'react';
import { Grid } from '@mui/material';

import Product from '../Product/Product';
import ProductsStyles from './ProductsStyles';


function Products({ products, onAddToCart }) {
    const classes = ProductsStyles();


    if(!products?.length) {
        return (
            <>
                <h1>Loading....</h1>
                <h1>Commerce js Not Working...</h1>
            </>
        );
    };

    return (
        <main className={classes.content}>
            <Grid container justifyContent='center' spacing={4}>
                {products?.map((product) => (
                    <Grid className={classes.root} item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} onAddToCart={onAddToCart} />
                    </Grid>
                ))}
            </Grid>
        </main>
    );
};

export default Products;