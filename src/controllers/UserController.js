const knex = require('../database')

module.exports = {
    async index(req,res){
        const result = await knex('users');
        return res.json(result);
    },
    async create(req, res){
        console.log(req.body)
    }
}