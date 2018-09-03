import React ,{Component} from "react";
import HomePage from '../HomePage';
import LoginPage from '../LoginPage';
import SignUpPage from '../SignUpPage';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ForgotPassword from "../ForgotPassword";

class App extends Component{
    render(){
        return(
            <Router>
                <Switch>
                <Route exact path="/" component={LoginPage}/>
                <Route path="/signup" component={SignUpPage}/>
                <Route path="/home" component={HomePage}/>
                <Route path ="/forgotpassword" component={ForgotPassword}/>
                </Switch>
            </Router>
        );
    }
}

export default App;