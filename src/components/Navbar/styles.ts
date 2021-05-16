import {makeStyles} from '@material-ui/core/styles'
import {COLORS} from "../../constants";

const styles = makeStyles((theme) =>({
    getApplicationsBtn:{
        marginRight: 30,
        fontSize:17,
        color: COLORS.EBONY_CLAY,
        '&:hover':{
            opacity: 0.7,
        }

    },
    navBar:{
        backgroundColor:COLORS.EBONY_CLAY,
        position: 'relative',

    },
    navBarBtn:{
        fontSize:17,
        color: COLORS.REDICAL_RED,
        '&:hover':{
            opacity: 0.7,
        }
    },
    toolBer:{
        justifyContent:'space-between',
        padding:0,
    },
    homeLink:{
        '&:hover': {
            color: COLORS.REDICAL_RED,
            cursor:'pointer',
        }
    },
    navLink:{
        textDecoration: 'none',
    },
    navLinkMain:{
        textDecoration: 'none',
        color: COLORS.MERCURY,
    },
    email:{
        marginRight: 20,
        alignItems: 'center',
        display: 'flex',
    }
}))

export default styles;
