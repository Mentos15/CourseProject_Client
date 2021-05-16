import React, {useEffect, useState} from 'react'
import {Button, Container, Input, Typography} from "@material-ui/core";
import styles from "./styles";
import {useDispatch, useSelector} from "react-redux";
import {fetchSetApplication} from "../../redux/actions/applicationsActions";
import {getAuthorizationStatus, getSetApplicationStatus} from "../../redux/selectors";
import {Redirect} from "react-router-dom";


const ApplicationForm = (props: any) =>{

  const dispatch = useDispatch();
  const user = useSelector(getAuthorizationStatus);
  const status = useSelector(getSetApplicationStatus);
  const id = props.match.params.id;
  const authorizationStatus = useSelector(getAuthorizationStatus);


  const classes = styles();

  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState<number>();


  const [nameDirty, setNameDirty] = useState(false);
  const [lastNameDirty, setLastNameDirty] = useState(false);
  const [phoneDirty, setPhoneDirty] = useState(false);

  const [nameError, setNameError] = useState('Invalid name');
  const [lastNameError, setLastNameError] = useState('Invalid last name')
  const [phoneError, setPhoneError] = useState('Invalid phone');

  const [formValid, setFormValid] = useState(false);


  useEffect(()=>{
    if(nameError || lastNameError || phoneError){
      setFormValid(false);
    } else{
      setFormValid(true)
    }

  },[nameError, lastNameError, phoneError])

  const blurHandler = (e: any) =>{
    switch (e.target.name){
      case 'name':
        setNameDirty(true)
        break;
      case 'lastName':
        setLastNameDirty(true)
        break;
      case 'phone':
        setPhoneDirty(true)
        break;
    }
  }

  const submitForm = () =>{
    dispatch(fetchSetApplication({userId: user.id,name: name, lastName: lastName, phone: phone, conferenceId: id}))
  }

  const onChangeName = (e: any) =>{
    setName(e.target.value)
    const reg = /^[a-zA-Z ]+$/
    if(!reg.test(String(e.target.value).toLowerCase())){
      setNameError('Invalid name');
    } else{
      setNameError('');
    }
  }

  const onChangeLastName = (e: any) =>{
    setLastName(e.target.value)
    const reg = /^[a-zA-Z ]+$/
    if(!reg.test(String(e.target.value).toLowerCase())){
      setLastNameError('Invalid last name');
    } else{
      setLastNameError('');
    }
  }

  const onChangePhone = (e: any) =>{
    setPhone(Number(e.target.value));
    if(e.target.value.length !== 7 ){
      setPhoneError('Invalid phone');
    } else{
      setPhoneError('');
    }
  }

  return (
    !Boolean(authorizationStatus.token) ? (<Redirect to={'/authorization'} />) :
      (
    <Container className={classes.container}>
      <Typography style={{marginBottom: 20}} variant={'h3'}>Заявка</Typography>
      <form style={{display:'flex', flexDirection:'column'}}>

        {(nameDirty && nameError) && <div style={{color: 'red'}}>{nameError}</div>}
        <Input
          className={classes.input}
          name={'name'}
          error={true}
          onBlur={(e) => blurHandler(e)}
          id="standard-basic"
          type={'text'}
          placeholder={'Name'}
          disableUnderline={true}
          onChange={ e => onChangeName(e)}
        />
        {(lastNameDirty && lastNameError) && <div style={{color: 'red'}}>{lastNameError}</div>}
        <Input
          className={classes.input}
          name={'lastName'}
          error
          onBlur={(e) => blurHandler(e)}
          id="standard-basic"
          type={'text'}
          placeholder={'Last Name'}
          disableUnderline={true}
          onChange={e => onChangeLastName(e)}
        />
        {(phoneDirty && phoneError) && <div style={{color: 'red'}}>{phoneError}</div>}
        <Input
          className={classes.input}
          name={'phone'}
          error
          onBlur={(e) => blurHandler(e)}
          id="standard-basic"
          type={'number'}
          placeholder={'phone'}
          disableUnderline={true}
          onChange={e => onChangePhone(e)}
        />
        <Button disabled={!formValid} style={{width: 150}} variant="contained" onClick={submitForm} >Записаться</Button>
        {status}
      </form>
    </Container>
  ))
};

export default ApplicationForm;