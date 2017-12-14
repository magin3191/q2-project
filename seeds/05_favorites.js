exports.seed = knex => {
  return knex('favorites').del()
    .then(() => {
      return knex('favorites').insert([{
          id: 1,
          user_id: 1,
          favorite: {"stat1":"G","stat2":"MP","constraint":"PG"}
        }])
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('favorites_id_seq', (SELECT MAX(id) FROM favorites));"
      )
    })
}
