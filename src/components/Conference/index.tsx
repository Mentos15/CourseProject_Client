import React from "react";
import {Container, Typography} from "@material-ui/core";
import styles from "./styles";
import img from '../../images/yutub-knopka.jpeg'
import {defaultStyle} from "./styles";
import {NavLink} from 'react-router-dom';

const Conference = (props:any) =>{
    const {name, time, id} = props;
    const style = styles();
    return(
        <Container className={style.container}>
            {/*<div  style={defaultStyle.img}>*/}
            {/*    <img style={{width:120, height:100}} src={img}/>*/}
            {/*</div>*/}
            <div>
                <Typography variant={'overline'} className={style.title}>Конференция</Typography>
              <NavLink className={style.navLink} to={`/allInfo/${id}`}><Typography variant={'h4'} className={style.name}>{name}</Typography></NavLink>
                <Typography variant={'caption'} className={style.time}>{time}</Typography>
            </div>
        </Container>
    )
};

export default Conference;
