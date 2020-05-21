
exports.up = knex => 
knex.schema.createTable('projects', function(table){
  table.increments('id')
  table.string('title').unique().notNullable()

  //relacionamento
  //1 - n
  table.integer('user_id')
    .references('users.id')
    .notNullable()
    .onDelete('CASCADE')

  table.timestamp(true, true)
  
})

exports.down = knex =>
knex.schema.dropTable('users')

