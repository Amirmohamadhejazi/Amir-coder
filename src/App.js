import React from "react";
import Nav from "./component/Nav";
import Home from "./component/page/Home";
import About from "./component/page/About";
import Buy from "./component/page/Buy"
import Work_samples from "./component/page/work_samples"
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
            <div className="h-container bg-container IRANSansWeb">
                <Nav/>
                <Switch>
                    <Route path='/' exact component={Home}/>
                    <Route path='/home' component={Home}/>
                    <Route path='/about' component={About}/>
                    <Route path='/Buy' component={Buy}/>
                    <Route path='/Work_samples' component={Work_samples}/>
                </Switch>
            </div>
        </Router>

    )
}
