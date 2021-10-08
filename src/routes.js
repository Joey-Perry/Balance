export default (
    <Switch>
        <Route exact path='/' component = {Dash} />
        <Route path='/budgets' component = {Budget} />
        <Route path='/transactions' component= {Transactions} />
        <Route path='/accountDetail' component={AccountDetail} />
    </Switch>
)