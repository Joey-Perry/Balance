import { Route, Switch } from 'react-router-dom';
import Signup from './components/Signup/Signup'
import Signin from './components/Signin/Signin'


export default (
    <Switch>
        <Route exact path='/' component = {Signin} />
        <Route path='/signup' component = {Signup} />
    </Switch>
)