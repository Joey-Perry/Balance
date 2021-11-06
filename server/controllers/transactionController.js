const db = (req) => req.app.get('db');

const getUserTransactions = async (req, res) => {

    try {
        const user = await db(req).get_user(req.session.user.username);
        const transactions = await db(req).get_transactions(user[0].id);
        res.status(200).send(transactions);
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
        const data = await db(req).add_new_transaction([id, vendor, amount, category, description, date ]);
        res.status(200).send(data)
    } catch (err) {
        console.log(`Error adding new budget category: ${err}`);
    }
}

const updateTransactions = async (req, res) => {
    const { id, vendor, amount, category, description, date } = req.body;
    const { username } = req.session.user;

    try {
        const user = await db(req).get_user(username);
        const userId = user[0].id;
        const data = await db(req).update_transactions([id, vendor, amount, category, description, date, userId ]);
        res.status(200).send(data)
    } catch (err) {
        console.log(`Error updating budget category: ${err}`);
    }
}

const deleteTransaction = async (req, res) => {
    const { id } = req.params;
    const { username } = req.session.user;

    try {
        const user = await db(req).get_user(username);
        const userId = user[0].id;
        console.log(`Deleting: ${id}`);
        const data = await db(req).delete_transaction([id, userId]);
        res.status(200).send(data);
    } catch (err) {
        console.log(`Error deleting category: ${err}`);
    }
}

module.exports = {
    getUserTransactions, addNewTransaction, updateTransactions, deleteTransaction
}