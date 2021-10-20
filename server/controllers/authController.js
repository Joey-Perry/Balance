const bcrypt = require('bcryptjs');
const db = (req) => req.app.get('db');

const getUser = async (req, res) => {
    // console.log(req.body);
    try {
        const user = await db(req).get_user(req.body.username);
        // console.log(user);
        return res.status(200).send(user);
    } catch (err) {
        console.log(`Error retrieving user: ${err}`);
    }
};

const login = async (req, res) => {
    const { username, password } = req.body;
    
    console.log(password);
    
    try {
        const foundUser = await db(req).get_user(username);
        const user = foundUser[0];
        console.log(user);
        if (!user){
            return res.status(401).send('User nout found. Please register a new user before logging in.');
        } else {
            const isAuthenticated = bcrypt.compareSync(password, user.password);
            if (!isAuthenticated){
                return res.status(403).send('Incorrect password!')
            } else {
                req.session.user = {
                    id: user.id,
                    username: user.username,
                    email: user.email,
                    firstName: user.first_name,
                    lastName: user.last_name
                }
                console.log(req.session.user);
                return res.status(200).send(req.session.user);
            }
        }
    } catch (err) {
        console.log(`Error logging in user: ${err}`);
    }
}

module.exports = {
    getUser, login
}