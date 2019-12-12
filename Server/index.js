import dotenv from 'dotenv';
import express from 'express';
import contactsRouter from './api/contacts';
import postsRouter from './api/posts';
import bodyParser from 'body-parser';

dotenv.config();

const app = express();

const port = process.env.PORT;


app.use(express.static('public'));

//configure body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

// Populate DB with sample data
if (process.env.seedDb) {
  loadContacts();
  loadPosts();
}

app.use('/api/posts', postsRouter);
app.use('/api/contacts', contactsRouter);
app.use(express.static('public'));

app.listen(port, () => {
  console.info(`Server running at ${port}`);
});