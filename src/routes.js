import { Route, Switch } from 'react-router-dom';
import Dash from './components/Dash/Dash'
import Budget from './components/Budget/Budget'
import Transactions from './components/Transactions/Transactions'

export default (
    <Switch>
        <Route exact path='/' component = {Dash} />
        <Route path='/budgets' component = {Budget} />
        <Route path='/transactions' component= {Transactions} />
        {/* <Route path='/accountDetail' component={AccountDetail} /> */}
    </Switch>
)