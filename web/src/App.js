import React from 'react';

import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

import LoginScreen from './screens/LoginScreen';
import './App.scss';

function App() {
    return (
        <BrowserRouter basename={Config.appName}>
            <div className="App">
                <Switch>
                    <Route exact path="/" component={LoginScreen}/>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
