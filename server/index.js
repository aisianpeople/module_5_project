const express = require("express");
const cors = require("cors");

const app = express();

const userCompliments = []

let id = 1;

app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

app.get("/api/fortune", (req, res) => {
  //list of fortunes
  const fortunes = ["Competence like yours is underrated.",
					 "Advice, when most needed, is least heeded.",
					 "Because you demand more from yourself, others respect you deeply.",
					 "Every flower blooms in its own sweet time.",
					 "If you think you can do a thing or think you can’t do a thing, you’re right.",
					 "One of the first things you should look for in a problem is its positive side.",
  ];

  // choose random fortune
  let randomIndex = Math.floor(Math.random() * fortunes.length);
  let randomFortune = fortunes[randomIndex];

  res.status(200).send(randomFortune);
  
});

app.post("/api/submit", (req, res) => {
  console.log(req.body)
  const { compliment } = req.body;
  const newCompliment = { id: id, compliment}
  console.log(req.body)
  userCompliments.push(compliment)
  id++;

  res.status(200).send(compliment);
  
});

app.get("/api/userCompliment", (req, res) => {
  // choose random user compliment
  let randomIndex = Math.floor(Math.random() * userCompliments.length);
  let randomUserCompliments = userCompliments[randomIndex];

  res.status(200).send(randomUserCompliments);
  
});

app.listen(4000, () => console.log("Server running on 4000"));
