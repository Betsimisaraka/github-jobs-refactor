import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home, Details } from './pages';

export default function App() {
    return (
        <>
            <Router>
                <Switch>
                    <Route path="/details/:id">
                        <Details />
                    </Route>
                    <Route pat="/">
                        <Home />
                    </Route>
                </Switch>
            </Router>
        </>
    )
}
