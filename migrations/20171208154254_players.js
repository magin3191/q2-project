
exports.up = function(knex, Promise) {
  return knex.schema.createTable('players',function(table){
    table.increments()
    table.string('Player')
    table.string('Pos').nullable()
    table.string('Team').nullable()
    table.integer('Num').nullable()
    table.integer('Ht').nullable()
    table.integer('Wt').nullable()
    table.integer('Age').nullable()


  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('players')
};
