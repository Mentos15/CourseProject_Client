import React, {useEffect, useState} from 'react';

import Conference from "../Conference";
import Title from "../Title";
import SearchPanel from "../SearchPanel";
import {useSelector, useDispatch} from "react-redux";
import {getAllConferences, getAuthorizationStatus, getAllCategories} from "../../redux/selectors";
import {
  fetchAllCategories,
  fetchConferencesByCategoriesFilter,
  fetchConferencesBySearchFilter
} from "../../redux/actions";
import MultiSelect from "react-multi-select-component";
import {Container, Button} from "@material-ui/core";
import styles from "./styles";
import GetIsAdmin from "../../helpers/getIsAdmin";




const AllConferences = () =>{
  const classes = styles();

  const allCategories = useSelector(getAllCategories);
  const categories = allCategories.map((item: any) =>{
    return {value: `${item.name}`, label:`${item.name}` }
  })
  const dispatch = useDispatch();
  const [text,setText] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);


  const status = useSelector(getAuthorizationStatus)
  if(status.token !== undefined && GetIsAdmin(status.roleId)){
    localStorage.setItem('isAdmin', 'true');
  }else {
    localStorage.setItem('isAdmin', 'false');
  }

  useEffect(()=>{
    dispatch(fetchConferencesBySearchFilter(text))
    dispatch(fetchAllCategories())
  },[])


  const conferences = useSelector(getAllConferences);

  const searchConference = () =>{
    dispatch(fetchConferencesBySearchFilter(text))
  }

  const searchByCategories = () =>{
    const nameCategories = selectedCategories.map((item: any) => {
      return item.value;
    })
    dispatch(fetchConferencesByCategoriesFilter(nameCategories))
  }

  const allConferences = conferences.map((item: any, index: number) =>{
    return(
      <Conference id={item.id} key={index} name={item.name} time={item.date.substring(0,10)}/>
    )
  })

    return(
        <div>
          <SearchPanel searchConference={searchConference} setText={setText}/>
          <Container className={classes.container}>
          <MultiSelect
            options={categories}
            value={selectedCategories}
            onChange={setSelectedCategories}
            labelledBy="Select"
            className={classes.selection}
          />
          <Button className={classes.btn} onClick={searchByCategories} variant="contained">Найти</Button>
          </Container>
          <Title title={'Конференции'}/>

          {allConferences.reverse()}
        </div>
    )
};

export default AllConferences;
