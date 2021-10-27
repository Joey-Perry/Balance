const db = (req) => req.app.get('db');

const getUserBudgets = async (req, res) => {

    try {
        const user = await db(req).get_user(req.body.username);
        const budgets = await db(req).get_user_budgets(user[0].id);
        // console.log(accounts);
        res.status(200).send(budgets);
    } catch (err){
        console.log(`Error retrieving user budgets: ${err}`);
    }
}

const addNewBudgetCategory = async (req, res) => {

    const { username, expected, actual, name, date } = req.body;

    try {
        const user = await db(req).get_user(username);
        const id = user[0].id;
        const data = await db(req).add_new_budget([id , expected, actual, name, date ]);
        res.status(200).send(data)
    } catch (err) {
        console.log(`Error adding new budget category: ${err}`);
    }
}

module.exports = {
    getUserBudgets, addNewBudgetCategory
}