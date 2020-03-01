import React, {Component} from 'react';

import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

import NoteViewHeader from './components/NoteViewHeader';
import PrimaryHeader from './components/PrimaryHeader';
import PrimaryHeaderMobile from './components/PrimaryHeaderMobile';
import PrivateRoute from './components/PrivateRoute';

import NoteViewScreen from './screens/NoteViewScreen';
import DirectoryScreen from './screens/DirectoryScreen';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import './App.scss';

class App extends Component {
    render() {
        return (
            <BrowserRouter basename={"note-sharing-app"}>
                <div className="App">
                    <NoteViewHeader/>
                    <PrimaryHeaderMobile/>
                    <PrimaryHeader/>
                    <Switch>
                        <Route path="/login" component={LoginScreen}/>
                        <Route path="/signup" component={SignUpScreen}/>
                        <PrivateRoute path="/home" component={HomeScreen}/>
                        <PrivateRoute path="/notes/:note/:folder/:page" component={NoteViewScreen}/>
                        <PrivateRoute path="/notes/:note/:folder" component={DirectoryScreen}/>
                        <PrivateRoute path="/notes/:note" component={DirectoryScreen}/>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
