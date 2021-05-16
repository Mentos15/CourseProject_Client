import {Provider, useSelector} from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import {BrowserRouter, Switch, Route} from "react-router-dom"

import Navbar from "./components/Navbar";
import AllConferences from "./components/AllConferences";
import {getSagaStore} from "./redux/sagaStore";
import Registration from "./components/Registration";
import Authorization from "./components/Authorization";
import AllConferenceInfo from "./components/AllConferenceInfo";
import ApplicationForm from "./components/ApplicationForm";
import AllApplications from "./components/Applications";
import ConfirmedApplications from "./components/ConfirmedApplications";
import PrivateRoute from "./components/PrivateRoute";

import AddConferenceForm from "./components/AddConference";
import React, { useEffect, useState} from "react";

import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';

const client = new WebSocket('wss://fierce-wave-80837.herokuapp.com');

function App() {
  const { store, persistor } = getSagaStore();

  const [open, setOpen] = useState(true);
  const [dialogText, setDialogText] = useState('');

  const handleClose = () => {
    setOpen(false);

    client.close();
  };

  useEffect(() =>{
    client.onopen = () => {
      console.log('WebSocket Client Connected');
      client.onmessage = (event) =>{
        setDialogText(event.data);
      }
    };


  },[])

  return (

    <Provider store={store}>
      <PersistGate persistor={persistor}>

        <BrowserRouter >

          <Navbar/>

          <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
            <DialogTitle id="simple-dialog-title">{dialogText}</DialogTitle>
          </Dialog>

          <Switch>

            <Route component={AllConferences} path="/" exact/>
            <Route component={AllConferenceInfo} path="/allInfo/:id" />
            <Route component={ApplicationForm} path="/applicationForm/:id" />
            <PrivateRoute component={AllApplications} path="/allApplications" />
            <PrivateRoute component={AddConferenceForm} path="/addConference" />
            <PrivateRoute component={ConfirmedApplications} path="/confirmedApplications" />
            <Route component={Registration} path="/registration"/>
            <Route component={Authorization} path="/authorization"/>
          </Switch>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
};

export default App;
