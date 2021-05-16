import React, {useEffect, useState} from 'react';
import Title from "../Title";
import {Button, Container, Input} from '@material-ui/core';
import {fetchAuthorization, setNullAuthorizationStatus} from "../../redux/actions";
import styles from "./styles";
import {useDispatch, useSelector} from "react-redux";
import {getAuthorizationStatus} from "../../redux/selectors";

import { Redirect } from "react-router-dom";
import GetIsAdmin from "../../helpers/getIsAdmin";
import GetToken from "../../helpers/getToken";


const Authorization = () =>{

  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const classes = styles();

  const status = useSelector(getAuthorizationStatus)



  useEffect(() =>{
    dispatch(setNullAuthorizationStatus())
  }, [])


  const authorization = () =>{
     dispatch(fetchAuthorization({email:email, password: password}));
     localStorage.setItem('isAdmin', `${GetIsAdmin(status.roleId)}`);
  }

  localStorage.setItem('Token', `${status.token}`);


  return (

    !status.message ? (<Redirect to={'/'} />) : (
    <div style={{marginTop: 40}}>
      <Title title={'Авторизация'}/>
      <Container>
        <form style={{display:'flex', flexDirection:'column'}}>
          <Input
            className={classes.input}
            name={'email'}
            error={true}
            id="standard-basic"
            type={'Email'}
            placeholder={'Email'}
            disableUnderline={true}
            onChange={ e => setEmail(e.target.value)}
          />
          <Input
            className={classes.input}
            name={'password'}
            error
            id="standard-basic"
            type={'password'}
            placeholder={'password'}
            disableUnderline={true}
            onChange={e => setPassword(e.target.value)}
          />
          <Button style={{width: 150}} variant="contained" onClick={authorization}>Войти</Button>
          {status.message}
        </form>
      </Container>
    </div>
    )
  )
}

export default Authorization;
