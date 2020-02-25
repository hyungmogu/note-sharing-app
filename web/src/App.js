import React from 'react';

import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

import Header from './components/Header';
import HeaderMobile from './components/HeaderMobile';
import PrivateRoute from './components/PrivateRoute';

import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import './App.scss';

function App() {
    return (
        <BrowserRouter basename={"note-sharing-app"}>
            <div className="App">
                <HeaderMobile/>
                <Header/>
                <Switch>
                    <Route exact path="/login" component={LoginScreen}/>
                    <Route exact path="/signup" component={SignUpScreen}/>
                    <PrivateRoute exact path="/home" component={HomeScreen}/>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
