
exports.up = function(knex, Promise) {
  return knex.schema.createTable('player_teams',function(table){
    table.string('Player')
    table.string('Pos')
    table.string('Tm')
    table.decimal('G')
    table.decimal('GS')
    table.decimal('MP')
    table.decimal('FG')
    table.decimal('FGA')
    table.decimal('FG%')
    table.decimal('3P')
    table.decimal('3PA')
    table.decimal('3P%')
    table.decimal('2P')
    table.decimal('2PA')
    table.decimal('2P%')
    table.decimal('eFG%')
    table.decimal('FT')
    table.decimal('FTA')
    table.decimal('FT%')
    table.decimal('ORB')
    table.decimal('DRB')
    table.decimal('TRB')
    table.decimal('AST')
    table.decimal('STL')
    table.decimal('BLK')
    table.decimal('TOV')
    table.decimal('PF')
    table.decimal('PS/G')
  })



};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('player_teams')
};
