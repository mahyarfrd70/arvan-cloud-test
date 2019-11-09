import React, { useEffect } from 'react';
import { useSelector , useDispatch} from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { Spin, Input } from 'antd';
import './App.css';
import Auth from './helpers/auth'
import App from './pages/App'
import AppActions from './redux/app/actions'
import Login from './pages/Login'


let ProtectedRout = ({ children, isLoggedIn, ...rest }) => {debugger;return(
  <Route
    {...rest}
    render={({ location }) =>
      isLoggedIn ? (
        children
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
)}

function Main() {

  const loading = useSelector(state => state.App.loading)
  const isLoggedIn = useSelector(state => state.App.isLoggedIn)
  const dispatch = useDispatch()
  useEffect(async ()=>{
      let authStatus = await Auth.getAuth()
      dispatch({type: AppActions.CHANGE_LOADING_APP , data: false})
      dispatch({type: AppActions.IS_LOGGED_IN_APP , data: authStatus})
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
          <ProtectedRout path='/' isLoggedIn={isLoggedIn}>
            <App/>
          </ProtectedRout>
        </Switch>
    </Router>
  );
}

export default Main;
