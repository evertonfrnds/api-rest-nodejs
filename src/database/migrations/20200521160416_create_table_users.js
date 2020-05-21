
exports.up = knex => 
    knex.schema.createTable('users', function(table){
      table.increments('id')
      table.string('username').unique().notNullable()

      table.timestamp('create_at').defaultTo(knex.fn.now())
      table.timestamp('update_at').defaultTo(knex.fn.now())
      
  })

exports.down = knex =>
  knex.schema.dropTable('users')

