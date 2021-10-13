import './App.css';
import Nav from './components/Nav/Nav'
import Signin from './components/Signin/Signin'
import routes from './routes'

const App = () => {
  
  const loggedIn = false;

  return (
    <div className='App'>

      {!loggedIn && <Signin />}

      {loggedIn && 
        <>
        <main>{routes}</main>
        <Nav />
        </>
      }
    </div>
  )
}

export default App;
