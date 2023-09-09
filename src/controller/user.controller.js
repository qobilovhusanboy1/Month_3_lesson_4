const { fetChall } = require("../db_connection")

user_get = async (req, res) => {
    const users = await fetChall('SELECT * FROM users')
    res.send(users)
};


user_get_one =  async (req, res) => {
    const user_id = req.params;
    const user = await fetChall('SELECT * FROM users WHERE id = ($1)', [user_id]);
    
    if (!user)
        return res.status(403).send('USER NOT FOUND.');

    res.status(203).send(user);
};

user_create = async (req, res) => {
    const {email, password} = req.body;

    const user = await fetChall('INSERT INTO users (email, password) VALUES ($1, $2) RETURNING *', [email, password]);

    res.status(201).json({created: user});
};

user_update = async (req, res) => {
    const user_id = req.params;
    const {email, password} = req.body;

    const user = await fetChall('SELECT * FROM users WHERE id = ($1)', [user_id]);
    
    if (!user)
        return res.status(403).send('USER NOT FOUND.');

    const user_update = await fetChall('UPDATE users SET email = ($1), password = ($2) WHERE id = ($3) RETURNING *', [email, password, user_id]);

    res.status(203).json({update_user: user_update})
};

user_remove = async (req, res) => {
    const user_id = req.params;

    const user_remove = await fetChall('DELETE FROM users WHERE id = ($1)', [user_id]);

    res.status(201).json({delete_user: user_remove})
}

module.exports = {user_get, user_get_one, user_create, user_update, user_remove};