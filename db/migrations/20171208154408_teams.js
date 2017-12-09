
exports.up = function(knex, Promise) {
    return knex.schema.createTable('teams',function(table){
        table.increments()
        table.string('Abv')


    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('teams')
};
