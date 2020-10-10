import React from "react";
import Nav from "./component/Nav";
import Home from "./component/Home";
import Buy from "./component/proces"
import Work_samples from "./component/work_samples"
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './style/App.css';
import './style/bootstrap.min.css';


export default function App() {

    const home = () => (
        <div>
            {Home}
        </div>
    );
    return (
        <Router>
            <div>
                <Nav/>
                <Switch>
                    <Route path='/' exact component={Home}/>
                    <Route path='/home' component={Home}/>
                    <Route path='/Buy' component={Buy}/>
                    <Route path='/Work_samples' component={Work_samples}/>
                </Switch>
            </div>
        </Router>

    )
}
