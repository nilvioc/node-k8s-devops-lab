const express = require("express");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Projeto DevOps v2 no ar!");
});

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.get("/info", (req, res) => {
  res.json({
    app: "node-k8s-devops-lab",
    version: "2.0.0"
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
