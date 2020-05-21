const knex = require('../database')

module.exports = {
    async index(req, res){
        const results = await knex('projects')
        return res.json(results)
    },
    async create(req, res){
        const {title, user_id} = req.body
        await knex('projects')
            .insert({
                title,
                user_id
            })
        return res.send()
    }
}