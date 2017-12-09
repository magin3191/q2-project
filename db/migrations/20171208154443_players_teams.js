
exports.up = function(knex, Promise) {
  return knex.schema.schema.createTable('Player_Teams',function(table){
    table.string('Player').references('Players.name')
    table.string('Pos').references('Players.Pos')
    table.integer('Tm').references('Players.Team').references('Teams.ABV')
    table.integer('G')
    table.inteer('GS')
    table.integer('MP')
    table.integer('FG')
    table.integer('FGA')
    table.integer('FG%')
    table.integer('3P')
    table.integer('3PA')
    table.integer('3P%')
    table.integer('2P')
    table.integer('2PA')
    table.integer('2P%')
    table.integer('eFG%')
    table.integer('FT')
    table.integer('FTA')
    table.integer('FT%')
    table.integer('ORB')
    table.integer('DRB')
    table.integer('TRB')
    table.integer('AST')
    table.integer('STL')
    table.integer('BLK')
    table.integer('TOV')
    table.integer('PF')
    table.integer('PPG')
  })

// Player,Pos,Age,Tm,G,GS,MP,FG,FGA,FG%,3P,3PA,3P%,2P,2PA,2P%,eFG%,FT,FTA,FT%,ORB,DRB,TRB,AST,STL,BLK,TOV,PF,PPG


};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('Players_Teams')
};
