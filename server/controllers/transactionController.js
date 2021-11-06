const db = (req) => req.app.get('db');

const getUserTransactions = async (req, res) => {

    try {
        const user = await db(req).get_user(req.session.user.username);
        // const budgets = await db(req).get_user_budgets(user[0].id);
        // console.log(accounts);
        // res.status(200).send(budgets);
    } catch (err){
        console.log(`Error retrieving user transactions: ${err}`);
    }
}

const addNewTransaction = async (req, res) => {

    const { vendor, amount, category, description, date } = req.body;
    const { username } = req.session.user;
    // console.log(req.body);

    try {
        const user = await db(req).get_user(username);
        const id = user[0].id;
        const data = await db(req).add_new_budget([id , expected, actual, name, date ]);
        res.status(200).send(data)
    } catch (err) {
        console.log(`Error adding new budget category: ${err}`);
    }
}