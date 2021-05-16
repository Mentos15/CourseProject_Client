import React, {useEffect, useState} from 'react';
import Title from "../Title";

import {Button, Container, Input} from '@material-ui/core';
import {useDispatch, useSelector} from "react-redux";
import {fetchRegistration, setNullRegistrationStatus} from "../../redux/actions";
import styles from "./styles";
import {getRegistrationStatus} from "../../redux/selectors";


const Registration = () =>{

  const dispatch = useDispatch();
  const classes = styles();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);

  const [emailError, setEmailError] = useState('Invalid email');
  const [passwordError, setPasswordError] = useState('Invalid password')

  const [formValid, setFormValid] = useState(false);

  const status = useSelector(getRegistrationStatus)


  useEffect(()=>{
    dispatch(setNullRegistrationStatus())
  }, [])

  const registration = () =>{
    dispatch(fetchRegistration({email:email, password: password}))
  }

  useEffect(()=>{
    if(emailError || passwordError){
      setFormValid(false);
    } else{
      setFormValid(true)
    }

  },[emailError, passwordError])

  const blurHandler = (e: any) =>{
    switch (e.target.name){
      case 'email':
        setEmailDirty(true)
        break;
      case 'password':
        setPasswordDirty(true)
        break;
    }
  }

  const onChangeEmail = (e: any) =>{
    setEmail(e.target.value);
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!re.test(String(e.target.value).toLowerCase())){
      setEmailError('Invalid email')
    } else {
      setEmailError('');
    }
  }
  const onChangePassword = (e: any) =>{
    setPassword(e.target.value)
    if(e.target.value.length < 5){
      setPasswordError('Invalid password');
    } else{
      setPasswordError('');
    }
  }

  return (
    <div style={{marginTop: 40}}>
      <Title title={'Регистрация'}/>
      <Container >
      <form style={{display:'flex', flexDirection:'column'}}>
        {(emailDirty && emailError) && <div style={{color: 'red'}}>{emailError}</div>}
        <Input
          className={classes.input}
          name={'email'}
          onBlur={(e) => blurHandler(e)}
          error={true}
          id="standard-basic"
          type={'Email'}
          placeholder={'Email'}
          disableUnderline={true}
          onChange={ e => onChangeEmail(e)}
        />
        {(passwordDirty && passwordError) && <div style={{color: 'red'}}>{passwordError}</div>}
        <Input
          className={classes.input}
          name={'password'}
          onBlur={(e) => blurHandler(e)}
          error
          id="standard-basic"
          type={'password'}
          placeholder={'password'}
          disableUnderline={true}
          onChange={e => onChangePassword(e)}
        />
        <Button disabled={!formValid} style={{width: 150}} variant="contained" onClick={registration}>Регистарция</Button>
        {status}
      </form>
      </Container>
    </div>
    )
}
 
export default Registration;
