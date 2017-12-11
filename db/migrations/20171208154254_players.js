
exports.up = function(knex, Promise) {
  return knex.schema.createTable('players',function(table){
    table.increments()
    table.string('Player').notNullable()
    table.string('Pos')
    table.string('Team')
    table.integer('Num')
    table.string('Ht')
    table.string('Wt')
    table.integer('Age')


  })

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('players')
};
