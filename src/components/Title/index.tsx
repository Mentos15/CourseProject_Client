import React from 'react';
import {Container, Typography} from "@material-ui/core";
import {styles} from "./styles";
import {Props} from "./type";

const Title = (props:Props) =>{
    const {title} = props;
    return(
        <Container>
            <Typography variant={'h6'}>{title}</Typography>
            <hr style={styles.line}/>
        </Container>
    )
};

export default Title;
