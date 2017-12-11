
exports.up = function(knex, Promise) {
  return knex.schema.createTable('Players',(table){
    table.increments()
    table.string('Player')
    table.string('Pos')
    table.string('Team').reference('Teams.ABV')
    table.integer('Num')
    table.string('Ht')
    table.string('Wt')
    table.integer('Age')

    )

  })

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('Players')
};
