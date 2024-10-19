import { makeStyles } from "@mui/styles";
import { alpha } from "@mui/material/styles";

const drawerWidth = 0;

const NavbarStyles = makeStyles((theme) => ({
    appBar : {
        boxShadow : 'none',
        borderBottom : '1px solid rgba(0, 0, 0, 0.12)',
        backgroundColor : 'rgb(170, 240, 177) !important',
        [theme.breakpoints.up('sm')] : {
            width : `calc(100% - ${drawerWidth}px)`,
            marginLeft : drawerWidth, 
        },
        display : 'flex !important',
        flexDirection : 'row !important',
        justifyContent : 'space-between !important',
        alignItems : 'center !important',
        width : '100% !important',
        margin : '30px 0',
        borderRadius : 15,
        padding : '10px 20px'
    },
    title : {
        flexGrow : 1,
        alignItems : 'center',
        display : 'flex',
        textDecoration : 'none',
        fontSize : '2em !important',
        fontWeight : '600 !important'
    },
    image : {
        marginRight : '10px'
    },
    menuButton : {
        marginRight : theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    grow: {
        flexGrow: 1,
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
        width: '20ch',
        },
    },
    button : {
        marginLeft : '1175px'
    }
}));

export default NavbarStyles;