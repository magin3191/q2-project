
exports.up = function(knex, Promise) {
    return knex.schema.createTable('Teams',function(table){
        table.increments('Id')
        table.string('ABV')
        table.string('Team')


    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('Teams')
};
