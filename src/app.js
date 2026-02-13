import express from "express";

const app = express();
app.use(express.json());

const books = [
  {
    id: 1,
    title: "O Senhor dos Anéis"
  },
  {
    id: 2,
    title: "O Hobbit"
  }
]

function findBooks(id) {
  return livros.findIndex(livro => {
    return livro.id === Number(id);
  })
}

app.get("/", (req, res) => {
  res.status(200).send("Curso de Node.js");
});

app.get("/livros", (req, res) => {
  res.status(200).json(books);
});

app.get("/books/:id", (req, res) => {
  const index = findBooks(req.params.id);
  res.status(200).json(books[index]);
})

app.post("/books", (req, res) => {
  books.push(req.body);
  res.status(201).send("livro cadastrado com sucesso");
});

app.put("/books/:id", (req, res) => {
  const index = findBooks(req.params.id);
  books[index].titulo = req.body.titulo;
  res.status(200).json(books);
});

app.delete("/books/:id", (req, res) => {
  const index = findBooks(req.params.id);
  books.splice(index, 1);
  res.status(200).send("livro removido com sucesso");
});

export default app;