const db = (req) => req.app.get('db');

const getUserBudgets = async (req, res) => {

    try {
        const user = await db(req).get_user(req.session.user.username);
        const budgets = await db(req).get_user_budgets(user[0].id);
        // console.log(accounts);
        res.status(200).send(budgets);
    } catch (err){
        console.log(`Error retrieving user budgets: ${err}`);
    }
}

const addNewBudgetCategory = async (req, res) => {

    const { expected, actual, name, date } = req.body;
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

const updateBudgetCategory = async (req, res) => {
    const { id, expected, name, date } = req.body;
    const { username } = req.session.user;

    try {
        const user = await db(req).get_user(username);
        const userId = user[0].id;
        const data = await db(req).update_budgets([id, expected, name, date, userId ]);
        res.status(200).send(data)
    } catch (err) {
        console.log(`Error updating budget category: ${err}`);
    }
}

const deleteBudgetCategory = async (req, res) => {
    // console.log(req.body);

    const { id } = req.params;
    const { username } = req.session.user;

    try {
        const user = await db(req).get_user(username);
        const userId = user[0].id;
        console.log(`Deleting: ${id}`);
        const data = await db(req).delete_one([id, userId]);
        res.status(200).send(data);
    } catch (err) {
        console.log(`Error deleting category: ${err}`);
    }
}

module.exports = {
    getUserBudgets, addNewBudgetCategory, updateBudgetCategory, deleteBudgetCategory
}