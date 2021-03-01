const db = require("../data/dbConfig");

module.exports = { addUser, findUserBy, findUserById };

function addUser(user) {
  return db("users")
    .insert(user, "id")
    .then((ids) => {
      const [id] = ids;
      return findUserById(id);
    });
}

function findUserBy(filter) {
  return db("users").where(filter);
}

function findUserById(id) {
  return db("users").select("*").where({ id }).first();
}
