import React from 'react';

import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

import PrimaryHeader from './components/PrimaryHeader';
import PrimaryHeaderMobile from './components/PrimaryHeaderMobile';
import PrivateRoute from './components/PrivateRoute';

import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import './App.scss';

function App() {
    return (
        <BrowserRouter basename={"note-sharing-app"}>
            <div className="App">
                <PrimaryHeaderMobile/>
                <PrimaryHeader/>
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
