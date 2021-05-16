import {COLORS} from "../../constants";
import {makeStyles} from "@material-ui/core/styles";

const styles = makeStyles((theme) =>({
  btn:{
    fontSize:17,
  },
  selection:{
    width: '90%'
  },
  container:{
    display: 'flex',
    flexDirection:'row',
    justifyContent: 'space-between'
  }
}))

export default styles;
