import './App.css';
import Nav from './components/Nav/Nav'
import routes from './routes'

const App = () => {
  return (
    <>
      <main>{routes}</main>
      <Nav />
    </>
  )
}

export default App;
