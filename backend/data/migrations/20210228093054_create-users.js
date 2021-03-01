exports.up = function (knex) {
  return knex.schema.createTable("users", (tbl) => {
    tbl.increments();

    tbl.string("first_name", 50).notNullable();

    tbl.string("last_name", 50).notNullable();

    tbl.string("email", 100).notNullable().unique();

    tbl.string("password", 50).notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("users");
};
