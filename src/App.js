import './App.css';
import Nav from './components/Nav/Nav'
import routes from './routes'
import authRoutes from './authRoutes'
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';

const App = (props) => {

  const [loggedInStatus, setLoggedInStatus ] = useState(false);

  // console.log(loggedInStatus);

  useEffect(() => {
    console.log(props.state);
    setLoggedInStatus(props.state.loggedIn);
  }, [props.state])

  return (
    <div className='App'>

      {!loggedInStatus && authRoutes }

      {loggedInStatus && 
        <>
        <main>{routes}</main>
        <Nav />
        </>
      }
    </div>
  )
}

const mapStateToProps = (reduxState) => {
  // console.log(reduxState);

  return {
    state: reduxState
  }
}

export default connect(mapStateToProps)(App);
