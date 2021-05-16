import {COLORS} from "../../constants";
import {makeStyles} from "@material-ui/core/styles";

const styles = makeStyles((theme) =>({
  title:{
    marginTop: 30,
    marginBottom:30,
  },
  description:{
    marginBottom: 50,
  },
  infoContainer:{
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 30,
  },
  date:{
    marginRight: 40,
  },
  btn:{
    backgroundColor: COLORS.MERCURY,
    fontSize:17,
    color: COLORS.REDICAL_RED,
    '&:hover':{
      opacity: 0.7,
    }
  },
}))

export default styles;
