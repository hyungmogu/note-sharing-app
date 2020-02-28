import React from 'react';

import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

import PrimaryHeader from './components/PrimaryHeader';
import PrimaryHeaderMobile from './components/PrimaryHeaderMobile';
import PrivateRoute from './components/PrivateRoute';

import DirectoryScreen from './screens/DirectoryScreen';
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
                    <Route path="/login" component={LoginScreen}/>
                    <Route path="/signup" component={SignUpScreen}/>
                    <PrivateRoute path="/home" component={HomeScreen}/>
                    <PrivateRoute path="/notes/:note/:folder" component={DirectoryScreen}/>
                    <PrivateRoute path="/notes/:note" component={DirectoryScreen}/>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
