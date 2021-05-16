import React, {useEffect} from "react";
import {Button, Container, Typography} from "@material-ui/core";
import styles from "./styles";
import {useDispatch, useSelector} from "react-redux";
import {fetchAcceptApplication, fetchAllApplications, fetchCancelApplication} from "../../redux/actions";
import {getAllApplications} from "../../redux/selectors";

import {NavLink} from "react-router-dom";

const AllApplications = () =>{
  const dispatch = useDispatch();
  const classes = styles();



  useEffect(() =>{
    dispatch(fetchAllApplications());
  },[])



  const cancelApplication = (id:number) =>{
    dispatch(fetchCancelApplication(id))
  }

  const acceptApplication = (id: number) =>{
    dispatch(fetchAcceptApplication(id))
  }

  const applications = useSelector(getAllApplications);

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
          <Button variant="contained" onClick={() => acceptApplication(application.id)} style={{marginRight: 20}}>Принять</Button>
          <Button variant="contained" onClick={() => cancelApplication(application.id)} color='secondary'>Отклонить</Button>
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

export default AllApplications
