import React, { useEffect } from 'react';
import { useSelector , useDispatch} from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Auth from './helpers/auth'
import AppRouter from './pages/App/AppRouter'
import authActions from './redux/auth/actions'
import Login from './pages/Login'
import Register from './pages/Register'
import Alert from './components/alert'
import appActions from './redux/app/actions'
import Loading from './components/loading'
import './App.css';

let {setAuth} = authActions
let {setUserData} = appActions


let ProtectedRoute = ({ isLoggedIn, component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isLoggedIn ? (
        <Component {...props}/>
      ) : (
        <Redirect
          to={{
            pathname: "/login"
          }}
        />
      )
    }
  />
)

function Main() {
  const loading = useSelector(state => state.Auth.loading)
  const isLoggedIn = useSelector(state => state.Auth.idToken ? true : false)
  const dispatch = useDispatch()
  const getAuth = async () => {
    try{
      let response = await Auth.getAuth();
      let {data: {user: { username , email , image , token}}} = response
      dispatch(setUserData({username , email , image}))
      dispatch(setAuth(token))
    }catch(err){
      dispatch(setAuth(err))
    }
  };
  useEffect(()=>{
    getAuth()
  },[])
  if(loading){
    return <Loading color='primary'/>
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
          <ProtectedRoute 
              path='/articles'
              isLoggedIn={isLoggedIn}
              component={AppRouter}/>
          <Route 
              path="/" 
              component={Login}/>
        </Switch>
        <Alert time={3000}/>
    </Router>
  );
}

export default Main;
