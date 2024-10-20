import React from 'react';
import Review from './Review';
import { Button, Divider, Typography } from '@mui/material';
import { CardElement, Elements, ElementsConsumer } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

function PaymentForm({ shippingData, checkoutToken, nextStep, backStep, onCaptureCheckout, timeout }) {

    const handleSubmit = async (event, elements, stripe) => {
        event.preventDefault();

        if(!stripe || !elements) return;

        const cardElement = elements.getElement(CardElement);

        const { error, paymentMethod } = await stripe.createPaymentMethod({ type : 'card', card : cardElement });

        if(error) {
            console.log(error);
        } else {
            const orderData = {
                line_items : checkoutToken.live.line_items,
                customer : {
                    firstname : shippingData.firstName,
                    lastname : shippingData.lastName,
                    email : shippingData.email,
                },
                shipping : {
                    name : 'International',
                    street : shippingData.address1,
                    town_city : shippingData.city,
                    county_state : shippingData.shippingSubdivision,
                    postal_zip_code : shippingData.zip,
                    country : shippingData.shippingCountry,
                },
                fullfillment : {
                    shipping_method : shippingData.shippingOption,
                },
                payment : {
                    gateway : 'stripe',
                    stripe : {
                        payment_method_id : paymentMethod.id,
                    }
                }
            }
            onCaptureCheckout(checkoutToken.id, orderData);

            timeout();
            nextStep();
        }
    }

    return (
        <>
            <Review checkoutToken={checkoutToken} />
            <Divider />
            <Typography variant='h6' gutterBottom style={{ margin : '20px 0' }}>
                Payment Methods
            </Typography>
            <Elements stripe={stripePromise}>
                <ElementsConsumer>
                    {({ elements, stripe }) => (
                        <form onSubmit={(e) => handleSubmit(e, elements, stripe)}>
                            <CardElement />
                            <br /> <br />
                            <div style={{ display : 'flex', justifyContent : 'space-between' }}>
                                <Button variant='outlined' onClick={backStep}>Back</Button>
                                <Button type='submit' variant='contained' disabled={!stripe} color='primary'>
                                    Pay { checkoutToken?.live?.subtotal?.formatted_with_symbol }
                                </Button>
                            </div>  
                        </form>
                    )}
                </ElementsConsumer>
            </Elements>
        </>
    );
};

export default PaymentForm;