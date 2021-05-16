import {makeStyles, Theme} from "@material-ui/core/styles";

const styles = makeStyles((theme:Theme) =>({
  input:{
    marginBottom: 20
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
    marginBottom: 20,
  },

}));



export default styles;

