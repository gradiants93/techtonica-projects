const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

const app = express();
const port = 3000;

let books = [
  {
    isbn: "0553120441",
    title: "Dragonsong",
    author: "McCaffrey, Anne",
    format: "Paperback",
  },
  {
    isbn: "0679889175",
    title: "First Test",
    author: "Pierce, Tamora",
    format: "Paperback",
  },
  {
    isbn: "9780857660282",
    title: "Sixty-One Nails",
    author: "Shevdon, Mike",
    format: "Paperback",
  },
  {
    isbn: "0553096095",
    title: "The Diamond Age",
    author: "Stephenson, Neal",
    format: "Hardcover",
  },
];

app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/book", (req, res) => {
  res.sendFile(path.join(__dirname, "/new-book.html"));
});

//add book
app.post("/book", (req, res) => {
  const book = req.body;
  //output to console
  console.log(book);
  books.push(book);

  res.send("Book was added to database");
});

//get books
app.get("/books", (req, res) => {
  res.json(books);
});

//get specific book
app.get("/book/:isbn", (req, res) => {
  // Reading isbn from the URL
  const isbn = req.params.isbn;

  for (let book of books) {
    if (book.isbn === isbn) {
      res.json(book);
      return;
    }
  }
  // Sending 404 when not found something is a good practice
  res.status(404).send("Book not found");
});

app.delete("/book/:isbn", (req, res) => {
  // Reading isbn from the URL
  const isbn = req.params.isbn;

  // Remove item from the books array
  books = books.filter((i) => {
    if (i.isbn !== isbn) {
      return true;
    }
    return false;
  });

  res.send("Book is deleted");
});
app.listen(port, () =>
  console.log(`Hello world app listening on port ${port}!`)
);
