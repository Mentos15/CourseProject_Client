import React, {useEffect} from "react";
import {Button, Container, Typography} from "@material-ui/core";
import styles from "./styles";
import {useDispatch, useSelector} from "react-redux";
import {
  fetchConfirmedApplications, fetchDeleteConfirmedApplication
} from "../../redux/actions";
import {getAllApplications} from "../../redux/selectors";

import {NavLink} from "react-router-dom";

const ConfirmedApplications = () =>{
  const dispatch = useDispatch();
  const classes = styles();

  useEffect(() =>{

    dispatch(fetchConfirmedApplications());
  },[])

  const applications = useSelector(getAllApplications);


  const deleteApplication = (id:number) =>{
    dispatch(fetchDeleteConfirmedApplication(id))
  }


  const renderApplications = applications?.map((application: any) =>{
    return (
      <div key={application.id} className={classes.appContainer}>
        <div style={{display: 'flex', flexDirection:'column', flex: '0.5 0.5 20%'}}>
          <Typography>{application.name}</Typography>
          <Typography>{application.last_name}</Typography>
          <Typography>{application.phone}</Typography>
        </div>
        <NavLink style={{textDecoration: 'none'}} to={`/allInfo/${application.ConferenceId}`}>
          <Button variant="contained" >Конференция</Button>
        </NavLink>
        <div>
          <Button variant="contained" onClick={() => deleteApplication(application.id)} color='secondary'>Удалить</Button>
        </div>
      </div>
    )
  })

  return (
    <Container className={classes.container}>
      {renderApplications}
    </Container>
  )
};

export default ConfirmedApplications
