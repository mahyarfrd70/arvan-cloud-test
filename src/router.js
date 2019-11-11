import React, { useEffect } from 'react';
import { useSelector , useDispatch} from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { Spin } from 'antd';
import './App.css';
import Auth from './helpers/auth'
import AppRouter from './pages/App/AppRouter'
import authActions from './redux/auth/actions'
import Login from './pages/Login'
import Register from './pages/Register'
import Alert from './components/alert'

let {checkAuth} = authActions


let ProtectedRoute = ({ isLoggedIn, component: Component, ...props }) => (
  <Route
    {...props}
    render={({ location }) =>
      isLoggedIn ? (
        <Component path={props.path}/>
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: location }
          }}
        />
      )
    }
  />
)

function Main() {
  const loading = useSelector(state => state.Auth.loading)
  const isLoggedIn = useSelector(state => state.Auth.isLoggedIn)
  const dispatch = useDispatch()
  useEffect(()=>{
      dispatch(checkAuth(Auth.getAuth()))
  },[])
  if(loading){
    return <Spin/>
  }
  return (
    <Router>
       <Switch>
          <Route 
            path="/login" 
            component={Login}/>
          <Route 
            path="/register" 
            component={Register}/>
          <ProtectedRoute path='/' isLoggedIn={isLoggedIn} component={AppRouter}/>
        </Switch>
        <Alert time={5000000}/>
    </Router>
  );
}

export default Main;
