const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Temporary DB
let users = [];
let id = 1;

// CREATE
app.post("/users", (req, res) => {
  const newUser = { id: id++, ...req.body };
  users.push(newUser);
  res.json(newUser);
});

// READ + SEARCH + FILTER + SORT
app.get("/users", (req, res) => {
  let { search, age, sort } = req.query;

  let result = [...users];

  // SEARCH
  if (search) {
    result = result.filter(u =>
      u.name.toLowerCase().includes(search.toLowerCase())
    );
  }

  // FILTER
  if (age) {
    result = result.filter(u => u.age == age);
  }

  // SORT
  if (sort === "age") {
    result.sort((a, b) => a.age - b.age);
  }

  if (sort === "name") {
    result.sort((a, b) => a.name.localeCompare(b.name));
  }

  res.json(result);
});

// UPDATE
app.put("/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  users = users.map(u =>
    u.id === userId ? { ...u, ...req.body } : u
  );
  res.json({ message: "Updated" });
});

//  DELETE
app.delete("/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  users = users.filter(u => u.id !== userId);
  res.json({ message: "Deleted" });
});

app.listen(5000, () => console.log("Server running on 5000"));