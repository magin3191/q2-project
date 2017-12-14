exports.up = knex => {
  return knex.schema.createTable('favorites', (table) => {
    table.increments()
    table.integer('user_id')
      .notNullable()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
    table.string('favorite').nullable()
  })
}

exports.down = knex => {
  return knex.schema.dropTable('favorites')
}
