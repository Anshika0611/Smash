import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Lectures from './pages/Lectures';
import LectureDetails from './pages/LectureDetails';

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/lectures" component={Lectures} />
                <Route path="/lectures/:id" component={LectureDetails} />
            </Switch>
        </Router>
    );
}

export default App;