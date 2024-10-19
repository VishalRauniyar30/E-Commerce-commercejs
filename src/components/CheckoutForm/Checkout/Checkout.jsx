import React, { useEffect, useState } from 'react';
import { Button, CircularProgress, CssBaseline, Divider, Paper, Step, StepLabel, Stepper, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

import AddressForm from '../AddressForm';
import PaymentForm from '../PaymentForm';
import CheckoutStyles from './CheckoutStyles';
import { commerce } from '../../../lib/commerce';

const steps = ['Shipping Address', 'Payment Details'];


function Checkout({ cart, order, onCaptureCheckout, error }) {
    const classes = CheckoutStyles();
    const navigate = useNavigate();

    const [checkoutToken, setCheckoutToken] = useState(null);
    const [activeStep, setActiveStep] = useState(0);
    const [shippingData, setShippingData] = useState({});
    const [isFinished, setIsFinished] = useState(false);


    const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);

    const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);


    useEffect(() => {
        if(cart.id){
            const generateToken = async () => {
                try {
                    const token = await commerce.checkout.generateToken(cart.id, { type : 'cart' });

                    setCheckoutToken(token);
                } catch (error) {                    
                    navigate('/');
                };
            }
            generateToken();
        }
    }, [cart]);

    const test = (data) => {
        setShippingData(data);

        nextStep();
    }   

    const timeout = () => {
        setTimeout(() => {
            setIsFinished(true);
        }, 3000);
    }

    let Confirmation = () => order.customer ? (
        <>
            <div>
                <Typography variant='h5'>
                    Thank You for Your Purchase, {order.customer.firstname} {order.customer.lastname}
                </Typography>
                <Divider className={classes.divider} />
                <Typography variant='subtitle2'>Order Ref : {order.customer_reference} </Typography>
            </div>
            <br />
            <Button component={Link} to='/' variant='outlined' type='button'>
                Back to Home
            </Button>
        </>
    ) : isFinished ? (
        <>
            <div>
                <Typography variant='h5'>
                    Thank You for Your Purchase
                </Typography>
                <Divider className={classes.divider} />
            </div>
            <br />
            <Button component={Link} to='/' variant='outlined' type='button'>
                Back to Home
            </Button>
        </>
    ) : ( 
        <div className={classes.spinner}>
            <CircularProgress />
        </div>
    );

    if(error) {
        Confirmation = () => (
            <>
                <Typography variant='h5'>Error : {error}</Typography>
                <br />
                <Button component={Link} to='/' variant='outlined' type='button'>
                    Back to Home
                </Button>
            </>
        );
    }

    const Form = () => activeStep === 0 
    ? <AddressForm checkoutToken={checkoutToken} nextStep={nextStep} test={test} setShippingData={setShippingData} /> 
    : <PaymentForm checkoutToken={checkoutToken} nextStep={nextStep} backStep={backStep} shippingData={shippingData} onCaptureCheckout={onCaptureCheckout} timeout={timeout} />;


    return (
        <>
            <CssBaseline />
            <main className={classes.layout}>
                <Paper className={classes.paper}> 
                    <Typography variant='h4' align='center'>
                        Checkout
                    </Typography>
                    <Stepper activeStep={activeStep} className={classes.stepper}>
                        {steps.map((step) => (
                            <Step key={step}>
                                <StepLabel>
                                    {step}
                                </StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    {activeStep === steps.length ? <Confirmation /> : checkoutToken && <Form />}
                </Paper>
            </main>
        </>
    );
};

export default Checkout;
