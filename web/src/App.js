import React from 'react';

import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import './App.scss';

function App() {
    return (
        <BrowserRouter basename={"note-sharing-app"}>
            <div className="App">
                <Switch>
                    <Route exact path="/" component={LoginScreen}/>
                    <Route exact path="/home" component={HomeScreen}/>
                    <Route exact path="/signup" component={SignUpScreen}/>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
