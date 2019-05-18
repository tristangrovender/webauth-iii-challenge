exports.up = function(knex) {
  return knex.schema.createTable("users", users => {
    users.increments();

    users
      .string("username", 128)
      .notNullable()
      .unique();
    users.string("password", 128).notNullable();
    users.string("department", 128).notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("users");
};

// NEED TO ADD DEPARTMENT (A STRING USED TO GROUP THE USERS)

// npx knex init
// npx knex migrate:make create_roles_table
// npx knex migrate:latest
