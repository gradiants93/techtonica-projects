const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

let books = [];

app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//add book
app.post('/book', (req, res) => {
    const book = req.body;
    //output to console
    console.log(book);
    books.push(book);

    res.send('Book was added to database');
});
//get books
app.get('/books', (req, res) => {
    res.json(books);
});
app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));
