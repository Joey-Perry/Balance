import './App.css';
import Nav from './components/Nav/Nav'
import routes from './routes'
import authRoutes from './authRoutes'

const App = () => {
  
  const loggedIn = false;

  return (
    <div className='App'>

      {!loggedIn && authRoutes }

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
