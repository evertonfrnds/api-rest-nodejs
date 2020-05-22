const knex = require('../database')

module.exports = {
    async index(req, res) {
        const { user_id, page = 1 } = req.query

        const query = knex('projects')
            .limit(5)
            .offset((page - 1) * 5)


        if (user_id) {
            query
                .where({ user_id })
                .join('users', 'users.id', '=', 'projects.user_id')
                .select('projects.*', 'users.username')
        }
        const result = await query;
        return res.json(result)
    },
    async create(req, res) {
        const { title, user_id } = req.body
        await knex('projects')
            .insert({
                title,
                user_id
            })
        return res.send()
    },
    async update(req, res, next) {
        const {title} = req.body
        const {id} = req.params
        await knex('projects')
            .update({title})
            .where({id})
        res.send()
    }
}