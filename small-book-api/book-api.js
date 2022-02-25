const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 3000;

let books = [{
    isbn: '0-553-12044-1',
    title: 'Dragonsong',
    author: 'Anne McCaffrey',
    format: 'Paperback'
}, {
    isbn: '0-679-88917-5',
    title: 'First Test',
    author: 'Tamora Pierce',
    format: 'Paperback'
}, {
    isbn: '978-0-85766-0-28-2',
    title: 'Sixty-One Nails',
    author: 'Mike Shevdon',
    format: 'Paperback'
}, {
    isbn: '0-553-09609-5',
    title: 'The Diamond Age',
    author: 'Neal Stephenson',
    format: 'Hardcover'
}];

app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/book', (req, res) => {
    res.sendFile(path.join(__dirname, '/new-book.html'));
});
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
