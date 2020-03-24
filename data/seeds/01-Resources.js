exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("Resources")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("Resources").insert([
        { Name: "Cement", Description: "njnnnfun iojdoij ijdiofjo" },
        { Name: "Sands", Description: "jjfdji fjiojjfd" },
        { Name: "Paint", Description: "hhfuhhuhdfn nojf jodfj " }
      ]);
    });
};
