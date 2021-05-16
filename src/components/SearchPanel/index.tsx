import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';

import styles from "./styles";
import {Container, Typography} from "@material-ui/core";
import { Input } from '@material-ui/core';
import defaultTagsStyles from "./defaultTagsStyles";


const SearchPanel = (props:any) =>{
    const classes = styles();
    const defStyles = defaultTagsStyles;
    const {setText, searchConference} = props;

    return(
        <div style={defStyles.root}>
            <Container>
              <Input
                onKeyPress={event => {
                  if (event.key === 'Enter') {
                    searchConference()
                  }
                }}
                className={classes.input}
                id="standard-basic"
                placeholder={'Поиск'}
                disableUnderline={true}
                onChange={(e)=>{setText(e.target.value)}} />

            </Container>

        </div>
    )
};
export default SearchPanel;
