import React, {Component} from 'react';

import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

import { AppProvider } from './components/Context';

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

    state = {
        user: {
            name: null,
            email: null,
            authToken: null
        },
        notes: {
            slug: null,
            imported: false,
            items: []
        },
        folders: {
            slug: null,
            imported: false,
            items: [
                {
                    pk: 1,
                    slug: 'lecture1',
                    name: 'Lecture 1'
                },
                {
                    pk: 2,
                    slug: 'lecture2',
                    name: 'Lecture 2'
                },
                {
                    pk: 3,
                    slug: 'lecture3',
                    name: 'Lecture 3'
                }
            ]
        },
        pages: {
            slug: null,
            imported: false,
            currentIndex: null,
            items: [
                {
                    pk: 1,
                    name: 'Page 1',
                    slug: 'page1',
                    url: 'https://via.placeholder.com/200'
                },
                {
                    pk: 2,
                    name: 'Page 2',
                    slug: 'page2',
                    url: 'https://via.placeholder.com/200'
                },
                {
                    pk: 3,
                    name: 'Page 3',
                    slug: 'page3',
                    url: 'https://via.placeholder.com/200'
                }
            ]
        }
    }

    render() {
        return (
            <AppProvider value={{...this.state}}>
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
            </AppProvider>
        );
    }
}

export default App;
