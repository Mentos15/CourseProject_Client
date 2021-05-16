import React, {useEffect, useState} from 'react';
import {Button, Container, Input} from "@material-ui/core";
import Title from "../Title";
import styles from "./styles";
import TextField from '@material-ui/core/TextField';
import {useDispatch, useSelector} from "react-redux";
import {fetchAddConference, fetchAllCategories} from "../../redux/actions";
import {getAllApplications, getAllCategories} from "../../redux/selectors";
// @ts-ignore
import Select from 'react-select';


const AddConferenceForm = () =>{

  const dispatch = useDispatch();
  const classes = styles();

  const allCategories = useSelector(getAllCategories);
  const categories = allCategories.map((item: any) =>{
    return {value: `${item.name}`, label:`${item.name}` }
  })

  const [addString, setAddString] = useState('')

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const [nameDirty, setNameDirty] = useState(false);
  const [descriptionDirty, setDescriptionDirty] = useState(false);
  const [dateDirty, setDateDirty] = useState(false);
  const [locationDirty, setLocationDirty] = useState(false);

  const [nameError, setNameError] = useState('Invalid name');
  const [descriptionError, setDescriptionError] = useState('Invalid description')
  const [dateError, setDateError] = useState('Invalid date');
  const [locationError, setLocationError] = useState('Invalid location')

  const [formValid, setFormValid] = useState(false);

  useEffect(()=>{
    dispatch(fetchAllCategories())
  },[])

  useEffect(()=>{
    if(nameError || descriptionError || dateError || locationError ){
      setFormValid(false);
    } else{
      setFormValid(true)
    }


  },[nameError, descriptionError, dateError, locationError])

  const blurHandler = (e: any) =>{
    switch (e.target.name){
      case 'name':
        setNameDirty(true)
        break;
      case 'description':
        setDescriptionDirty(true)
        break;
      case 'date':
        setDateDirty(true)
        break;
      case 'location':
        setLocationDirty(true)
        break;
    }
  }

  const changeDate = (e: any) => {
    setDate(e.target.value);
    const nowDate = new Date();
    nowDate.setHours(0,0,0,0)
    const selectDateArr = e.target.value.split('-');

    const selectDate = new Date(+selectDateArr[0],+selectDateArr[1]-1, +selectDateArr[2])
    if(selectDate >= nowDate ){
      setDateError('')
    }else {
      setDateError('Invalid date')
    }
  };

  const onChangeName = (e: any) =>{
    setName(e.target.value)
    if(e.target.value.length < 4){
      setNameError('Invalid name');
    } else{
      setNameError('');
    }
  }
  const onChangeLocation = (e: any) =>{
    setLocation(e.target.value)
    if(e.target.value.length < 3){
      setLocationError('Invalid location');
    } else{
      setLocationError('');
    }
  }

  const onChangeDescripton = (e: any) =>{
    setDescription(e.target.value)
    if(e.target.value.length < 10){
      setDescriptionError('Invalid description');
    } else{
      setDescriptionError('');
    }
  }

  const addConference = () =>{
     dispatch(fetchAddConference({name: name, description: description,
      date: date, location:location, category: selectedCategory.value}))

    setAddString('Конференция успешно добавлена');
  }


  return(
    <div style={{marginTop:40}}>
        <Title title={'Добавить конференцию'}/>
        <Container >
          <form style={{display:'flex', flexDirection:'column'}}>
            {(nameDirty && nameError) && <div style={{color: 'red'}}>{nameError}</div>}
            <Input
              className={classes.input}
              name={'name'}
              onBlur={(e) => blurHandler(e)}
              error={true}
              id="standard-basic"
              type={'text'}
              placeholder={'Name'}
              disableUnderline={true}
              onChange={ e => onChangeName(e)}
            />
            {(descriptionDirty && descriptionError) && <div style={{color: 'red'}}>{descriptionError}</div>}
            <Input
              className={classes.input}
              name={'description'}
              onBlur={(e) => blurHandler(e)}
              error
              id="standard-basic"
              type={'text'}
              placeholder={'description'}
              disableUnderline={true}
              onChange={e => onChangeDescripton(e)}
            />
            {(dateDirty && dateError) && <div style={{color: 'red'}}>{dateError}</div>}
            <TextField
              id="date"
              type={'date'}
              onBlur={(e) => blurHandler(e)}
              name={'date'}
              value={date}
              onChange={e => changeDate(e)}
              className={classes.textField}
            />

            {(locationDirty && locationError) && <div style={{color: 'red'}}>{locationError}</div>}
            <Input
              className={classes.input}
              name={'location'}
              onBlur={(e) => blurHandler(e)}
              error
              id="standard-basic"
              type={'text'}
              placeholder={'location'}
              disableUnderline={true}
              onChange={e => onChangeLocation(e)}
            />
            <Select
              options={categories}
              onChange={setSelectedCategory}
              value={selectedCategory}

            />
            <Button disabled={!formValid} style={{width: 150, marginTop: 20}} variant="contained" onClick={addConference}>Добавить</Button>
          </form>
          {addString}
        </Container>
    </div>
  )
}

export default AddConferenceForm;