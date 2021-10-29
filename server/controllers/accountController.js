const db = (req) => req.app.get('db');

const getUserAccounts = async (req, res) => {

    console.log(req.session.user);

    try {
        const user = await db(req).get_user(req.session.user.username);
        const accounts = await db(req).get_user_accounts(user[0].id);
        console.log(accounts);
        res.status(200).send(accounts);
    } catch (err){
        console.log(`Error retrieving user accounts: ${err}`);
    }
}

const addNewAccount = async (req, res) => {

    const { username, type, name, notes, amount } = req.body;

    try {
        const user = await db(req).get_user(username);
        const id = user[0].id;
        const data = await db(req).add_new_account([id, type, name, notes, amount]);
        res.status(200).send(data)
    } catch (err) {
        console.log(`Error adding new account: ${err}`);
    }
}

// const deleteOne = (req, res) => {
//     const { id } = req.params;

//     db(req).delete_one(id)
//         .then(data => res.sendStatus(200))
//         .catch(err => console.log(`Error deleting id ${id}: ${err}`));
// };

// const update = (req, res) => {
//     const { body } = req.body;

//     db(req).update(body)
//         .then(data => res.status(200).send(data))
//         .catch(err => console.log(`Error updating data: ${err}`));
// };

module.exports = {
    getUserAccounts, addNewAccount
}