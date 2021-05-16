import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {fetchConferencesById, setNullApplicationStatus} from "../../redux/actions";
import {getAllInfoConference} from "../../redux/selectors";
import {Button, Container, Typography} from "@material-ui/core";
import styles from "./styles";

import {NavLink} from "react-router-dom";

const AllConferenceInfo = (props:any) => {
  const dispatch = useDispatch();
  const id = props.match.params.id;
  const classes = styles()
  useEffect(()=>{
    dispatch(fetchConferencesById(id));
  },[])

  const conference = useSelector(getAllInfoConference)

  const setNullAppStatus = () =>{
    dispatch(setNullApplicationStatus());
  }
  return(

    <Container>
      <Typography className={classes.title} variant={'h3'}>{conference.name}</Typography>
      <Typography className={classes.description} variant={'h5'}>{conference.description}</Typography>
      <div className={classes.infoContainer}>
        <Typography className={classes.date} variant={'h6'}>Дата проведения: {conference.date.substring(0,10)}</Typography>
        <Typography variant={'h6'}>Место проведения проведения: {conference.location}</Typography>
      </div>

      <div>
        <NavLink to={`/applicationForm/${id}`} style={{textDecoration: 'none'}}>
          <Button variant="contained" onClick={setNullAppStatus}>Записаться</Button>
        </NavLink>
      </div>
    </Container>
      )
};

export default AllConferenceInfo;