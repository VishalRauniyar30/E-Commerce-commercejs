import { makeStyles } from "@mui/styles";


const CartStyles = makeStyles((theme) => ({
    title: {
        marginTop: '5% !important',
        fontFamily : 'sans-serif !important'
    },
    emptyButton: {
        minWidth: '150px',
        [theme.breakpoints.down('xs')]: {
        marginBottom: '5px',
        },
        [theme.breakpoints.up('xs')]: {
        marginRight: '20px',
        },
        backgroundColor : 'tomato !important'
    },
    checkoutButton: {
        minWidth: '150px',
        marginLeft : '10px !important',
        backgroundColor : 'aquamarine !important'
    },
    link: {
        textDecoration: 'none',
    },
    cardDetails: {
        display: 'flex',
        marginTop: '10%',
        width: '100%',
        justifyContent: 'space-between',
        marginBottom  : '50px'
    },
}));


export default CartStyles;