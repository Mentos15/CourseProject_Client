import {makeStyles} from '@material-ui/core/styles'
import {COLORS} from "../../constants";

const styles = makeStyles((theme) =>({
    container:{
        display:'flex',
        marginBottom: 30,
    },
    image:{
        width:100,

    },
    title:{
        color:COLORS.EAST_BAY,
    },
    name:{
        color:COLORS.EAST_BAY,
        marginBottom: 10,
        '&:hover':{
            color:COLORS.REDICAL_RED,
            cursor:'pointer',
        }
    },
    time:{
        color:COLORS.EAST_BAY,
    },
    navLink:{
        textDecoration: 'none',
    }

}));
export default styles;

export const defaultStyle = {
    img:{
        width: 120,
        marginRight:15,
    },
}
