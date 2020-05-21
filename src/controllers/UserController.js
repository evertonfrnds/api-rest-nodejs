const knex = require('../database')

module.exports = {
    async index(req,res){
        const result = await knex('users');
        return res.json(result);
    },
    async create(req, res){
        const {username} = req.body

        await knex('users').insert({
            username
        })
        return res.json({message:'Adicionado'})
    },
    async update(req, res){
        const {username} = req.body
        const {id} = req.params

        await knex('users')
        .update({
            username
        })
        .where({id})

        return res.send()
    },
    async delete(req, res){
        const {id} = req.params
        
        await knex('users')
        .where({id})
        .del()

        return res.send()
    }
}