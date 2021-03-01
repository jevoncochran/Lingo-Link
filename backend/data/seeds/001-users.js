const bcrypt = require("bcryptjs");

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("users")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert([
        {
          first_name: "Jevon",
          last_name: "Cochran",
          email: "jevon.cochran@gmail.com",
          password: bcrypt.hashSync("cochran", 8),
        },
        {
          first_name: "Leroy",
          last_name: "Gatlin",
          email: "leroy.gatlin@gmail.com",
          password: bcrypt.hashSync("gatlin", 8),
        },
        {
          first_name: "Henrique",
          last_name: "Santos",
          email: "henrique.santos@gmail.com",
          password: bcrypt.hashSync("santos", 8),
        },
        {
          first_name: "Juan",
          last_name: "Zamora",
          email: "juan.zamora@gmail.com",
          password: bcrypt.hashSync("zamora", 8),
        },
      ]);
    });
};
