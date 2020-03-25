const db = require("../data/config");

function getAllProject() {
  elect().table("Projects");
}

function getAllResources() {
  return db.select().table("Resources");
}
function getAllTasks() {
  return db.select().table("Tasks");
}

function insertresources(data) {
  return db("Resources")
    .insert(data)
    .then(([id]) => get(id));
}

function insertTasks(data) {
  return db("Tasks")
    .insert(data)
    .then(([id]) => get(id));
}
function insertprojects(data) {
  return db("Projects")
    .insert(data)
    .then(([id]) => get(id));
}
function insertTasks(data) {
  module.exports = { getAllProject, getAllResources, getAllTasks, insertresources, insertTasks, insertprojects };
