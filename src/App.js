import './App.css';
import Nav from './components/Nav/Nav'
import routes from './routes'

const App = () => {
  return (
    <div className='App'>
      <main>{routes}</main>
      <Nav />
    </div>
  )
}

export default App;
