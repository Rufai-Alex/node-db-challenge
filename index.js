const express = require("express");

const app = express();
const helmet = require("helmet");
app.use(express.json());
const projectHelper = require("./projects/projectsHelper");
const PORT = 5555;

app.get("/api", (req, res) => {
  projectHelper
    .getAllProject()
    .then(stuff => {
      res.status(200).json(stuff);
    })
    .catch(err => {
      res.status(404).json({ err });
    });
});

app.get("/api/Resources", (req, res) => {
  projectHelper
    .getAllResources()
    .then(stuff => {
      res.status(200).json(stuff);
    })
    .catch(err => {
      res.status(404).json({ err });
    });
});

app.get("/api/Tasks", (req, res) => {
  projectHelper
    .getAllResources()
    .then(stuff => {
      res.status(200).json(stuff);
    })
    .catch(err => {
      res.status(404).json({ err });
    });

  app.post("/api/Projects", (req, res) => {
    actionHelpers
      .insertProject(req.body)
      .then(stuff => {
        res.status(200).json({ stuff });
      })
      .catch(err => {
        res.status(404).json({ err });
      });
  });

  app.post("/api/Resources", (req, res) => {
    actionHelpers
      .insertResources(req.body)
      .then(stuff => {
        res.status(200).json({ stuff });
      })
      .catch(err => {
        res.status(404).json({ err });
      });
  });

  app.post("/api/Tasks", (req, res) => {
    actionHelpers
      .insertTask(req.body)
      .then(stuff => {
        res.status(200).json({ stuff });
      })
      .catch(err => {
        res.status(404).json({ err });
      });
  });
});
app.listen(PORT, () => {
  console.log(`i am listening on ${PORT}`);
});
