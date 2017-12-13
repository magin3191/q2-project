exports.seed = knex => {
  return knex('users').del()
    .then(() => {
      return knex('users').insert([{
        id: 1,
        first_name: 'Ross',
        last_name: 'Tienken',
        email: 'ross@admin.com',
        hashed_password: '$2a$10$zst/0hntBO9dlLodSqesDeCAe.Uk1g3IZzpd9K3Rlk2DMZ6IY1cG.',
        created_at: new Date('2017-12-11 16:46:00 UTC'),
        updated_at: new Date('2017-12-11 16:46:00 UTC')
      }]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('users_id_seq', (SELECT MAX(id) FROM users));"
      );
    });
};
