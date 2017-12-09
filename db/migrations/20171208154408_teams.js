
exports.up = function(knex, Promise) {
    return knex.schema.createTable('teams',function(table){
        table.increments('Id')
        table.string('ABV')
        table.string('Teams')


    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('teams')
};
