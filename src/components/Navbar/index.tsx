import React, {FC, useEffect, useState} from 'react'
import Button from "@material-ui/core/Button";
import {AppBar, Container, Toolbar, Box,Typography} from "@material-ui/core";


import styles from "./styles";
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getAuthorizationStatus} from "../../redux/selectors";
import {logoutAction} from "../../redux/actions";
import GetIsAdmin from "../../helpers/getIsAdmin";

const Navbar = () =>{

  const dispatch = useDispatch();
  const status = useSelector(getAuthorizationStatus)
  const logout = () => {
    dispatch(logoutAction())
    localStorage.setItem('isAdmin', 'false');
  }
  const classes = styles();

  return(

      <AppBar className={classes.navBar} >
          <Container >
              <Toolbar className={classes.toolBer}>
                  <Box>
                    <NavLink className={classes.navLinkMain} to={'/'}>
                      <Typography className={classes.homeLink} variant={'h6'}>
                         Conferences
                      </Typography>
                    </NavLink>
                  </Box>
                {!status.message ? (

                  <Box style={{display: 'flex'}}>
                    {GetIsAdmin(status.roleId) ? (
                      <div>
                        <NavLink className={classes.navLink} to={'/addConference'}>
                          <Button variant="contained" className={classes.getApplicationsBtn} >Добавить конференцию</Button>
                        </NavLink>
                        <NavLink className={classes.navLink} to={'/confirmedApplications'}>
                          <Button variant="contained" className={classes.getApplicationsBtn} >Обработанные</Button>
                        </NavLink>
                        <NavLink className={classes.navLink} to={'/allApplications'}>
                         <Button variant="contained" className={classes.getApplicationsBtn} >Заявки</Button>
                        </NavLink>
                      </div>
                    ) : <Typography></Typography>}
                    <Typography className={classes.email} variant={'h6'}>{status.email}</Typography>

                    <Button variant="contained" className={classes.navBarBtn} onClick={logout}>
                      Выйти
                    </Button>

                  </Box>
                ) : (
                  <Box>
                    <NavLink className={classes.navLink} to={'/registration'}>
                      <Button className={classes.navBarBtn}>
                         Регистрация
                      </Button>
                    </NavLink>
                    <NavLink className={classes.navLink} to={'/authorization'}>
                      <Button className={classes.navBarBtn}>
                        Авторизация
                      </Button>
                    </NavLink>
                  </Box>
                )}
              </Toolbar>
          </Container>
      </AppBar>
  )
}
export default Navbar;
