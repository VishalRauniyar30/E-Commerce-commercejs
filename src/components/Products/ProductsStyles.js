import { makeStyles } from "@mui/styles";

const ProductsStyles = makeStyles((theme) => ({
    content : {
        flexGrow : 1,
        // backgroundColor : theme.palette.background.default,
        backgroundColor : 'rgb(107, 227, 145)',
        padding : theme.spacing(3),
    }, 
    root : {
        flexGrow : 1
    }
}));

export default ProductsStyles;