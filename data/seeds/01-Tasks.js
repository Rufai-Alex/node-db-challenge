exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("Tasks")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("Tasks").insert([
        {
          Description: "diu jfslj ojocxnlcic",
          ProjectId: 3,
          Note: "hkmnvi iruttk kf f fkf ",
          task_completed: ""
        },
        {
          Description: "hfifdn jiiorj ljxopp",
          ProjectId: 2,
          Note: "dhnfjuf dhfof ofdufo ",
          task_completed: ""
        },
        {
          Description: " hfjnlxl nfnondf nxll dl ",
          ProjectId: 1,
          Note: "uetyyiuty sddjljfisi",
          task_completed: ""
        }
      ]);
    });
};
