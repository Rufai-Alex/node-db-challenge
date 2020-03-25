exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("Projects")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("Projects").insert([
        {
          Name: "Renovation",
          Description: "qwer tyko jiofk jdof jdofomp ",
          taskCompleted: ""
        },
        {
          Name: "Demolition",
          Description: "sogo oosgjj jsoo  ofkjo",
          taskCompleted: "yes"
        },
        {
          Name: "Construction",
          Description: "idjojdfml jioj oofj ",
          taskCompleted: ""
        }
      ]);
    });
};
