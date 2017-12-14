exports.seed = knex => {
  return knex('favorites').del()
    .then(() => {
      return knex('favorites').insert([{
          id: 1,
          user_id: 1,
        }])
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('favorites_id_seq', (SELECT MAX(id) FROM favorites));"
      )
    })
}
