const db = (req) => req.app.get('db');

const getUserAccounts = async (req, res) => {

    // console.log(req.session.user);

    try {
        const user = await db(req).get_user(req.session.user.username);
        const accounts = await db(req).get_user_accounts(user[0].id);
        // console.log(accounts);
        res.status(200).send(accounts);
    } catch (err){
        console.log(`Error retrieving user accounts: ${err}`);
    }
}

const addNewAccount = async (req, res) => {

    const { type, name, notes, amount } = req.body;
    const { username } = req.session.user;

    try {
        const user = await db(req).get_user(username);
        const id = user[0].id;
        const data = await db(req).add_new_account([id, type, name, notes, amount]);
        res.status(200).send(data)
    } catch (err) {
        console.log(`Error adding new account: ${err}`);
    }
}

const updateAccountDetails = async (req, res) => {
    const { id, type, name, notes, amount } = req.body;
    const { username } = req.session.user;

    try {
        const user = await db(req).get_user(username);
        const userId = user[0].id;
        const data = await db(req).update_account_details([id, type, name, notes, amount, userId]);
        res.status(200).send(data)
    } catch (err) {
        console.log(`Error updating account: ${err}`);
    }
};

const deleteAccount = async (req, res) => {
    const { id } = req.params;
    const { username } = req.session.user;

    try {
        const user = await db(req).get_user(username);
        const userId = user[0].id;
        const data = await db(req).delete_account([id, userId]);
        res.status(200).send(data)
    } catch (err) {
        console.log(`Error deleting account: ${err}`);
    }
};


module.exports = {
    getUserAccounts, addNewAccount, updateAccountDetails, deleteAccount
}