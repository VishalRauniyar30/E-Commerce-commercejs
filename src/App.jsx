import React, { useEffect, useState } from 'react';
import { Container, CssBaseline, ThemeProvider } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Cart, Checkout, Navbar, Products } from './components';
import { commerce } from './lib/commerce';
import theme from './theme';



function App() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState({});
    const [order, setOrder] = useState({});

    const [errorMessage, setErrorMessage] = useState('');

    const fetchProducts = async () => {
        const { data } = await commerce.products.list();
        setProducts(data);
    }

    const fetchCart = async () => {
        setCart(await commerce.cart.retrieve());
    }

    const handleAddToCart = async (productId, quantity) => {
        const item = await commerce.cart.add(productId, quantity);
        setCart(item.cart);
    }

    const handleUpdateCardQty = async(productId, quantity) => {
        const response = await commerce.cart.update(lineItemId, { quantity });
        setCart(response.cart);
    }

    const handleRemoveFromCart = async(productId) => {
        const response = await commerce.cart.remove(lineItemId);

        setCart(response.cart);
    }

    const handleEmptyCart = async() => {
        const response = await commerce.cart.empty();

        setCart(response.cart);
    }

    const refreshCart = async() => {
        const newCart = await commerce.cart.refresh();

        setCart(newCart);
    }

    const handleCaptureCheckout = async(checkoutTokenId, newOrder) => {
        try {
            const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);

            setOrder(incomingOrder);
            refreshCart();
        } catch (error) {
            setErrorMessage(error.data.error.message);
        }
    }

    useEffect(() => {
        fetchProducts();
        fetchCart();
    }, []);

    const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <Container maxWidth='xl'>
                    <CssBaseline />
                    <Navbar totalItems={cart?.total_items} handleDrawerToggle={handleDrawerToggle} />
                    <Routes>
                        <Route 
                            exact 
                            path='/' 
                            element={
                                <Products 
                                    products={products} 
                                    onAddToCart={handleAddToCart} 
                                    handleUpdateCardQty
                                />
                            }      
                        />
                        <Route 
                            exact 
                            path='/cart' 
                            element={
                                <Cart 
                                    cart={cart} 
                                    onUpdateCardQty={handleUpdateCardQty}
                                    onRemoveFromCart={handleRemoveFromCart}
                                    onEmptyCart={handleEmptyCart}
                                />
                            } 
                        />
                        <Route
                            exact
                            path='/checkout'
                            element={
                                <Checkout 
                                    cart={cart} 
                                    order={order} 
                                    onCaptureCheckout={handleCaptureCheckout} 
                                    error={errorMessage} 
                                />
                            }
                        />
                    </Routes>
                </Container>
            </ThemeProvider>
        </BrowserRouter>
    );
};

export default App;

