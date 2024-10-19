import { makeStyles } from "@mui/styles";

const CartItemStyles = makeStyles(() => ({
    card : {
        maxWidth : '100%',
        display: 'flex',
        flexDirection : 'column',
        borderRadius : '10px !important',
        height : '100%',
        position : 'relative',
        transition : "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out !important",
        '&:hover' : {
            transform : 'translateY(-10px)',
            boxShadow : '0 6px 16px rgba(0, 0, 0, 0.2)'
        }
    },
    media: {
        height: 260,
    },
    cardContent: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    cartActions: {
        justifyContent: 'space-between',
    },
    buttons: {
        display: 'flex',
        alignItems: 'center',
    },
    remove : {
        backgroundColor : 'red !important',
        margin : '0 10px !important'
    }
}));

export default CartItemStyles;