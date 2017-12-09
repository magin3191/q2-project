
exports.up = function(knex, Promise) {
  return knex.schema.createTable('players',(table){
    table.increments()
    table.integer('name')
    table.string('height')
    table.string('weight')
    table.string('position')

    )

  })

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('players')
};
