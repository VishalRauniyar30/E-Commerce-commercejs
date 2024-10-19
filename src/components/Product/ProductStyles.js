import { makeStyles } from "@mui/styles";


const ProductStyles = makeStyles((theme) => ({
    root : {
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
        },
        backgroundColor : 'rgb(207, 222, 186) !important' 
    },
    media : {
        height : 0,
        paddingTop : '56.25%',
    },
    cardActions : {
        display : 'flex',
        justifyContent : 'flex-end'
    }, 
    cardContent : {
        display : 'flex',
        justifyContent : 'space-between',
        marginBottom : '20px'
    },
    icon : {
        position : 'absolute !important',
        right : 0,
        bottom : 0,
    }
}));


export default ProductStyles;